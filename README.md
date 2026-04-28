# open-llm-leaderboard-analysis
A Data visualisation project to analyse open llm leaderboard data from hugging face to make effective decisions while choosing llm models.
# Open LLM Leaderboard – Frontend Dashboard

## Overview

This project provides a **frontend visualization dashboard** for analyzing results from the **Hugging Face Open LLM Leaderboard**.

It enables users to explore model performance, compare benchmarks, and understand trade-offs between model size and accuracy through interactive visualizations.

---

## Features

 **Dashboard Visualization**
  - Scatter plot: Parameter count vs performance
  - Model exploration with filtering

- 📈 **Model Comparison**
  - Side-by-side benchmark comparison
  - Bar charts for multiple evaluation metrics

- ⚖️ **Pareto Frontier Analysis**
  - Identifies optimal models based on size vs performance trade-offs

- 🔍 **Model Detail View**
  - Displays metadata (architecture, parameters, license)
  - Benchmark breakdown for selected models

---

## Tech Stack

- **Frontend:** React + Vite  
- **Styling:** Tailwind CSS  
- **Visualization:** Matplotlib (generated charts)  
- **Data Source:** Hugging Face Open LLM Leaderboard  

---

##  Project Structure

```bash
Frontend/
├── src/                # React components
├── public/outputs/     # Generated charts
├── package.json
├── vite.config.js
└── index.html


## How to Run Locally
cd Frontend
npm install
npm run dev

Then open:

http://localhost:5173

Data Pipeline

The frontend uses preprocessed data generated from:

download_preprocess_data.py
hf_open_llm_leaderboard_clean.csv

Charts are generated using Python and stored in:

Frontend/public/outputs/



GitHub Repository:
https://github.com/nipun-taneja/open-llm-leaderboard-analysis

