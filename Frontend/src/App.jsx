import React from 'react';
import ZoomDialog from './components/ZoomDialog';

export default function App() {
  const analysisOutputs = [
  {
    id: 1,
    file: 'dashboard_scatter.png',
    title: 'Parameter Scale vs. Performance',
    desc: `
        This scatter plot analyzes the relationship between model size (parameter count) and overall performance.

        Most models are densely clustered below 20B parameters, indicating that the majority of open-source models operate in the small-to-medium scale range. Within this region, performance varies significantly, suggesting that architectural choices and fine-tuning strategies play a critical role beyond just model size.

        Larger models (50B+ parameters) generally achieve higher scores, but the improvement is not strictly linear. Some smaller models outperform larger ones, highlighting efficiency differences across model families.

        Overall, the chart demonstrates that while scale contributes to performance, it is not the sole determining factor.
            `,
  },

  {
    id: 2,
    file: 'comparison_bar.png',
    title: 'Model Comparison Across Benchmarks',
    desc: `
          This bar chart compares the performance of selected models across multiple benchmark datasets.

          All models show strong performance on GPQA and GSM8K, indicating solid capabilities in reasoning and mathematical problem-solving tasks. However, performance drops noticeably on HumanEval, suggesting limitations in code generation or programming-related tasks.

          The differences between models are relatively small, indicating that performance is consistent across architectures for most benchmarks. This suggests that improvements at this level are incremental rather than drastic.

          Overall, the chart highlights benchmark-specific strengths and weaknesses rather than a single dominant model.
              `,
  },

  {
    id: 3,
    file: 'pareto_frontier.png',
    title: 'Pareto Frontier Analysis',
    desc: `
        This chart visualizes the trade-off between model size and performance using a Pareto frontier.

        Models on the Pareto frontier represent optimal choices, achieving the best possible performance for their size. These models are particularly valuable for deployment scenarios where efficiency is critical.

        The presence of dominated models (those below the frontier) indicates inefficiencies—larger models that do not provide proportional performance gains compared to smaller alternatives.

        This analysis helps identify models that balance cost and performance effectively, making it useful for real-world system design decisions.
            `,
  },

  {
    id: 4,
    file: 'model_detail.png',
    title: 'Model Detail Analysis',
    desc: `
          This view provides a detailed breakdown of an individual model's performance across benchmarks.

          It highlights how a single model performs differently depending on the task, revealing strengths in certain domains and weaknesses in others. For example, a model may excel in reasoning benchmarks while underperforming in coding or factual accuracy.

          Such detailed analysis is important for selecting models based on specific use cases rather than relying on overall averages.

          This chart supports deeper interpretability and helps guide informed model selection decisions.
              `,
  },
];

  const benchmarks = [
    {
      name: 'IFEval',
      desc: 'Instruction-following benchmark that measures how well a model follows requested constraints.',
    },
    {
      name: 'BBH',
      desc: 'Big-Bench Hard benchmark for advanced reasoning tasks.',
    },
    {
      name: 'MATH',
      desc: 'Measures mathematical reasoning performance on difficult problems.',
    },
    {
      name: 'GPQA',
      desc: 'Graduate-level question answering benchmark for deep scientific reasoning.',
    },
    {
      name: 'MUSR',
      desc: 'Multi-step soft reasoning benchmark.',
    },
    {
      name: 'MMLU-PRO',
      desc: 'Professional-level multitask language understanding benchmark.',
    },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.brand} onClick={() => scrollTo('home')}>
            <span style={styles.brandIcon}>📊</span>
            <span>LLM Leaderboard Analytics</span>
          </div>

          <div style={styles.navLinks}>
            <button style={styles.navButton} onClick={() => scrollTo('dataset')}>Dataset</button>
            <button style={styles.navButton} onClick={() => scrollTo('architecture')}>Architecture</button>
            <button style={styles.navButton} onClick={() => scrollTo('system')}>System</button>
            <button style={styles.navButton} onClick={() => scrollTo('analysis')}>Analysis</button>
          </div>

          <a
            href="https://github.com/nipun-taneja/open-llm-leaderboard-analysis"
            target="_blank"
            rel="noreferrer"
            style={styles.githubLink}
          >
            GitHub
          </a>
        </div>
      </nav>

      <main style={styles.container}>
        <section id="home" style={styles.hero}>
          <div style={styles.badge}>Official Submission Report</div>
          <h1 style={styles.heroTitle}>Open LLM Leaderboard Analysis</h1>
          <p style={styles.heroText}>
            A comprehensive data visualization and analysis pipeline for the Hugging Face Open LLM
            Leaderboard, enabling data-driven decisions in model architecture and selection.
          </p>

          <div style={styles.heroButtons}>
            <button style={styles.primaryButton} onClick={() => scrollTo('analysis')}>
              View Analysis Outputs
            </button>
            <button style={styles.secondaryButton} onClick={() => scrollTo('dataset')}>
              Read Documentation
            </button>
          </div>
        </section>

        <section id="dataset" style={styles.section}>
          <h2 style={styles.sectionTitle}>Data Set Description</h2>

          <div style={styles.twoCol}>
            <div style={styles.card}>
              <p style={styles.paragraph}>
                The primary dataset is ingested from the Hugging Face Open LLM Leaderboard. It is a
                consolidated tracker that ranks open-source large language models and chatbots based
                on rigorous, standardized evaluation metrics.
              </p>

              <p style={styles.paragraph}>
                After our pipeline executes, the processed data is stored in{' '}
                <code style={styles.code}>hf_open_llm_leaderboard_clean.csv</code>. This normalized
                dataset includes critical metadata such as model architecture, parameter count,
                precision types, and aggregated scores across multiple domains of reasoning.
              </p>

              <h3 style={styles.subTitle}>Core Dataset Attributes</h3>
              <ul style={styles.list}>
                <li>Model Name and Base Architecture</li>
                <li>Parameter Count (Model Size in Billions)</li>
                <li>Precision (FP16, 8-bit, 4-bit)</li>
                <li>Model Type (Pretrained vs Instruction Tuned)</li>
              </ul>
            </div>

            <div style={styles.darkCard}>
              <h3 style={styles.darkTitle}>Evaluation Benchmarks</h3>
              <div style={styles.benchmarkGrid}>
                {benchmarks.map((b) => (
                  <div key={b.name} style={styles.benchmarkItem}>
                    <div style={styles.benchmarkName}>{b.name}</div>
                    <div style={styles.benchmarkDesc}>{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" style={styles.section}>
          <h2 style={styles.sectionTitle}>System Architecture</h2>

          <div style={styles.architectureWrap}>
            <div style={styles.archBox}>
              <div style={styles.archIcon}>🗂️</div>
              <div style={styles.archTitle}>HF Hub</div>
              <div style={styles.archText}>Raw Leaderboard API and dataset repository</div>
            </div>

            <div style={styles.archArrow}>→</div>

            <div style={styles.archBox}>
              <div style={styles.archIcon}>⚙️</div>
              <div style={styles.archTitle}>Data Processor</div>
              <div style={styles.archText}>Cleaning, parsing, and normalization scripts</div>
            </div>

            <div style={styles.archArrow}>→</div>

            <div style={styles.archBox}>
              <div style={styles.archIcon}>📄</div>
              <div style={styles.archTitle}>Clean Artifact</div>
              <div style={styles.archText}>hf_open_llm_leaderboard_clean.csv</div>
            </div>

            <div style={styles.archArrow}>→</div>

            <div style={styles.archBox}>
              <div style={styles.archIcon}>📈</div>
              <div style={styles.archTitle}>Outputs Engine</div>
              <div style={styles.archText}>EDA and chart generation</div>
            </div>
          </div>

          <p style={styles.paragraph}>
            The architecture is designed as a linear, reproducible ETL pipeline. It isolates the
            ingestion logic from the analytical presentation logic, ensuring that when the
            leaderboard is updated, the preprocessing script can be rerun to generate a fresh CSV
            and refreshed outputs.
          </p>
        </section>

        <section id="system" style={styles.section}>
          <h2 style={styles.sectionTitle}>System Description</h2>

          <div style={styles.threeCol}>
            <div style={styles.card}>
              <div style={styles.stepCircle}>1</div>
              <h3 style={styles.subTitle}>Extraction and Cleaning</h3>
              <p style={styles.paragraph}>
                The system queries remote datasets, handles missing evaluations, coerces mixed data
                types, and standardizes model naming conventions.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.stepCircle}>2</div>
              <h3 style={styles.subTitle}>Statistical Analysis</h3>
              <p style={styles.paragraph}>
                Pandas and numerical analysis are used to calculate aggregations, compare models,
                and study performance-size trade-offs.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.stepCircle}>3</div>
              <h3 style={styles.subTitle}>Visualization Generation</h3>
              <p style={styles.paragraph}>
                Charts are generated and saved into the outputs folder so they can be displayed
                directly inside this frontend report.
              </p>
            </div>
          </div>
        </section>

        <section id="analysis" style={styles.section}>
          <h2 style={styles.sectionTitle}>Analysis and Outputs</h2>

          {/* <div style={styles.infoBox}>
            This page loads images from <code style={styles.code}>/outputs/</code> inside the
            public folder.
          </div> */}

          <div style={styles.chartGrid}>
            {analysisOutputs.map((item) => (
              <div key={item.id} style={styles.chartCard}>
                <div style={styles.chartRow}>
                  <div style={styles.chartImageWrap}>
                    <ZoomDialog imageSrc={`/outputs/${item.file}`} imageAlt={item.title}>
                      <img
                        src={`/outputs/${item.file}`}
                        alt={item.title}
                        style={styles.chartImage}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </ZoomDialog>
                  </div>

                  <div style={styles.chartBody}>
                    <h3 style={styles.chartTitle}>{item.title}</h3>
                    <p style={styles.chartDesc}>{item.desc}</p>
                    {/* <div style={styles.chartSource}>Source: {item.file}</div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f8fafc',
    color: '#0f172a',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
  },
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(255,255,255,0.92)',
    borderBottom: '1px solid #e2e8f0',
    backdropFilter: 'blur(10px)',
  },
  navInner: {
  width: '100%',
  padding: '18px 40px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
},
  brand: {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontWeight: 700,
  fontSize: '28px',
  cursor: 'pointer',
},
  brandIcon: {
    fontSize: '24px',
  },
  navLinks: {
  display: 'flex',
  gap: '40px',
  marginLeft: 'auto', 
},
  navButton: {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '#334155',
  fontSize: '22px',
  fontWeight: 700,
  letterSpacing: '0.5px',
},
  githubLink: {
  textDecoration: 'none',
  color: '#334155',
  fontWeight: 700,
  fontSize: '22px',
},
  container: {
    width: '100%',
    padding: '32px 40px',
    boxSizing: 'border-box',
  },
  hero: {
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    borderRadius: '28px',
    color: 'white',
    textAlign: 'center',
    padding: '64px 32px',
    marginBottom: '56px',
    width: '100%',
    boxSizing: 'border-box',
  },
  badge: {
    display: 'inline-block',
    background: 'rgba(59,130,246,0.18)',
    color: '#bfdbfe',
    border: '1px solid rgba(59,130,246,0.3)',
    padding: '10px 18px',
    borderRadius: '999px',
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '24px',
  },
  heroTitle: {
  fontSize: '72px',
  fontWeight: 800,
  margin: '0 0 20px 0',
},

  heroText: {
  maxWidth: '900px',
  margin: '0 auto',
  fontSize: '28px',
  lineHeight: 1.7,
  color: '#cbd5e1',
},
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '18px',
    flexWrap: 'wrap',
    marginTop: '32px',
  },
  primaryButton: {
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '999px',
    padding: '16px 28px',
    fontWeight: 600,
    fontSize: '18px',
    cursor: 'pointer',
  },
  secondaryButton: {
    background: 'transparent',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '999px',
    padding: '16px 28px',
    fontWeight: 600,
    fontSize: '18px',
    cursor: 'pointer',
  },
  section: {
    marginBottom: '64px',
  },
  sectionTitle: {
  fontSize: '52px',
  fontWeight: 800,
  marginBottom: '24px',
},
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
  },
  threeCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  card: {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '18px',
    padding: '28px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },
  darkCard: {
    background: '#0f172a',
    borderRadius: '18px',
    padding: '28px',
  },
  darkTitle: {
  color: 'white',
  fontSize: '32px',
  fontWeight: 700,
  marginBottom: '20px',
},
  paragraph: {
  color: '#475569',
  lineHeight: 1.9,
  fontSize: '24px',
},
  code: {
    background: '#e2e8f0',
    padding: '3px 8px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontSize: '16px',
  },
  subTitle: {
  fontSize: '30px',
  fontWeight: 700,
  marginBottom: '14px',
},
  list: {
  paddingLeft: '24px',
  color: '#475569',
  lineHeight: 1.9,
  fontSize: '22px',
},
  benchmarkGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  benchmarkItem: {
    background: '#1e293b',
    borderRadius: '12px',
    padding: '16px',
  },
  benchmarkName: {
  color: '#60a5fa',
  fontWeight: 700,
  fontSize: '22px',
  marginBottom: '8px',
},
  benchmarkDesc: {
  color: '#cbd5e1',
  fontSize: '17px',
  lineHeight: 1.6,
},
  architectureWrap: {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr',
    gap: '14px',
    alignItems: 'center',
    marginBottom: '24px',
  },
  archBox: {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '18px',
    padding: '24px',
    textAlign: 'center',
  },
  archIcon: {
    fontSize: '32px',
    marginBottom: '12px',
  },
  archTitle: {
  fontWeight: 700,
  fontSize: '24px',
  marginBottom: '8px',
},
  archText: {
  fontSize: '17px',
  color: '#64748b',
  lineHeight: 1.5,
},
  archArrow: {
    fontSize: '32px',
    color: '#94a3b8',
  },
  stepCircle: {
    width: '42px',
    height: '42px',
    borderRadius: '999px',
    background: '#dbeafe',
    color: '#2563eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '18px',
    marginBottom: '16px',
  },
  infoBox: {
    background: '#dbeafe',
    border: '1px solid #bfdbfe',
    color: '#1e3a8a',
    padding: '20px',
    borderRadius: '14px',
    marginBottom: '24px',
    fontSize: '18px',
    lineHeight: 1.6,
  },
  chartGrid: {
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr',
    gridTemplateColumns: '1fr',
    gap: '24px',
  },
  chartCard: {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '18px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
  },
  chartImageWrap: {
  background: '#f1f5f9',
  padding: '24px',
  borderRight: '1px solid #e2e8f0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '520px',   // 🔥 bigger container
},
  chartImage: {
  width: '100%',        // 🔥 full width
  height: '100%',
  maxHeight: '600px',   // control height nicely
  objectFit: 'contain',
},
  chartBody: {
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
},
chartRow: {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr', // 🔥 image gets more space
  alignItems: 'stretch',
},
  chartTitle: {
  margin: '0 0 12px 0',
  fontSize: '34px',
  fontWeight: 700,
},
  chartDesc: {
  color: '#475569',
  fontSize: '22px',
  lineHeight: 1.8,
  marginBottom: '14px',
},
  chartSource: {
    color: '#94a3b8',
    fontSize: '15px',
    fontFamily: 'monospace',
  },
};