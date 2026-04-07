// =============================================
// LA IMPERIAL - Products Page JS
// =============================================

let activeFilters = { brand: 'all', category: 'all', minPrice: 0, maxPrice: 999999, search: '' };

document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  
  // URL params
  const params = new URLSearchParams(window.location.search);
  if (params.get('brand')) activeFilters.brand = params.get('brand');
  if (params.get('cat')) activeFilters.category = params.get('cat');

  // Update sidebar active states from URL
  updateSidebarState();
  applyFilters();

  // Search input
  const searchInput = document.getElementById('productSearch');
  searchInput?.addEventListener('input', () => {
    activeFilters.search = searchInput.value.toLowerCase();
    applyFilters();
  });

  // Compare bar
  updateCompareBar();
});

function buildSidebar() {
  const brandSidebar = document.getElementById('brandSidebar');
  const catSidebar = document.getElementById('catSidebar');

  // All brands
  const allBrands = [...new Set(PRODUCTS.map(p => p.brand))];
  brandSidebar.innerHTML = `
    <div class="sidebar-item active" data-brand="all" onclick="setFilter('brand','all',this)">
      <i class="fas fa-globe" style="color:var(--primary)"></i> All Brands
      <span class="item-count">${PRODUCTS.length}</span>
    </div>
    ${BRANDS.filter(b => allBrands.includes(b.id)).map(b => {
      const cnt = PRODUCTS.filter(p => p.brand === b.id).length;
      return `<div class="sidebar-item" data-brand="${b.id}" onclick="setFilter('brand','${b.id}',this)">
        <span style="width:8px;height:8px;background:${b.color};border-radius:50%;display:inline-block;flex-shrink:0"></span>
        ${b.name} <span class="item-count">${cnt}</span>
      </div>`;
    }).join('')}`;

  // All categories
  catSidebar.innerHTML = `
    <div class="sidebar-item active" data-cat="all" onclick="setFilter('category','all',this)">
      <i class="fas fa-th" style="color:var(--primary)"></i> All Categories
      <span class="item-count">${PRODUCTS.length}</span>
    </div>
    ${CATEGORIES.map(c => {
      const cnt = PRODUCTS.filter(p => p.category === c.id).length;
      if (!cnt) return '';
      return `<div class="sidebar-item" data-cat="${c.id}" onclick="setFilter('category','${c.id}',this)">
        <i class="fas ${c.icon}" style="color:${c.color}"></i>
        ${c.name} <span class="item-count">${cnt}</span>
      </div>`;
    }).join('')}`;
}

function setFilter(type, value, el) {
  activeFilters[type] = value;
  // Update sidebar active
  const parent = el.parentElement;
  parent.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

window.setFilter = setFilter;

function updateSidebarState() {
  if (activeFilters.brand !== 'all') {
    const el = document.querySelector(`[data-brand="${activeFilters.brand}"]`);
    if (el) { document.querySelectorAll('#brandSidebar .sidebar-item').forEach(i => i.classList.remove('active')); el.classList.add('active'); }
  }
  if (activeFilters.category !== 'all') {
    const el = document.querySelector(`[data-cat="${activeFilters.category}"]`);
    if (el) { document.querySelectorAll('#catSidebar .sidebar-item').forEach(i => i.classList.remove('active')); el.classList.add('active'); }
  }
}

window.applyFilters = function() {
  const minPrice = parseInt(document.getElementById('priceMin')?.value) || 0;
  const maxPrice = parseInt(document.getElementById('priceMax')?.value) || 999999;
  const sort = document.getElementById('sortSelect')?.value || 'default';
  const search = (document.getElementById('productSearch')?.value || '').toLowerCase();

  let filtered = PRODUCTS.filter(p => {
    if (activeFilters.brand !== 'all' && p.brand !== activeFilters.brand) return false;
    if (activeFilters.category !== 'all' && p.category !== activeFilters.category) return false;
    if (p.price < minPrice || p.price > maxPrice) return false;
    if (search) {
      const haystack = `${p.name} ${p.brandName} ${p.model} ${p.categoryName}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  // Sort
  if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  renderProducts(filtered);

  const countEl = document.getElementById('productsCount');
  if (countEl) countEl.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  // Update price display
  const priceDisplay = document.getElementById('priceDisplay');
  if (priceDisplay) priceDisplay.textContent = `${minPrice.toLocaleString()} – ${maxPrice.toLocaleString()}`;
};

function renderProducts(products) {
  const grid = document.getElementById('productsPageGrid');
  if (!grid) return;

  if (products.length === 0) {
    grid.innerHTML = `<div class="no-products" style="grid-column:1/-1;">
      <i class="fas fa-box-open"></i>
      <h3>No Products Found</h3>
      <p>Try adjusting your filters or search term.</p>
      <button class="btn-primary" style="margin-top:1rem;" onclick="clearAllFilters()">Clear Filters</button>
    </div>`;
    return;
  }

  grid.innerHTML = products.map(p => createProductCard(p)).join('');

  grid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = '0.4s ease';
      card.style.opacity = '1'; card.style.transform = 'translateY(0)';
    }, i * 60);
    card.addEventListener('click', () => openProductModal(parseInt(card.dataset.id)));
  });

  grid.querySelectorAll('.product-compare-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (compareList.includes(id)) btn.classList.add('added');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCompare(id, btn);
      updateCompareBar();
    });
  });
}

window.clearAllFilters = function() {
  activeFilters = { brand: 'all', category: 'all', minPrice: 0, maxPrice: 999999, search: '' };
  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
  document.querySelectorAll('#brandSidebar .sidebar-item')[0]?.classList.add('active');
  document.querySelectorAll('#catSidebar .sidebar-item')[0]?.classList.add('active');
  const searchInput = document.getElementById('productSearch');
  if (searchInput) searchInput.value = '';
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');
  if (priceMin) priceMin.value = 0;
  if (priceMax) priceMax.value = 500000;
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'default';
  applyFilters();
};

function updateCompareBar() {
  const bar = document.getElementById('compareBar');
  const itemsSpan = document.getElementById('compareBarItems');
  if (!bar || !itemsSpan) return;

  if (compareList.length > 0) {
    bar.style.display = 'flex';
    const names = compareList.map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      return p ? p.name.split(' ').slice(0,3).join(' ') : '';
    });
    itemsSpan.textContent = names.join(' vs ');
  } else {
    bar.style.display = 'none';
  }
}

window.clearCompare = function() {
  compareList = [];
  localStorage.removeItem('compareList');
  updateCompareBar();
  document.querySelectorAll('.product-compare-btn').forEach(btn => btn.classList.remove('added'));
  showToast('Comparison cleared');
};
