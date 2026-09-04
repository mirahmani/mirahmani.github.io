/* =========================================================
   EDIT CONTENT HERE — no HTML needed for most updates.
   ========================================================= */

window.SITE = {
  brand: "Miranti Rahmani",
  shortName: "Mira",
  role: "Business Intelligence Engineer",

  headline: "Data platforms that clear the noise so teams can move.",
  lede:
    "I design warehouses, pipelines, and analytics that make the right data show up on time, for the company and partners.",

  ctaPrimary: { label: "View projects", href: "projects.html" },
  ctaSecondary: { label: "Contact", href: "contact.html" },
  ctaGithub: { label: "GitHub", href: "https://github.com/mirahmani" },

  aboutTitle: "About",
  about: [
    "I build end-to-end data solutions so people inside the company and our partners can trust what they see and act on it quickly. My specialty is automation and cleaner workflows: less distraction, more meaningful work.",
    "In my off hours, I love reading, cooking, making art, and doing side projects. I also run a YouTube channel in Indonesian about what I'm learning in the data field.",
  ],

  focusTitle: "How I work",
  focus: [
    {
      num: "01",
      title: "Platforms",
      text: "Warehouse design, ETL, and shared foundations that scale past one-off dashboards.",
    },
    {
      num: "02",
      title: "Analytics",
      text: "Product metrics, executive views, and near-realtime ops monitoring when the field can't wait.",
    },
    {
      num: "03",
      title: "Automation",
      text: "Process and cost optimization that cuts waste without sacrificing data trust.",
    },
  ],

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Projects", href: "projects.html" },
    { label: "Contact", href: "contact.html" },
  ],

  social: [
    { label: "LinkedIn", href: "https://id.linkedin.com/in/mirantirahmani" },
    { label: "YouTube", href: "https://youtube.com/c/MirasBlackbox" },
    { label: "GitHub", href: "https://github.com/mirahmani" },
  ],

  projectsIntro:
    "Selected work across data platforms, analytics, reporting, and automation.",

  projects: [
    {
      title: "Enterprise Data Warehouse & Analytics Platform",
      summary:
        "Designed and built a shared analytics foundation from the ground up—assessing data maturity, modeling the warehouse, and wiring end-to-end pipelines from spreadsheets, relational databases, and web analytics into one place teams could trust. The goal was to make reliable analytical data available across the organization without every team reinventing its own extract and report.",
      skills: ["SQL", "Python", "Airflow", "BigQuery", "GCS", "Dataflow"],
      featured: true,
    },
    {
      title: "Data Quality & Reporting Reliability",
      summary:
        "Defined data quality standards and supervised cleansing and validation so reports stopped telling conflicting stories. By tightening definitions and checks upstream, accuracy improved substantially and cross-department discrepancies dropped—giving stakeholders a single, more trustworthy view of the business.",
      skills: ["Data quality", "SQL", "Governance", "Validation"],
      featured: true,
    },
    {
      title: "Product & Executive Metrics",
      summary:
        "Translated product and business goals into measurable KPIs, then shipped dashboards for product teams and leadership. The work connected day-to-day product signals with company-level performance so decisions could move from anecdote to evidence—without drowning people in unused charts.",
      skills: ["Analysis", "Looker Studio", "KPI design"],
      featured: true,
    },
    {
      title: "Operational & Near-realtime Analytics",
      summary:
        "Built analytics for live operations such as crowd flow, venue usage, earnings, and visitor profiles, so field and ops teams could act while the event or venue was still running. Pipelines and dashboards were tuned for low latency and practical decisions, not just end-of-day reporting.",
      skills: ["SQL", "Airflow", "Looker Studio", "Analysis"],
      featured: true,
    },
    {
      title: "Investor & Regulatory Reporting Automation",
      summary:
        "Owned recurring external reporting for investors, shareholders, and regulatory needs: clear metric definitions, dependable extracts, and automation that removed manual spreadsheet fire drills. Reports that used to depend on brittle handoffs became scheduled, documented, and repeatable.",
      skills: ["Python", "BigQuery", "GCS", "Tableau"],
      featured: false,
    },
    {
      title: "Analytics Cost & Pipeline Optimization",
      summary:
        "Revisited warehouse design and pipeline behavior to cut waste: spotting queries and jobs that spiked cost, tightening models and schedules, and monitoring infrastructure so spend stayed proportional to value. The result was meaningfully lower data-platform cost without sacrificing the reliability teams already depended on.",
      skills: ["SQL", "Cloud Monitoring", "BigQuery", "Optimization"],
      featured: false,
    },
  ],

  contactTitle: "Contact",
  contactLede: "Open to conversations about data platforms, analytics, or collaboration.",
  contactBody:
    "Reach me on LinkedIn, or watch what I share on data (in Indonesian) on YouTube.",
};
