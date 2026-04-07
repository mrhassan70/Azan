// =============================================
// LA IMPERIAL - Categories Page JS
// =============================================

const CAT_COLORS = {
  refrigerator: '#3b82f6',
  washer: '#8b5cf6',
  ac: '#06b6d4',
  tv: '#f59e0b',
  microwave: '#ef4444',
  dishwasher: '#10b981'
};

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('catDetailGrid');
  const catProductsSection = document.getElementById('catProductsSection');
  const catProductsGrid = document.getElementById('catProductsGrid');
  const selectedCatTag = document.getElementById('selectedCatTag');
  const selectedCatTitle = document.getElementById('selectedCatTitle');
  const catBrandFilter = document.getElementById('catBrandFilter');

  const catIcons = {
    refrigerator: 'fa-snowflake',
    washer: 'fa-tshirt',
    ac: 'fa-wind',
    tv: 'fa-tv',
    microwave: 'fa-broadcast-tower',
    dishwasher: 'fa-sink'
  };

  // Render category cards
  function renderCategories() {
    grid.innerHTML = CATEGORIES.map(cat => {
      const count = PRODUCTS.filter(p => p.category === cat.id).length;
      const color = CAT_COLORS[cat.id] || '#e63946';
      return `
        <div class="cat-detail-card reveal" data-cat="${cat.id}" onclick="showCatProducts('${cat.id}')">
          <div class="cat-detail-icon" style="background:linear-gradient(135deg,${color},${color}99)">
            <i class="fas ${catIcons[cat.id] || 'fa-box'}"></i>
          </div>
          <div class="cat-detail-content">
            <h3>${cat.name}</h3>
            <p>${cat.desc}</p>
            <div class="cat-detail-meta">
              <span class="cat-count"><i class="fas fa-box"></i> ${count} Products</span>
              <button class="btn-primary" style="font-size:0.82rem;padding:0.45rem 1rem;">
                View <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>`;
    }).join('');

    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }

  // Show products for a category
  window.showCatProducts = function(catId) {
    const cat = CATEGORIES.find(c => c.id === catId);
    let prods = PRODUCTS.filter(p => p.category === catId);

    selectedCatTag.textContent = cat.name;
    selectedCatTitle.innerHTML = `${cat.name} <span class="gradient-text">Collection</span>`;

    // Build brand sub-filter
    const brands = [...new Set(prods.map(p => p.brand))];
    catBrandFilter.innerHTML = `<button class="filter-btn active" data-brand="all">All Brands (${prods.length})</button>` +
      brands.map(b => {
        const brandObj = BRANDS.find(br => br.id === b);
        const cnt = prods.filter(p => p.brand === b).length;
        return `<button class="filter-btn" data-brand="${b}">${brandObj?.name || b} (${cnt})</button>`;
      }).join('');

    catBrandFilter.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        catBrandFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const brand = btn.dataset.brand;
        const filtered = brand === 'all' ? prods : prods.filter(p => p.brand === brand);
        renderCatProducts(filtered);
      });
    });

    renderCatProducts(prods);
    catProductsSection.style.display = 'block';
    catProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  function renderCatProducts(prods) {
    catProductsGrid.innerHTML = prods.map(p => createProductCard(p)).join('');
    catProductsGrid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openProductModal(parseInt(card.dataset.id)));
    });
    catProductsGrid.querySelectorAll('.product-compare-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleCompare(parseInt(btn.dataset.id), btn);
      });
    });
  }

  // Check URL param
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');

  renderCategories();

  if (catParam) {
    setTimeout(() => showCatProducts(catParam), 400);
  }
});
