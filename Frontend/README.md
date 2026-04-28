
=======
# open-llm-leaderboard-analysis
A Data visualisation project to analyse open llm leaderboard data from hugging face to make effective decisions while choosing llm models.

Project Description

This project presents an interactive frontend dashboard for analyzing the Hugging Face Open LLM Leaderboard. The goal is to transform raw evaluation results into meaningful visual insights that help users understand model performance, efficiency, and trade-offs.

The system integrates a data processing pipeline with a visualization layer to enable intuitive exploration of large language models across multiple benchmarks. Instead of viewing leaderboard scores in tabular form, this dashboard provides visual representations that highlight trends, comparisons, and optimal model choices.

Key visualizations include:

A scatter plot showing the relationship between model size (parameter count) and overall performance, helping identify whether larger models consistently perform better.
A benchmark comparison chart that evaluates models across multiple tasks, revealing strengths and weaknesses in areas such as reasoning, mathematics, and coding.
A Pareto frontier analysis that highlights models offering the best performance for their size, enabling efficient decision-making for deployment.
A model detail view that provides a deeper breakdown of individual model capabilities across benchmarks.

The frontend is built using React and Vite, with charts generated through a Python-based analysis pipeline and rendered as visual outputs. This combination allows for both high-performance data processing and user-friendly visualization.

Overall, the project demonstrates how data visualization can enhance the interpretability of machine learning benchmarks and support better model selection for real-world applications.

🎯 Purpose

The primary objectives of this project are:

To simplify the analysis of LLM leaderboard data
To compare models beyond raw scores
To identify efficient models using performance vs size trade-offs
To provide a user-friendly interface for exploring complex evaluation data