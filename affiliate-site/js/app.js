/* ===== Data: localStorage overrides committed data.js ===== */
(function loadData() {
  try {
    const stored = localStorage.getItem("protech_products");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length) {
        window.PRODUCTS = parsed;
        // Show admin preview banner
        const banner = document.getElementById("preview-banner");
        if (banner) {
          banner.classList.remove("hidden");
          document.querySelector("header").classList.add("top-8");
        }
      }
    }
  } catch (_) {}
})();

/* ===== State ===== */
let currentProductId = null;

/* ===== DOM refs ===== */
const container = document.getElementById("product-grid");
const modal = document.getElementById("product-modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");
const modalOverlay = document.getElementById("modal-overlay");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

/* ===== Render product cards ===== */
function renderCards() {
  container.innerHTML = PRODUCTS.map(
    (p) => `
      <article
        class="product-card group cursor-pointer"
        data-id="${p.id}"
        onclick="openModal(${p.id})"
        role="button"
        tabindex="0"
        onkeydown="if(event.key==='Enter')openModal(${p.id})"
      >
        <div class="relative overflow-hidden">
          <img
            src="${p.image}"
            alt="${p.name}"
            class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          ${p.badge ? `<span class="absolute top-3 left-3 badge">${p.badge}</span>` : ""}
        </div>
        <div class="p-5 flex flex-col flex-1">
          <h3 class="text-lg font-semibold text-slate-800 mb-1">${p.name}</h3>
          <p class="text-sm text-slate-500 mb-2">${p.tagline}</p>
          <p class="text-sm text-slate-600 flex-1">${p.description}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-xl font-bold text-blue-700">${p.price}</span>
            <button class="btn-primary" onclick="event.stopPropagation();openModal(${p.id})">
              Learn More
            </button>
          </div>
        </div>
      </article>
    `
  ).join("");
}

/* ===== Render modal content ===== */
function renderModal(product) {
  const stars = (n) =>
    Array(5)
      .fill()
      .map((_, i) =>
        i < n
          ? `<i class="fas fa-star text-yellow-400"></i>`
          : `<i class="fas fa-star text-slate-300"></i>`
      )
      .join("");

  modalBody.innerHTML = `
    <div class="grid lg:grid-cols-5 gap-8">
      <!-- Left: media + description -->
      <div class="lg:col-span-3 space-y-6">
        <div class="aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-900">
          <iframe
            src="${product.videoUrl}?autoplay=1&rel=0&modestbranding=1"
            class="w-full h-full"
            allow="autoplay; encrypted-media"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-slate-800">${product.name}</h2>
          <p class="text-slate-500 mt-1 text-sm">${product.tagline}</p>
          <p class="text-slate-600 mt-4 leading-relaxed">${product.longDescription}</p>
        </div>

        ${product.specs.length ? `
          <div>
            <h4 class="font-semibold text-slate-700 mb-2 text-sm uppercase tracking-wider">Specifications</h4>
            <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              ${product.specs.map((s) => `<li class="flex items-start gap-2 text-sm text-slate-600"><i class="fas fa-check-circle text-blue-500 mt-0.5 shrink-0"></i>${s}</li>`).join("")}
            </ul>
          </div>
        ` : ""}
      </div>

      <!-- Right: pricing, CTA, reviews -->
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-slate-50 rounded-xl p-6 border border-slate-200 sticky top-28">
          <div class="text-3xl font-bold text-slate-800">${product.price}</div>
          <p class="text-sm text-slate-500 mt-1">Free shipping · 30-day returns</p>

          <a
            href="${product.affiliateLink}"
            target="_blank"
            rel="noopener noreferrer sponsored"
            class="btn-purchase mt-5"
          >
            <i class="fab fa-amazon text-lg"></i>
            Purchase on Amazon
          </a>
          <p class="text-xs text-slate-400 mt-2 text-center">We earn a commission if you purchase.</p>

          ${product.reviews.length ? `
            <hr class="my-5 border-slate-200" />
            <h4 class="font-semibold text-slate-700 mb-3 text-sm uppercase tracking-wider">Reviews</h4>
            <div class="space-y-4 max-h-80 overflow-y-auto pr-1">
              ${product.reviews
                .map(
                  (r) => `
                    <div class="bg-white rounded-lg p-4 border border-slate-100">
                      <div class="flex items-center gap-1 mb-1">${stars(r.rating)}</div>
                      <p class="text-sm text-slate-600">"${r.text}"</p>
                      <p class="text-xs text-slate-400 mt-2 font-medium">— ${r.author}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          ` : ""}
        </div>
      </div>
    </div>
  `;
}

/* ===== Modal controls ===== */
function openModal(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  currentProductId = id;
  renderModal(product);
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("opacity-0", "pointer-events-none");
  modal.classList.remove("opacity-100");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ===== Mobile nav toggle ===== */
navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" ? false : true;
  navToggle.setAttribute("aria-expanded", expanded);
  navMenu.classList.toggle("hidden");
});

/* ===== Sticky nav shadow on scroll ===== */
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow-sm", window.scrollY > 10);
});

/* ===== Smooth scroll for nav links ===== */
document.querySelectorAll('nav a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href === "#") return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    // Close mobile nav if open
    if (!navMenu.classList.contains("hidden")) {
      navMenu.classList.add("hidden");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* ===== Init ===== */
renderCards();
