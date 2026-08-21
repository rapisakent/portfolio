/* =========================================================
   KENT STUDIO — SCRIPT.JS
   ========================================================= */

/* ===== PORTFOLIO CONTENT — EDIT HERE =====
   To update the portfolio, edit the arrays below.
   - image / video accept any direct image or video URL.
   - category must be one of: "Graphic Design", "Social Media", "Web Development", "Ads"
     (this is what the filter buttons match against).
   - Nothing else in this file needs to change when you edit these arrays.
*/

const graphicDesignProjects = [
  { id: 1,  title: "Aurora Rebrand",            category: "Graphic Design", image: "YOUR-IMAGE-LINK-01", description: "Full visual identity for a wellness brand.", year: "2026" },
  { id: 2,  title: "Nocturne Poster Series",      category: "Graphic Design", image: "YOUR-IMAGE-LINK-02", description: "Editorial poster set for a music festival.", year: "2025" },
  { id: 3,  title: "Fieldnote Stationery",        category: "Graphic Design", image: "YOUR-IMAGE-LINK-03", description: "Print stationery system for a studio brand.", year: "2025" },
  { id: 4,  title: "Verdant Packaging",           category: "Graphic Design", image: "YOUR-IMAGE-LINK-04", description: "Packaging design for a botanical skincare line.", year: "2026" },
  { id: 5,  title: "Halcyon Typeface Poster",      category: "Graphic Design", image: "YOUR-IMAGE-LINK-05", description: "Type specimen poster for an in-house typeface.", year: "2024" },
  { id: 6,  title: "Meridian Annual Report",       category: "Graphic Design", image: "YOUR-IMAGE-LINK-06", description: "Layout and infographics for an annual report.", year: "2025" },
  { id: 7,  title: "Salt & Stone Menu System",     category: "Graphic Design", image: "YOUR-IMAGE-LINK-07", description: "Print menu and signage for a restaurant group.", year: "2025" },
  { id: 8,  title: "Lumen Brand Guidelines",       category: "Graphic Design", image: "YOUR-IMAGE-LINK-08", description: "Brand guideline document and logo system.", year: "2026" },
  { id: 9,  title: "Compass Editorial Layout",     category: "Graphic Design", image: "YOUR-IMAGE-LINK-09", description: "Magazine spread design for a travel feature.", year: "2024" },
  { id: 10, title: "Anchor Studio Merch",          category: "Graphic Design", image: "YOUR-IMAGE-LINK-10", description: "Merchandise graphics for a creative studio.", year: "2025" },

  { id: 11, title: "Solstice Campaign Set",        category: "Social Media", image: "YOUR-IMAGE-LINK-11", description: "Seasonal campaign visuals across platforms.", year: "2026" },
  { id: 12, title: "Northbound Content Series",    category: "Social Media", image: "YOUR-IMAGE-LINK-12", description: "Ongoing content templates for a lifestyle brand.", year: "2025" },
  { id: 13, title: "Ember Product Drop",           category: "Social Media", image: "YOUR-IMAGE-LINK-13", description: "Launch visuals for a limited product drop.", year: "2025" },
  { id: 14, title: "Quiet Hours Story Kit",        category: "Social Media", image: "YOUR-IMAGE-LINK-14", description: "Story templates for a wellness brand.", year: "2026" },
  { id: 15, title: "Tidewater Feed Refresh",       category: "Social Media", image: "YOUR-IMAGE-LINK-15", description: "Full feed redesign and content direction.", year: "2024" },
  { id: 16, title: "Ledger Founders Series",       category: "Social Media", image: "YOUR-IMAGE-LINK-16", description: "Founder-spotlight content for a fintech brand.", year: "2025" },
  { id: 17, title: "Greenhouse Growth Kit",        category: "Social Media", image: "YOUR-IMAGE-LINK-17", description: "Templated content system for organic growth.", year: "2026" },
  { id: 18, title: "Paper Trail Launch Content",   category: "Social Media", image: "YOUR-IMAGE-LINK-18", description: "Pre-launch teaser series for a stationery brand.", year: "2025" },

  { id: 19, title: "Fernweh Travel Studio Site",   category: "Web Development", image: "YOUR-IMAGE-LINK-19", description: "Responsive site build for a travel studio.", year: "2026" },
  { id: 20, title: "Basalt Architecture Site",     category: "Web Development", image: "YOUR-IMAGE-LINK-20", description: "Portfolio site for an architecture practice.", year: "2025" },
  { id: 21, title: "Marrow Coffee Roasters",       category: "Web Development", image: "YOUR-IMAGE-LINK-21", description: "E-commerce build for a coffee roastery.", year: "2025" },
  { id: 22, title: "Hollow Studio Portfolio",      category: "Web Development", image: "YOUR-IMAGE-LINK-22", description: "Personal portfolio for a photography studio.", year: "2026" },
  { id: 23, title: "Northline Consulting Site",    category: "Web Development", image: "YOUR-IMAGE-LINK-23", description: "Corporate site rebuild focused on conversion.", year: "2024" },
  { id: 24, title: "Fieldwork Agency Homepage",    category: "Web Development", image: "YOUR-IMAGE-LINK-24", description: "Homepage design and build for a creative agency.", year: "2025" },

  { id: 25, title: "Driftwood Ad Set",             category: "Ads", image: "YOUR-IMAGE-LINK-25", description: "Paid social ad set for a homeware brand.", year: "2026" },
  { id: 26, title: "Coastline Display Campaign",   category: "Ads", image: "YOUR-IMAGE-LINK-26", description: "Display banner set for a travel campaign.", year: "2025" },
  { id: 27, title: "Amberlight Retail Promo",      category: "Ads", image: "YOUR-IMAGE-LINK-27", description: "Seasonal promo ad creative for retail.", year: "2025" },
  { id: 28, title: "Understory App Launch Ads",    category: "Ads", image: "YOUR-IMAGE-LINK-28", description: "App launch ad set across social platforms.", year: "2026" },
  { id: 29, title: "Millhouse Bakery Local Ads",   category: "Ads", image: "YOUR-IMAGE-LINK-29", description: "Local ad creative for a bakery chain.", year: "2024" },
  { id: 30, title: "Cascade Fitness Promo Set",    category: "Ads", image: "YOUR-IMAGE-LINK-30", description: "Promotional ad set for a fitness studio launch.", year: "2025" },
];

