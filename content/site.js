/* =========================================================
   Site content — sourced from Obsidian portfolio brief.
   Edit here; HTML stays structural.
   ========================================================= */

window.SITE = {
  brand: "Miranti Rahmani",
  shortName: "Mira",
  role: "Head of Business Intelligence · Analytics Engineer",

  headline: "Builds data analytics platform that solves problem that matters.",
  lede:
    "I build analytics ground-up where the foundations are still messy: shared warehouses, near-realtime ops reporting, and delivery that holds up when decisions can’t wait for end-of-day.",

  ctaPrimary: { label: "Selected work", href: "projects.html" },
  ctaSecondary: { label: "Contact", href: "contact.html" },
  ctaGithub: { label: "GitHub", href: "https://github.com/mirahmani" },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Experience", href: "index.html#experience" },
    { label: "Projects", href: "projects.html" },
    { label: "Skills", href: "index.html#skills" },
    { label: "Education", href: "index.html#education" },
    { label: "Contact", href: "contact.html" },
  ],

  social: [
    { label: "LinkedIn", href: "https://id.linkedin.com/in/mirantirahmani" },
    { label: "YouTube", href: "https://youtube.com/c/MirasBlackbox" },
    { label: "GitHub", href: "https://github.com/mirahmani" },
  ],

  radar: {
    axes: ["Platforms", "Analytics", "Quality", "Delivery", "Leadership", "AI"],
    values: [0.92, 0.9, 0.88, 0.86, 0.84, 0.8],
  },

  highlights: [
    { value: "8+", label: "Years in analytics & BI" },
    { value: "15+", label: "External clients handled" },
    { value: "~90%", label: "Faster data processing" },
    { value: "~50%", label: "Higher operational efficiency" },
  ],

  summaryTitle: "Overview",
  summary: [
    "Head of Business Intelligence with 8+ years building data platforms and client-facing insights for mid-market and growth companies.",
    "I work across internal teams and 15+ external clients — with a bias toward speed, trust, and decisions that can’t wait for overnight reports.",
  ],

  experienceTitle: "Experience",
  experience: [
    {
      company: "GOERS",
      role: "Head of Data Analytics",
      period: "Sep 2022 – Present · Jakarta",
      summary:
        "Led data strategy, infrastructure, and analytics delivery for internal teams and 15+ external clients, including platforms with ~90% faster processing and clearer data standards.",
    },
    {
      company: "GOERS",
      role: "Business Intelligence Engineer",
      period: "Sep 2021 – Sep 2022 · Jakarta",
      summary:
        "Built the warehouse and end-to-end pipelines, plus BI automation and dashboards for event/venue data across B2B and B2C partners.",
    },
    {
      company: "Tokopedia",
      role: "Business Intelligence Specialist",
      period: "Aug 2018 – Feb 2020",
      summary:
        "Owned investor and management reporting (Tableau) and automated regulatory reports with BigQuery, GCS, and Python.",
    },
    {
      company: "Bank Indonesia",
      role: "XBRL Senior Developer",
      period: "Oct 2012 – Dec 2014 · Jakarta",
      summary:
        "Built regulatory financial reporting for Islamic banks : XBRL taxonomies, validation, and stakeholder enablement.",
    },
  ],

  projectsIntro:
    "Three pieces of work that show how I build platforms, serve live operations, and ship client-facing analytics.",

  projects: [
    {
      id: "warehouse",
      title: "Enterprise Data Warehouse & Analytics Platform",
      dek: "From zero to a shared analytics foundation.",
      summary:
        "Stood up a shared warehouse and analytics platform where none existed, starting from business process and stakeholder pain, not from tools.",
      body: [
        "Most of the work was upstream of modeling: understanding why existing processes existed, who owned them, and what “good” had to look like. The organization sat around maturity Level 2 (basic reporting, inconsistent quality, no shared metric definitions, and reports that scaled poorly as volume and complexity grew).",
        "External clients needed answers quickly, often with thin briefs, for decisions in the field. Requirements varied enough that full automation wasn’t realistic. The model had to cover roughly 70–80% of recurring needs while leaving room for custom queries.",
        "Documenting essential processes, standardizing terminology and metric math, and automating pipelines lifted operational efficiency by more than 50%. It also reduced single points of failure and made onboarding for data, QA, and product engineering easier.",
      ],
      takeaway:
        "Understanding the problem comes before the stack. Efficiency here came mostly from mapped requirements and the habit of asking better questions before writing queries.",
      skills: ["SQL", "Python", "Airflow", "BigQuery", "GCS", "Data modeling"],
      featured: true,
    },
    {
      id: "realtime",
      title: "Operational & Near-Realtime Analytics",
      dek: "Reliable analytics when the decision is happening now.",
      summary:
        "Built near-realtime ops analytics for event and venue teams who need fresh signal while the floor is still live without defaulting to expensive streaming.",
      body: [
        "In event and venue operations, people need capacity and mitigation decisions while the event is running. A pure OLTP path would have been ideal. Given platform limits and resources, the data team’s OLAP layer had to carry operational load. It is Not ideal, but necessary, so the design had to be a win-win.",
        "After patterns across clients became clear, the useful question wasn’t “how do we go real-time?” but “how fast is fast enough?” Most clients did not need split-second updates. Five to ten minute mini-batches were tolerable, supported field decisions, and avoided the cost of full streaming.",
        "That approach resolved about 90% of client data-related complaints under the constraints we had.",
      ],
      takeaway:
        "“Real-time” is a requirement to interrogate, not a default architecture. For live ops, mini-batches were fast enough and cheaper than streaming theater.",
      skills: ["SQL", "Airflow", "Looker Studio", "Mini-batch", "Ops analytics"],
      featured: true,
    },
    {
      id: "ai-delivery",
      title: "AI-Enabled Client-Facing Analytics Delivery",
      dek: "AI-assisted shipping for partner & client reporting.",
      summary:
        "Led AI-assisted delivery so the data team could ship customized, mobile-ready client dashboards without waiting on FE capacity or forcing inflexible BI tools.",
      body: [
        "B2B clients increasingly needed lightweight, mobile-friendly dashboards. Standard BI tools didn’t fit phone-first use without a separate mobile build and dedicated frontend capacity would have caused a delivery bottleneck we couldn’t afford.",
        "I owned use cases, rollout with the data team, and output quality, partnering with an external consultant who built the AI agent. Backend and infra collaboration set access controls and guardrails so only authorized clients saw their data.",
        "The team shipped 10+ live, customized, mobile-ready client dashboards without standard BI tooling or a dedicated FE queue.",
      ],
      takeaway:
        "AI helped most when it removed a delivery bottleneck, not when it replaced judgment. Ownership of quality and access still sat with the data team.",
      skills: ["Client analytics", "AI-assisted delivery", "Mobile dashboards", "Access control"],
      featured: true,
    },
  ],

  skillsTitle: "Skills",
  skills: [
    {
      group: "Data platform",
      items: ["SQL", "Python", "BigQuery", "Airflow", "GCS", "Dataflow", "Data modeling", "ELT/ETL"],
    },
    {
      group: "Analytics & BI",
      items: [
        "Looker Studio",
        "Tableau",
        "KPI / metrics design",
        "Dashboarding",
        "Near-realtime / mini-batch",
        "Requirements analysis",
      ],
    },
    {
      group: "Quality & trust",
      items: ["Data quality", "Metrics documentation", "Governance basics", "Access control awareness"],
    },
    {
      group: "Delivery & leadership",
      items: [
        "Analytics strategy",
        "Cross-functional partnership",
        "Client-facing analytics",
        "AI-assisted workflow adoption",
      ],
    },
  ],

  educationTitle: "Education",
  education: [
    {
      school: "Eindhoven University of Technology (TU/e)",
      degree: "M.Sc. Business Information Systems · 2015–2018",
      detail:
        "Specialization: Business Process Intelligence. LPDP Scholarship awardee (PK-38), Indonesian Ministry of Finance. Master’s project: Feature Selection for Predictive Medical Decision Support Models.",
    },
    {
      school: "Institut Teknologi Bandung (ITB)",
      degree: "B.Eng. Information System and Technology · 2008–2012",
      detail: "",
    },
  ],

  contactTitle: "Contact",
  contactLede: "Open to conversations about data platforms, analytics, or collaboration.",
  contactBody:
    "Reach me on LinkedIn, or watch what I share on data (in Indonesian) on YouTube.",
};
