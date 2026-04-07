// =============================================
// LA IMPERIAL - Brands Page JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  const filterBar = document.getElementById('brandFilterBar');
  const grid = document.getElementById('brandsPageGrid');
  const brandProductsSection = document.getElementById('brandProductsSection');
  const brandProductsGrid = document.getElementById('brandProductsGrid');
  const selectedBrandTag = document.getElementById('selectedBrandTag');
  const selectedBrandTitle = document.getElementById('selectedBrandTitle');

  // Build filter buttons
  BRANDS.forEach(b => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.brand = b.id;
    btn.textContent = b.name;
    filterBar.appendChild(btn);
  });

  // Render brand cards
  function renderBrands(filter) {
    const list = filter === 'all' ? BRANDS : BRANDS.filter(b => b.id === filter);
    grid.innerHTML = list.map(b => {
      const prods = PRODUCTS.filter(p => p.brand === b.id);
      const cats = [...new Set(prods.map(p => p.categoryName))];
      return `
        <div class="brand-page-card reveal" data-brand="${b.id}">
          <div class="brand-card-header">
            <div class="brand-icon-lg brand-${b.id}" style="background:linear-gradient(135deg,${b.color},${lighten(b.color)})">
              ${b.name.charAt(0)}${b.name.length > 3 ? '' : b.name.slice(1, 2)}
            </div>
            <div class="brand-card-meta">
              <h3>${b.name}</h3>
              <p style="color:var(--text-muted);font-size:0.9rem">${b.tagline}</p>
              <div class="brand-product-count">
                <i class="fas fa-box"></i> ${prods.length} Products Available
              </div>
            </div>
          </div>
          <div class="brand-product-list">
            ${cats.map(c => `<span class="brand-prod-tag">${c}</span>`).join('')}
          </div>
          <div style="margin-top:1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap;">
            <button class="btn-primary" style="font-size:0.85rem;padding:0.5rem 1.2rem;" onclick="showBrandProducts('${b.id}')">
              <i class="fas fa-eye"></i> View Products
            </button>
            <a href="products.html?brand=${b.id}" class="btn-secondary" style="font-size:0.85rem;padding:0.5rem 1.2rem;">
              <i class="fas fa-th"></i> Browse All
            </a>
          </div>
        </div>`;
    }).join('');

    // re-init reveal
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 100);
    });
  }

  // Show products for a brand
  window.showBrandProducts = function(brandId) {
    const brand = BRANDS.find(b => b.id === brandId);
    const prods = PRODUCTS.filter(p => p.brand === brandId);
    selectedBrandTag.textContent = brand.name;
    selectedBrandTitle.innerHTML = `${brand.name} <span class="gradient-text">Products</span>`;
    brandProductsGrid.innerHTML = prods.map(p => createProductCard(p)).join('');
    brandProductsSection.style.display = 'block';

    // attach events
    brandProductsGrid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openProductModal(parseInt(card.dataset.id)));
    });
    brandProductsGrid.querySelectorAll('.product-compare-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCompare(parseInt(btn.dataset.id), btn);
      });
    });

    brandProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Filter button events
  filterBar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBrands(btn.dataset.brand);
      brandProductsSection.style.display = 'none';
    });
  });

  // Check URL param
  const params = new URLSearchParams(window.location.search);
  const brandParam = params.get('brand');
  if (brandParam) {
    const btn = filterBar.querySelector(`[data-brand="${brandParam}"]`);
    if (btn) { btn.click(); setTimeout(() => showBrandProducts(brandParam), 400); }
    else { renderBrands('all'); }
  } else {
    renderBrands('all');
  }
});

function lighten(hex) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + 60);
  const g = Math.min(255, ((num >> 8) & 0xff) + 60);
  const b = Math.min(255, (num & 0xff) + 60);
  return `rgb(${r},${g},${b})`;
}
