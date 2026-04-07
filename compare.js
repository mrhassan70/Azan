// =============================================
// LA IMPERIAL - Compare Page JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  // Populate selects
  [1, 2, 3].forEach(n => {
    const sel = document.getElementById(`select${n}`);
    PRODUCTS.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = `${p.brandName} – ${p.name.replace(/\b\w+\b\s*/g, (m, i) => i < 30 ? m : '')}`;
      sel.appendChild(opt);
    });
  });

  // Pre-fill from localStorage
  const saved = JSON.parse(localStorage.getItem('compareList') || '[]');
  saved.forEach((id, i) => {
    const sel = document.getElementById(`select${i + 1}`);
    if (sel) { sel.value = id; updateSlot(i + 1); }
  });
  if (saved.length >= 2) setTimeout(generateCompare, 300);

  // Render related products
  const relGrid = document.getElementById('relatedForCompare');
  if (relGrid) {
    const sample = PRODUCTS.slice(0, 6);
    relGrid.innerHTML = sample.map(p => createProductCard(p)).join('');
    relGrid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openProductModal(parseInt(card.dataset.id)));
    });
    relGrid.querySelectorAll('.product-compare-btn').forEach(btn => {
      const id = parseInt(btn.dataset.id);
      if (compareList.includes(id)) btn.classList.add('added');
      btn.addEventListener('click', (e) => { e.stopPropagation(); toggleCompare(id, btn); });
    });
  }
});

window.updateSlot = function(n) {
  const sel = document.getElementById(`select${n}`);
  const preview = document.getElementById(`preview${n}`);
  const slot = document.getElementById(`slot${n}`);
  const id = parseInt(sel.value);
  const p = PRODUCTS.find(x => x.id === id);

  if (p) {
    preview.style.display = 'block';
    preview.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h4>${p.name}</h4>
      <p>PKR ${p.price.toLocaleString()}</p>`;
    slot.classList.add('filled');
  } else {
    preview.style.display = 'none';
    slot.classList.remove('filled');
  }
};

window.generateCompare = function() {
  const ids = [1, 2, 3].map(n => parseInt(document.getElementById(`select${n}`).value)).filter(Boolean);
  if (ids.length < 2) { showToast('⚠️ Please select at least 2 products to compare'); return; }

  const products = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const result = document.getElementById('compareResult');

  // Helper: find best price
  const minPrice = Math.min(...products.map(p => p.price));
  const maxRating = Math.max(...products.map(p => p.rating));

  const specs = [
    { label: 'Brand', key: p => p.brandName },
    { label: 'Model', key: p => p.model },
    { label: 'Category', key: p => p.categoryName },
    { label: 'Price (PKR)', key: p => `PKR ${p.price.toLocaleString()}`, best: (vals) => vals.indexOf(Math.min(...vals.map(v => parseInt(v.replace(/\D/g,''))))) },
    { label: 'Rating', key: p => `${p.rating} ⭐`, best: (vals) => vals.indexOf(Math.max(...vals.map(v => parseFloat(v)))) },
    { label: 'Reviews', key: p => `${p.reviews} reviews`, best: (vals) => vals.indexOf(Math.max(...vals.map(v => parseInt(v)))) },
    { label: 'Feature 1', key: p => p.features[0] || '-' },
    { label: 'Feature 2', key: p => p.features[1] || '-' },
    { label: 'Feature 3', key: p => p.features[2] || '-' },
    { label: 'Feature 4', key: p => p.features[3] || '-' },
    { label: 'Feature 5', key: p => p.features[4] || '-' },
    { label: 'Download Specs', key: p => `<a href="downloads/${p.docName}" download style="color:var(--primary);font-weight:600;"><i class="fas fa-download"></i> Download PDF</a>` },
  ];

  result.innerHTML = `
    <div class="compare-full-table reveal visible">
      <table>
        <thead>
          <tr>
            <th>Specification</th>
            ${products.map(p => `
              <th>
                <div class="compare-product-header">
                  <img src="${p.image}" alt="${p.name}" />
                  <h4>${p.name}</h4>
                  <p>PKR ${p.price.toLocaleString()}</p>
                  <small>${p.brandName}</small>
                  ${p.price === minPrice ? '<div class="compare-best-badge">💰 Best Price</div>' : ''}
                  ${p.rating === maxRating ? '<div class="compare-best-badge" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ Top Rated</div>' : ''}
                </div>
              </th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${specs.map(spec => {
            const vals = products.map(p => spec.key(p));
            const bestIdx = spec.best ? spec.best(vals) : -1;
            return `<tr>
              <td><strong>${spec.label}</strong></td>
              ${vals.map((v, i) => `<td class="${i === bestIdx ? 'best-value' : ''}">${v}</td>`).join('')}
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;

  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast('✓ Comparison ready!');

  // Save to localStorage
  localStorage.setItem('compareList', JSON.stringify(ids));
};

window.clearCompareSelections = function() {
  [1, 2, 3].forEach(n => {
    document.getElementById(`select${n}`).value = '';
    document.getElementById(`preview${n}`).style.display = 'none';
    document.getElementById(`slot${n}`).classList.remove('filled');
  });
  document.getElementById('compareResult').innerHTML = '';
  localStorage.removeItem('compareList');
  compareList = [];
};