const videoProjects = [
  { id: 1,  title: "Aurora — Brand Film",         category: "Graphic Design",  video: "YOUR-VIDEO-LINK-01", poster: "YOUR-IMAGE-LINK-01", description: "Short brand film introducing the Aurora identity." },
  { id: 2,  title: "Solstice — Campaign Reel",    category: "Social Media",    video: "YOUR-VIDEO-LINK-02", poster: "YOUR-IMAGE-LINK-11", description: "Vertical campaign reel for social distribution." },
  { id: 3,  title: "Fernweh — Site Walkthrough",  category: "Web Development", video: "YOUR-VIDEO-LINK-03", poster: "YOUR-IMAGE-LINK-19", description: "Product walkthrough of the Fernweh site build." },
  { id: 4,  title: "Marrow — Product Story",      category: "Web Development", video: "YOUR-VIDEO-LINK-04", poster: "YOUR-IMAGE-LINK-21", description: "Product story film for the Marrow launch." },
  { id: 5,  title: "Ember — Launch Teaser",       category: "Social Media",    video: "YOUR-VIDEO-LINK-05", poster: "YOUR-IMAGE-LINK-13", description: "Teaser edit for the Ember product drop." },
  { id: 6,  title: "Driftwood — Ad Film",         category: "Ads",             video: "YOUR-VIDEO-LINK-06", poster: "YOUR-IMAGE-LINK-25", description: "15-second paid social ad film." },
  { id: 7,  title: "Basalt — Studio Reel",        category: "Web Development", video: "YOUR-VIDEO-LINK-07", poster: "YOUR-IMAGE-LINK-20", description: "Showreel edit for the Basalt portfolio site." },
  { id: 8,  title: "Understory — App Trailer",    category: "Ads",             video: "YOUR-VIDEO-LINK-08", poster: "YOUR-IMAGE-LINK-28", description: "App launch trailer for paid placement." },
  { id: 9,  title: "Ledger — Founder Spotlight",  category: "Social Media",    video: "YOUR-VIDEO-LINK-09", poster: "YOUR-IMAGE-LINK-16", description: "Founder-spotlight interview edit." },
  { id: 10, title: "Fieldwork — Agency Reel",     category: "Graphic Design",  video: "YOUR-VIDEO-LINK-10", poster: "YOUR-IMAGE-LINK-24", description: "Capabilities reel for the agency homepage launch." },
];

