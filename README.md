# La Imperial – Premium Home Appliances Website

## 🏆 Project Overview
A fully responsive, animated, and modern 3D-style website for **La Imperial**, a premium home appliance showroom with 20+ years of experience. The website showcases multiple top appliance brands and provides a rich product discovery and comparison experience.

---

## ✅ Completed Features

### Pages
| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero section, featured products, brands, categories, testimonials, CTA |
| **Brands** | `brands.html` | All brand cards with click-to-view products per brand |
| **Categories** | `categories.html` | Browse by appliance category with brand sub-filtering |
| **Products** | `products.html` | Full catalog with sidebar filters (brand, category, price, search) |
| **Compare** | `compare.html` | Side-by-side product comparison (up to 3 products) |
| **Contact Us** | `contact.html` | Address, phone, email, contact form, Google Map, FAQ |

### Features
- 🎨 **Animated hero** with floating 3D cards and particle canvas
- 🌀 **Particle background** with connecting network animation
- 📦 **16 real products** across 8 major brands
- 🔍 **Advanced filtering** – by brand, category, price range, and keyword search
- ⚖️ **Product comparison** – up to 3 products with highlighted best values
- 📄 **Product modal** with features list and downloadable PDF spec sheet link
- 🏷️ **Brand filtering** – click any brand to see only its products
- 📱 **Fully responsive** – works on mobile, tablet, and desktop
- 🔼 **Scroll reveal** animations on all sections
- ⬆️ **Back to top** button
- 🔔 **Toast notifications** for comparison actions
- 🗺️ **Google Maps embed** on Contact page
- ❓ **FAQ accordion** on Contact page
- 📧 **Click-to-email** and WhatsApp links
- 🛒 **Compare list persisted** in localStorage

---

## 📁 File Structure

```
index.html          – Home page
brands.html         – Brands listing and filter
categories.html     – Category browser
products.html       – Full product catalog
compare.html        – Product comparison tool
contact.html        – Contact info + form + map

css/
  style.css         – All styles (animations, 3D, responsive)

js/
  data.js           – Product, brand, category data
  main.js           – Shared JS (navbar, particles, modal, compare)
  brands.js         – Brands page logic
  categories.js     – Categories page logic
  products.js       – Products page with filters
  compare.js        – Comparison table generator

downloads/
  placeholder.txt   – Folder for product spec PDF files
```

---

## 🌐 Navigation URIs

| Path | Parameters | Description |
|------|-----------|-------------|
| `index.html` | – | Home page |
| `brands.html` | `?brand=haier` | Show specific brand products |
| `categories.html` | `?cat=refrigerator` | Show specific category |
| `products.html` | `?brand=lg&cat=washer` | Filter products by brand/category |
| `compare.html` | – | Product comparison (reads from localStorage) |
| `contact.html` | – | Contact info and form |

### Supported Brand IDs: `haier`, `samsung`, `lg`, `whirlpool`, `dawlance`, `pel`, `orient`, `gree`
### Supported Category IDs: `refrigerator`, `washer`, `ac`, `tv`, `microwave`, `dishwasher`

---

## 📦 Data Models (js/data.js)

### Product
```js
{
  id, brand, brandName, category, categoryName,
  name, model, price, oldPrice,
  rating, reviews,
  image, badge,
  features: [], shortDesc,
  docName  // PDF filename in /downloads/
}
```

### Brand
```js
{ id, name, tagline, color, products }
```

### Category
```js
{ id, name, icon, color, desc }
```

---

## 🔧 Recommended Next Steps

1. **Add more products** – Expand `js/data.js` with real SKUs from distributors
2. **Upload real PDF spec sheets** to the `/downloads/` folder
3. **Add a shopping cart** – Implement cart with localStorage
4. **Add a WhatsApp chatbot** button (fixed bottom-left)
5. **Integrate Google Analytics** for visitor tracking
6. **Add product search with autocomplete** using JS
7. **Create an admin dashboard** to manage products via the Table API
8. **Add video hero section** with showroom tour video
9. **Set up email backend** to actually send contact form messages
10. **Add multi-currency support** (PKR / USD)

---

## 🎨 Design System

| Variable | Value |
|----------|-------|
| Primary | `#e63946` (Red) |
| Secondary | `#1d3557` (Navy) |
| Background | `#0a0e1a` (Dark) |
| Card BG | `#111827` |
| Font | Inter + Playfair Display |
| Radius | 16px / 24px |

---

*© 2024 La Imperial – Premium Home Appliances. All Rights Reserved.*
