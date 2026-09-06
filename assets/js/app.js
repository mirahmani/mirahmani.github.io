(() => {
  const site = window.SITE;
  if (!site) return;

  const page = document.body.dataset.page || "home";
  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

  const escapeHtml = (str = "") =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  const pad = (n) => String(n).padStart(2, "0");

  const initials = site.brand
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  qsa("[data-role]").forEach((el) => {
    el.textContent = site.role;
  });
  qs("[data-role-hero]") && (qs("[data-role-hero]").textContent = site.role);

  const shortName = site.shortName || site.brand.split(" ")[0] || site.brand;
  qsa("[data-logo]").forEach((logo) => {
    if (logo.tagName !== "A") return;
    logo.innerHTML = `${escapeHtml(shortName)}<span class="resume-top__dot" aria-hidden="true">.</span>`;
    logo.setAttribute("aria-label", site.brand);
  });

  const brand = qs("[data-brand]");
  if (brand) brand.textContent = site.brand;

  qs("[data-initials]") && (qs("[data-initials]").textContent = initials);
  qs("[data-headline]") && (qs("[data-headline]").textContent = site.headline);

  const renderRadar = () => {
    const wrap = qs(".resume-radar");
    if (!wrap || !site.radar) return;

    const axes = site.radar.axes || [];
    const values = site.radar.values || [];
    const n = axes.length;
    if (n < 3) return;

    const cx = 100;
    const cy = 100;
    const maxR = 72;
    const levels = 4;

    const pointAt = (i, ratio) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      return {
        x: cx + Math.cos(angle) * maxR * ratio,
        y: cy + Math.sin(angle) * maxR * ratio,
      };
    };

    const grid = qs(".resume-radar__grid");
    const area = qs(".resume-radar__area");
    const dots = qs(".resume-radar__dots");
    const labels = qs(".resume-radar__axis-labels");
    if (!grid || !area || !dots || !labels) return;

    let gridHtml = "";
    for (let level = levels; level >= 1; level -= 1) {
      const ratio = level / levels;
      const pts = Array.from({ length: n }, (_, i) => {
        const p = pointAt(i, ratio);
        return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
      }).join(" ");
      gridHtml += `<polygon points="${pts}"></polygon>`;
    }
    for (let i = 0; i < n; i += 1) {
      const p = pointAt(i, 1);
      gridHtml += `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(2)}" y2="${p.y.toFixed(2)}"></line>`;
    }
    grid.innerHTML = gridHtml;

    const valuePts = values.slice(0, n).map((v, i) => {
      const p = pointAt(i, Math.max(0.15, Math.min(1, v)));
      return p;
    });
    area.setAttribute(
      "points",
      valuePts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ")
    );
    dots.innerHTML = valuePts
      .map((p) => `<circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="2.4"></circle>`)
      .join("");

    labels.innerHTML = axes
      .map((name, i) => {
        const p = pointAt(i, 1.18);
        return `<text x="${p.x.toFixed(2)}" y="${p.y.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${escapeHtml(name)}</text>`;
      })
      .join("");
  };

  renderRadar();

  const footerBrand = qs("[data-footer-brand]");
  if (footerBrand) footerBrand.textContent = site.brand;

  const toggle = qs(".nav-toggle");
  const nav = qs("#site-nav");
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
  }

  const social = qs("[data-social]");
  if (social) {
    social.innerHTML = site.social
      .map(
        (s) =>
          `<li><a href="${s.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)}</a></li>`
      )
      .join("");
  }

  if (page === "home") {
    const summary = qs("[data-summary]");
    if (summary) {
      summary.innerHTML = site.summary.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
    }

    const highlights = qs("[data-highlights]");
    if (highlights) {
      highlights.innerHTML = site.highlights
        .map(
          (h) => `
        <li>
          <strong>${escapeHtml(h.value)}</strong>
          <span>${escapeHtml(h.label)}</span>
        </li>`
        )
        .join("");
    }

    const experience = qs("[data-experience]");
    if (experience) {
      experience.innerHTML = site.experience
        .map(
          (job) => `
        <li class="resume-timeline__item">
          <div class="resume-timeline__left">
            <p class="resume-timeline__period">${escapeHtml(job.period)}</p>
            <h3 class="resume-timeline__role">${escapeHtml(job.role)}</h3>
            <p class="resume-timeline__company">${escapeHtml(job.company)}</p>
          </div>
          <div class="resume-timeline__right">
            <p class="resume-timeline__detail">${escapeHtml(job.summary)}</p>
          </div>
        </li>`
        )
        .join("");
    }

    const featured = qs("[data-featured]");
    if (featured) {
      featured.innerHTML = site.projects
        .filter((p) => p.featured)
        .map(
          (p, i) => `
        <li>
          <a href="projects.html#${escapeHtml(p.id)}">
            <span class="resume-projects__num">${pad(i + 1)}</span>
            <div>
              <h3>${escapeHtml(p.title)}</h3>
              <p>${escapeHtml(p.dek || p.summary)}</p>
            </div>
          </a>
        </li>`
        )
        .join("");
    }

    const skills = qs("[data-skills]");
    if (skills) {
      skills.innerHTML = site.skills
        .map(
          (group) => `
        <div>
          <h3>${escapeHtml(group.group)}</h3>
          <p>${escapeHtml(group.items.join(" · "))}</p>
        </div>`
        )
        .join("");
    }

    const education = qs("[data-education]");
    if (education) {
      education.innerHTML = site.education
        .map(
          (ed) => `
        <li class="resume-timeline__item">
          <div class="resume-timeline__left">
            <p class="resume-timeline__period">${escapeHtml(ed.degree)}</p>
            <h3 class="resume-timeline__role">${escapeHtml(ed.school)}</h3>
          </div>
          <div class="resume-timeline__right">
            ${ed.detail ? `<p class="resume-timeline__detail">${escapeHtml(ed.detail)}</p>` : "<p class=\"resume-timeline__detail\">—</p>"}
          </div>
        </li>`
        )
        .join("");
    }

    qs("[data-contact-lede]") && (qs("[data-contact-lede]").textContent = site.contactLede);
    const links = qs("[data-contact-links]");
    if (links) {
      links.innerHTML = site.social
        .map(
          (s) =>
            `<a class="btn btn--solid" href="${s.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)}</a>`
        )
        .join("");
    }
  }

  if (page === "projects") {
    qs("[data-projects-intro]") &&
      (qs("[data-projects-intro]").textContent = site.projectsIntro);

    const cases = qs("[data-cases]");
    if (cases) {
      cases.innerHTML = site.projects
        .map(
          (p, i) => `
        <article class="case" id="${escapeHtml(p.id)}">
          <header class="case__header">
            <p class="case__num">${pad(i + 1)}</p>
            <div>
              <h2 class="case__title">${escapeHtml(p.title)}</h2>
              <p class="case__dek">${escapeHtml(p.dek)}</p>
            </div>
          </header>
          <div class="case__body">
            ${p.body.map((para) => `<p>${escapeHtml(para)}</p>`).join("")}
          </div>
          <p class="case__takeaway"><span>Takeaway</span>${escapeHtml(p.takeaway)}</p>
          <ul class="skill-list">
            ${p.skills.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
          </ul>
        </article>`
        )
        .join("");
    }
  }

  if (page === "contact") {
    qs("[data-contact-title]") && (qs("[data-contact-title]").textContent = site.contactTitle);
    qs("[data-contact-lede]") && (qs("[data-contact-lede]").textContent = site.contactLede);
    qs("[data-contact-body]") && (qs("[data-contact-body]").textContent = site.contactBody);

    const links = qs("[data-contact-links]");
    if (links) {
      links.innerHTML = site.social
        .map(
          (s) =>
            `<a class="btn btn--solid" href="${s.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)}</a>`
        )
        .join("");
    }
  }
})();