/* ===== PLACEHOLDER RESOLUTION (preview only) =====
   The strings above ("YOUR-IMAGE-LINK-01", "YOUR-VIDEO-LINK-01", etc.) are the
   editable placeholders. This block maps those exact placeholder strings to
   temporary preview assets so the site looks complete before real links are
   added. Once you replace a placeholder in the arrays above with your own URL,
   this block simply has nothing left to match and is safely ignored.
*/
(function resolvePlaceholders(){
  const imgFallback = {};
  for (let i = 1; i <= 30; i++){
    const key = "YOUR-IMAGE-LINK-" + String(i).padStart(2, "0");
    const w = [700,800,760,820][i % 4];
    const h = [900,1000,700,1100][i % 4];
    imgFallback[key] = `https://picsum.photos/seed/kentstudio${i}/${w}/${h}`;
  }
  const sampleVideos = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  ];
  graphicDesignProjects.forEach(p => { if (imgFallback[p.image]) p.image = imgFallback[p.image]; });
  videoProjects.forEach((v, i) => {
    if (imgFallback[v.poster]) v.poster = imgFallback[v.poster];
    if (/^YOUR-VIDEO-LINK-/.test(v.video)) v.video = sampleVideos[i % sampleVideos.length];
  });
})();

/* ===== END EDITABLE CONTENT ===== */


