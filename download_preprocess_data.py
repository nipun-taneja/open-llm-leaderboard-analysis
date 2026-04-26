import requests
import pandas as pd

URL = "https://open-llm-leaderboard-open-llm-leaderboard.hf.space/api/leaderboard/formatted"

data = requests.get(URL).json()

rows = []

for item in data:
    row = {
        # --- Top level ---
        "id": item.get("id"),
        
        # --- Model ---
        "model_name": item["model"].get("name"),
        "model_sha": item["model"].get("sha"),
        "precision": item["model"].get("precision"),
        "model_type": item["model"].get("type"),
        "weight_type": item["model"].get("weight_type"),
        "architecture": item["model"].get("architecture"),
        "avg_score": item["model"].get("average_score"),
        "has_chat_template": item["model"].get("has_chat_template"),

        # --- Features ---
        "is_not_available_on_hub": item["features"].get("is_not_available_on_hub"),
        "is_merged": item["features"].get("is_merged"),
        "is_moe": item["features"].get("is_moe"),
        "is_flagged": item["features"].get("is_flagged"),
        "is_official_provider": item["features"].get("is_official_provider"),

        # --- Metadata ---
        "upload_date": item["metadata"].get("upload_date"),
        "submission_date": item["metadata"].get("submission_date"),
        "generation": item["metadata"].get("generation"),
        "base_model": item["metadata"].get("base_model"),
        "license": item["metadata"].get("hub_license"),
        "likes": item["metadata"].get("hub_hearts"),
        "params_b": item["metadata"].get("params_billions"),
        "co2_kg": item["metadata"].get("co2_cost"),
    }

    # --- Evaluations ---
    benchmarks = ["ifeval", "bbh", "math", "gpqa", "musr", "mmlu_pro"]

    for b in benchmarks:
        eval_data = item["evaluations"].get(b, {})
        row[f"{b}_raw"] = eval_data.get("value")
        row[f"{b}_norm"] = eval_data.get("normalized_score")

    rows.append(row)

df = pd.DataFrame(rows)

df = df.sort_values("avg_score", ascending=False)
df = df.drop_duplicates(subset=["model_name"], keep="first")

df = df[df["precision"].isin(["fp16", "bfloat16"])]

df.to_csv("hf_open_llm_leaderboard_clean.csv", index=False)
