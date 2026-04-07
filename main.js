// =============================================
// LA IMPERIAL - Main JavaScript
// =============================================

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader')?.classList.add('hide');
  }, 1200);
});

// ===== PARTICLE CANVAS =====
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 2 + 0.5;
      this.alpha = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230,57,70,${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    // draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(230,57,70,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
})();

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchClose = document.getElementById('searchClose');

window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  const backToTop = document.getElementById('backToTop');
  if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
});

hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  hamburger.innerHTML = navLinks?.classList.contains('open')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

searchToggle?.addEventListener('click', () => searchBar?.classList.toggle('open'));
searchClose?.addEventListener('click', () => searchBar?.classList.remove('open'));

// Close nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// ===== BACK TO TOP =====
document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== REVEAL ON SCROLL =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}
initReveal();

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString();
      if (current >= target) clearInterval(interval);
    }, 25);
  });
}
setTimeout(animateCounters, 1500);

// ===== FEATURED PRODUCTS (HOME) =====
function renderFeaturedProducts() {
  const grid = document.getElementById('featuredGrid');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  const featured = PRODUCTS.slice(0, 8);

  function render(filter) {
    const list = filter === 'all' ? featured : featured.filter(p => p.category === filter);
    grid.innerHTML = list.map(p => createProductCard(p)).join('');
    // re-attach compare buttons
    grid.querySelectorAll('.product-compare-btn').forEach(btn => {
      const id = parseInt(btn.dataset.id);
      if (compareList.includes(id)) btn.classList.add('added');
      btn.addEventListener('click', (e) => { e.stopPropagation(); toggleCompare(id, btn); });
    });
    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        openProductModal(id);
      });
    });
    // animate
    grid.querySelectorAll('.product-card').forEach((c, i) => {
      c.style.opacity = '0'; c.style.transform = 'translateY(20px)';
      setTimeout(() => {
        c.style.transition = '0.4s ease';
        c.style.opacity = '1'; c.style.transform = 'translateY(0)';
      }, i * 80);
    });
  }

  render('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });
}

function createProductCard(p) {
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
  const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        ${discount > 0 ? `<div class="product-badge" style="left:auto;right:1rem;background:linear-gradient(135deg,#10b981,#059669)">-${discount}%</div>` : ''}
        <button class="product-compare-btn" data-id="${p.id}" title="Add to Compare">
          <i class="fas fa-balance-scale"></i>
        </button>
      </div>
      <div class="product-body">
        <div class="product-brand">${p.brandName}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.shortDesc}</div>
        <div class="product-rating">
          <span class="stars">${'⭐'.repeat(Math.floor(p.rating))}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">PKR ${p.price.toLocaleString()}</span>
          ${p.oldPrice ? `<span class="product-old-price">PKR ${p.oldPrice.toLocaleString()}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn-view"><i class="fas fa-eye"></i> Quick View</button>
          <button class="btn-details"><i class="fas fa-info-circle"></i> Details</button>
        </div>
      </div>
    </div>`;
}

// ===== PRODUCT MODAL =====
let compareList = JSON.parse(localStorage.getItem('compareList') || '[]');

function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" id="modalClose"><i class="fas fa-times"></i></button>
      <img src="${p.image}" alt="${p.name}" class="modal-product-img" />
      <div class="modal-brand">${p.brandName} · ${p.categoryName}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-price">PKR ${p.price.toLocaleString()}</div>
      <div class="modal-desc">${p.shortDesc}</div>
      <div class="modal-features">
        <h4>Key Features</h4>
        <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="modal-download">
        <span><i class="fas fa-file-pdf" style="color:var(--primary);margin-right:0.5rem"></i> Full specifications available</span>
        <a href="downloads/${p.docName}" download>
          <i class="fas fa-download"></i> Download PDF
        </a>
      </div>
    </div>`;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  modal.querySelector('#modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => { modal.remove(); document.body.style.overflow = ''; }, 300);
  }
}

// ===== COMPARE =====
function toggleCompare(id, btn) {
  if (compareList.includes(id)) {
    compareList = compareList.filter(x => x !== id);
    btn?.classList.remove('added');
    showToast('Removed from comparison');
  } else {
    if (compareList.length >= 3) { showToast('⚠️ Max 3 products for comparison'); return; }
    compareList.push(id);
    btn?.classList.add('added');
    showToast('✓ Added to comparison');
  }
  localStorage.setItem('compareList', JSON.stringify(compareList));
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fas fa-info-circle"></i> ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== INIT HOME =====
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
});