document.addEventListener("DOMContentLoaded", () => {

  /* ---------- page-load veil ---------- */
  const veil = document.getElementById("veil");
  window.addEventListener("load", () => {
    setTimeout(() => veil.classList.add("is-hidden"), 350);
  });
  setTimeout(() => veil.classList.add("is-hidden"), 2200); // fallback

  /* ---------- render hero reel ---------- */
  const reelTrack = document.getElementById("reelTrack");
  const reelImages = graphicDesignProjects.slice(0, 8);
  const reelHtml = reelImages.map(p => `<img src="${p.image}" alt="" loading="lazy">`).join("");
  reelTrack.innerHTML = reelHtml + reelHtml; // duplicate for seamless loop

  /* ---------- render gallery ---------- */
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = graphicDesignProjects.map((p, i) => `
    <figure class="g-card is-visible" data-category="${p.category}" data-index="${i}" tabindex="0" role="button" aria-label="Open ${escapeHtml(p.title)}">
      <img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy">
      <span class="g-card-year">${p.year}</span>
      <figcaption class="g-card-overlay">
        <span class="g-card-cat">${p.category}</span>
        <span class="g-card-title">${escapeHtml(p.title)}</span>
      </figcaption>
    </figure>
  `).join("");

  const gCards = Array.from(gallery.querySelectorAll(".g-card"));
  gCards.forEach(card => {
    card.addEventListener("click", () => openLightbox(Number(card.dataset.index)));
    card.addEventListener("keydown", e => { if (e.key === "Enter") openLightbox(Number(card.dataset.index)); });
  });

  /* ---------- filtering ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  let currentFilter = "All";
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentFilter = btn.dataset.filter;
      applyFilter();
    });
  });
  function applyFilter(){
    gCards.forEach(card => {
      const match = currentFilter === "All" || card.dataset.category === currentFilter;
      card.classList.toggle("is-hidden", !match);
    });
  }

  /* ---------- image lightbox ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxMeta = document.getElementById("lightboxMeta");
  let activeIndex = 0;

  function visibleIndices(){
    return gCards
      .map((c, i) => ({ el: c, i }))
      .filter(o => !o.el.classList.contains("is-hidden"))
      .map(o => o.i);
  }

  function openLightbox(index){
    activeIndex = index;
    renderLightbox();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function renderLightbox(){
    const p = graphicDesignProjects[activeIndex];
    lightboxImg.src = p.image;
    lightboxImg.alt = p.title;
    lightboxTitle.textContent = p.title;
    lightboxMeta.textContent = `${p.category} — ${p.year}`;
  }
  function closeLightbox(){
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function stepLightbox(dir){
    const order = visibleIndices();
    if (!order.length) return;
    let pos = order.indexOf(activeIndex);
    if (pos === -1) pos = 0;
    pos = (pos + dir + order.length) % order.length;
    activeIndex = order[pos];
    renderLightbox();
  }

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

  /* ---------- render video grid ---------- */
  const videoGrid = document.getElementById("videoGrid");
  videoGrid.innerHTML = videoProjects.map((v, i) => `
    <div class="v-card" data-index="${i}" tabindex="0" role="button" aria-label="Play ${escapeHtml(v.title)}">
      <video src="${v.video}#t=0.5" poster="${v.poster || ''}" muted preload="metadata" playsinline></video>
      <span class="v-card-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8V4z"/></svg>
      </span>
      <div class="v-card-overlay">
        <span class="v-card-cat">${v.category}</span>
        <span class="v-card-title">${escapeHtml(v.title)}</span>
        <span class="v-card-desc">${escapeHtml(v.description)}</span>
      </div>
    </div>
  `).join("");

  const vCards = Array.from(videoGrid.querySelectorAll(".v-card"));
  vCards.forEach(card => {
    card.addEventListener("click", () => openVideoModal(Number(card.dataset.index)));
    card.addEventListener("keydown", e => { if (e.key === "Enter") openVideoModal(Number(card.dataset.index)); });
  });

  /* ---------- video modal ---------- */
  const videoModal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const videoModalTitle = document.getElementById("videoModalTitle");
  const videoModalMeta = document.getElementById("videoModalMeta");

  function openVideoModal(index){
    const v = videoProjects[index];
    modalVideo.src = v.video;
    modalVideo.poster = v.poster || "";
    videoModalTitle.textContent = v.title;
    videoModalMeta.textContent = v.category;
    videoModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    modalVideo.play().catch(() => {});
  }
  function closeVideoModal(){
    videoModal.classList.remove("is-open");
    document.body.style.overflow = "";
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.removeAttribute("src");
    modalVideo.load();
  }
  document.getElementById("videoModalClose").addEventListener("click", closeVideoModal);
  videoModal.addEventListener("click", e => { if (e.target === videoModal) closeVideoModal(); });

  /* ---------- shared ESC handling ---------- */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape"){
      if (lightbox.classList.contains("is-open")) closeLightbox();
      if (videoModal.classList.contains("is-open")) closeVideoModal();
    }
    if (lightbox.classList.contains("is-open")){
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
    }
  });

  /* ---------- nav: scroll state + mobile menu ---------- */
  const siteNav = document.getElementById("siteNav");
  const navBurger = document.getElementById("navBurger");
  const mobileMenu = document.getElementById("mobileMenu");

  function onScroll(){
    siteNav.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  navBurger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("is-open");
    navBurger.classList.toggle("is-open", open);
    navBurger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  document.querySelectorAll(".mobile-link, .mobile-cta").forEach(el => {
    el.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      navBurger.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });

  /* ---------- brand-veil transition on in-page link clicks ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(
    ".nav-link, .nav-logo, .mobile-link, .nav-cta, .mobile-cta, .hero-actions a, .service-cta, .price-cta"
  ).forEach(link => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#") || href.length < 2) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      if (reduceMotion){
        target.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
      veil.classList.remove("is-hidden");
      setTimeout(() => {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        setTimeout(() => veil.classList.add("is-hidden"), 60);
      }, 380);
    });
  });

  /* ---------- active nav link on scroll ---------- */
  const navLinkEls = document.querySelectorAll(".nav-link");
  const sections = ["work", "about", "services", "pricing", "process", "contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        navLinkEls.forEach(l => l.classList.toggle("is-active", l.dataset.nav === entry.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => navObserver.observe(s));

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- gallery card stagger reveal ---------- */
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting){
        setTimeout(() => entry.target.classList.add("is-visible"), (idx % 6) * 70);
        galleryObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  gCards.forEach(c => { c.classList.remove("is-visible"); galleryObserver.observe(c); });

  /* ---------- animated stat counters ---------- */
  const statNums = document.querySelectorAll(".stat-num");
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  statNums.forEach(el => statObserver.observe(el));

  function animateCount(el){
    const target = Number(el.dataset.count);
    const duration = 900;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- custom cursor ---------- */
  const cursor = document.getElementById("cursor");
  const cursorLabel = document.getElementById("cursorLabel");
  let cursorActive = false;
  let hoverScale = 0.4;
  let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
  let curX = targetX, curY = targetY;

  window.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    targetX = e.clientX;
    targetY = e.clientY;
    if (!cursor.classList.contains("is-active")) cursor.classList.add("is-active");
  });

  function renderCursor(){
    curX += (targetX - curX) * 0.22;
    curY += (targetY - curY) * 0.22;
    const scale = cursorActive ? 1 : hoverScale;
    cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) scale(${scale})`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  function bindCursor(selector, label){
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursorActive = true;
        cursor.classList.add("is-hover");
        cursorLabel.textContent = label;
      });
      el.addEventListener("mouseleave", () => {
        cursorActive = false;
        cursor.classList.remove("is-hover");
        cursorLabel.textContent = "";
      });
    });
  }
  bindCursor(".g-card", "View");
  bindCursor(".v-card", "Play");
  bindCursor("a, button", "");

  /* ---------- contact form (front-end only demo) ---------- */
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    formNote.textContent = "Thanks — your message has been noted. We'll be in touch shortly.";
    contactForm.reset();
  });

  /* ---------- utility ---------- */
  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, s => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[s]));
  }

});
