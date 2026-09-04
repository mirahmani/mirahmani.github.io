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

  // Header / footer chrome
  const nav = qs("[data-nav]");
  if (nav) {
    nav.innerHTML = site.nav
      .map((item) => {
        const current =
          (page === "home" && item.href.includes("index")) ||
          (page === "projects" && item.href.includes("projects")) ||
          (page === "contact" && item.href.includes("contact"));
        return `<li><a href="${item.href}" ${current ? 'aria-current="page"' : ""}>${escapeHtml(item.label)}</a></li>`;
      })
      .join("");
  }

  const logo = qs("[data-logo]");
  if (logo) {
    logo.innerHTML = `${escapeHtml(site.shortName)}<span>.</span>`;
  }

  const footerBrand = qs("[data-footer-brand]");
  if (footerBrand) footerBrand.textContent = site.brand;

  const social = qs("[data-social]");
  if (social) {
    social.innerHTML = site.social
      .map(
        (s) =>
          `<li><a href="${s.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)}</a></li>`
      )
      .join("");
  }

  // Mobile nav
  const toggle = qs(".nav-toggle");
  const navList = qs(".nav");
  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      navList.classList.toggle("is-open", !open);
    });
  }

  const pad = (n) => String(n).padStart(2, "0");

  if (page === "home") {
    const brand = qs("[data-brand]");
    if (brand) {
      const parts = site.brand.split(" ");
      const last = parts.pop();
      brand.innerHTML = `${escapeHtml(parts.join(" "))}<br /><em>${escapeHtml(last)}</em>`;
    }

    qs("[data-role]") && (qs("[data-role]").textContent = site.role);
    qs("[data-headline]") && (qs("[data-headline]").textContent = site.headline);
    qs("[data-lede]") && (qs("[data-lede]").textContent = site.lede);

    const actions = qs("[data-actions]");
    if (actions) {
      actions.innerHTML = `
        <a class="btn btn--solid" href="${site.ctaPrimary.href}">${escapeHtml(site.ctaPrimary.label)}</a>
        <a class="btn btn--line" href="${site.ctaSecondary.href}">${escapeHtml(site.ctaSecondary.label)}</a>
        <a class="btn btn--line" href="${site.ctaGithub.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(site.ctaGithub.label)}</a>
      `;
    }

    qs("[data-about-title]") && (qs("[data-about-title]").textContent = site.aboutTitle);
    const about = qs("[data-about]");
    if (about) {
      about.innerHTML = site.about.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
    }

    qs("[data-focus-title]") && (qs("[data-focus-title]").textContent = site.focusTitle);
    const focus = qs("[data-focus]");
    if (focus) {
      focus.innerHTML = site.focus
        .map(
          (f) => `
        <li class="focus-card">
          <div class="focus-card__num">${escapeHtml(f.num)}</div>
          <h3>${escapeHtml(f.title)}</h3>
          <p>${escapeHtml(f.text)}</p>
        </li>`
        )
        .join("");
    }

    const featured = site.projects.filter((p) => p.featured).slice(0, 3);
    const list = qs("[data-featured]");
    if (list) {
      list.innerHTML = featured
        .map(
          (p, i) => `
        <li>
          <a class="project-row" href="projects.html">
            <div class="project-row__num">${pad(i + 1)}</div>
            <div>
              <h3>${escapeHtml(p.title)}</h3>
              <p>${escapeHtml(p.summary)}</p>
            </div>
            <div class="skills">${p.skills
              .slice(0, 4)
              .map((s) => `<span>${escapeHtml(s)}</span>`)
              .join("")}</div>
          </a>
        </li>`
        )
        .join("");
    }
  }

  if (page === "projects") {
    qs("[data-projects-intro]") &&
      (qs("[data-projects-intro]").textContent = site.projectsIntro);

    const list = qs("[data-projects]");
    if (list) {
      list.innerHTML = site.projects
        .map(
          (p, i) => `
        <li>
          <div class="project-row">
            <div class="project-row__num">${pad(i + 1)}</div>
            <div>
              <h3>${escapeHtml(p.title)}</h3>
              <p>${escapeHtml(p.summary)}</p>
            </div>
            <div class="skills">${p.skills
              .map((s) => `<span>${escapeHtml(s)}</span>`)
              .join("")}</div>
          </div>
        </li>`
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

  // Reveal on scroll
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = qsa(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach((el) => io.observe(el));
  }
})();
