// =============================================
// LA IMPERIAL - Product Data
// =============================================

const PRODUCTS = [
  // ---- HAIER ----
  {
    id: 1, brand: "haier", brandName: "Haier",
    category: "refrigerator", categoryName: "Refrigerators",
    name: "Haier HRF-368 Frost Free Refrigerator",
    model: "HRF-368", price: 85000, oldPrice: 95000,
    rating: 4.5, reviews: 128,
    image: "https://sspark.genspark.ai/cfimages?u1=YcKMJSXPdds3JfKVd38iLgVJnH053r6MNIvte7feexApa2cckI5qL1%2BG6aHMcF6ZFv0NITZo6W4NTrP6xxNFJMlP3CXS44NrmZ5yNYIj2FeZdIQ9uIdzCQ%3D%3D&u2=an%2BuXfqhGUsu6YZc&width=2560",
    badge: "Best Seller",
    features: ["No Frost Technology", "360° Cooling", "Vitamin Fresh Zone", "10-Year Compressor Warranty", "Energy Saver Mode"],
    shortDesc: "11.5 cu ft top-freezer refrigerator with advanced frost-free technology and energy-saving inverter compressor.",
    docName: "Haier_HRF368_Features.pdf"
  },
  {
    id: 2, brand: "haier", brandName: "Haier",
    category: "washer", categoryName: "Washers & Dryers",
    name: "Haier HW70-B14979 Front Load Washer",
    model: "HW70-B14979", price: 72000, oldPrice: 80000,
    rating: 4.3, reviews: 95,
    image: "https://sspark.genspark.ai/cfimages?u1=YREtZ8aK8zVtAEoYuf1Ncl3IdnWE0NYEJCcEEwkByMYIzXA7vwlvRmhoveWSXVnxEbVVPKYoEAcoP2y7CVlfBbqiGEdgS8gvGVaXD8aiMn5pq%2BVqOr9rifvqKbYgoWA0l0xOCUFYd5r9AGOHxwtxNHZCxQbUVyQpGKLAK%2BhKRXv6eUXlfTPQRO6KBNKiSJ5sVRKIBg%3D%3D&u2=wlioKU7H7f5Uu9%2BY&width=2560",
    badge: "New",
    features: ["7kg Capacity", "1400 RPM Spin Speed", "Steam Wash", "Smart Diagnosis", "15 Wash Programs"],
    shortDesc: "Premium front-load washer with steam cleaning technology and smart home connectivity.",
    docName: "Haier_HW70_Features.pdf"
  },
  {
    id: 3, brand: "haier", brandName: "Haier",
    category: "ac", categoryName: "Air Conditioners",
    name: "Haier HSU-12HNF Inverter AC 1.0 Ton",
    model: "HSU-12HNF", price: 62000, oldPrice: 70000,
    rating: 4.6, reviews: 210,
    image: "https://sspark.genspark.ai/cfimages?u1=X7xI4EArg1j9N3ahbRRNJ5xnLJynW%2BtiHvBkKxKvFguiUqxta7u5kE9zKVjjxhPdUTjo%2FzWhTgfhIMppbpTtqirFsRTZWVVMO73SRHcTsNdYF6RAOjd2cXQZX6fIMUKQWa6HrDplClUOBBBvfT13Tr%2F1p9lGoNxbM5sB3ry7VHDZaxHqNjIAp6stfSCqmmxxha4itNEFvw3bkVJWCZG2&u2=O0NgZKNt8N%2B1IR3%2F&width=2560",
    badge: "Top Rated",
    features: ["DC Inverter Compressor", "5-Star Energy Rating", "Auto Restart", "Turbo Cool", "Health Air Filter"],
    shortDesc: "1.0 Ton DC Inverter split AC with health air filter and 5-star energy efficiency rating.",
    docName: "Haier_HSU12_Features.pdf"
  },

  // ---- SAMSUNG ----
  {
    id: 4, brand: "samsung", brandName: "Samsung",
    category: "refrigerator", categoryName: "Refrigerators",
    name: "Samsung RF28R7551SR French Door Refrigerator",
    model: "RF28R7551SR", price: 195000, oldPrice: 220000,
    rating: 4.7, reviews: 312,
    image: "https://sspark.genspark.ai/cfimages?u1=N%2FvcNyJm%2F8CMjOrX7DWcu4bX1ooYhEuZjgItzOMrwKupRfu7WS1RyPR2UfL4t9r4tGXRT3jMZw%2BB2r%2BBpdmJqbl%2BYkRtlc9KDH37B9tSkMTKwNVENPWknphpbnhiDywY28dpQB5ZhCYJWBd8QtJogXSmf6fLEryyUtqGtW1tSRDU%2FrJ6y5CDHeiVx64me6g4ksnCX662yLZmYTArOnx6hbC%2BlYhmDUxO%2Fh3gS1Fx8nk0Krbyc1byhORwnEsoB8DkdNfMIMFGD4rbmKsozw2PUspEyGEm1EerFMk8wV3FWYch%2Fb5kbRg%2F5fqCgurLHjrUW7xa2uo5aelL4b%2Bg9C4e&u2=zcxfXBYAQxDd4PeU&width=2560",
    badge: "Premium",
    features: ["Family Hub Display", "28 cu ft Capacity", "SpaceMax Technology", "Twin Cooling Plus", "Wi-Fi Connected"],
    shortDesc: "Smart French Door refrigerator with Family Hub touch screen and AI-powered features.",
    docName: "Samsung_RF28R7551SR_Features.pdf"
  },
  {
    id: 5, brand: "samsung", brandName: "Samsung",
    category: "washer", categoryName: "Washers & Dryers",
    name: "Samsung WF45R6100AW Front Load Washer",
    model: "WF45R6100AW", price: 88000, oldPrice: 98000,
    rating: 4.4, reviews: 177,
    image: "https://sspark.genspark.ai/cfimages?u1=Cnq1Un81D88geG%2FOOVyoJdAZfDic%2FEoUXiiOBNjLXQOGANO5Nfhhe6kKSDT95wk6E8U8o1V2dkxOowe8ssAlttXh1n8gkMz1wTG4qIlHNdiXHLhYbUZVH5PEZhZJZ%2FVj92gNfJyHFeCt2qgmb5OPIglZbIHCFGG1iE5baAJWwskqwc6l8UJ3V7Xthl6ANTWjhG%2FVov7aH6pAXt%2FfdOI%3D&u2=XYsARZxLvkZfHmob&width=2560",
    badge: "",
    features: ["4.5 cu ft Capacity", "AddWash Door", "Steam Wash", "Smart Care", "1200 RPM"],
    shortDesc: "Samsung front loader with AddWash door lets you add forgotten items mid-cycle.",
    docName: "Samsung_WF45R6100AW_Features.pdf"
  },
  {
    id: 6, brand: "samsung", brandName: "Samsung",
    category: "tv", categoryName: "Televisions",
    name: "Samsung QN65Q80C 65\" QLED Smart TV",
    model: "QN65Q80C", price: 285000, oldPrice: 320000,
    rating: 4.8, reviews: 420,
    image: "https://sspark.genspark.ai/cfimages?u1=Riy7v%2BiNOhbaS1jvUbUHL0%2FhDzDmsjyKl2hDdSX5yUW8lXpSfdiRxQI9Jc9VUEMAyPUI2yNAcI97nXtGQZNoQFDYuUvkmJKoqmk2FmCwOGY2IrK6y%2BUQcLPwuHSfZtT8zofGXY0qWNwVlVJZhBS8hXr9MqG%2B0skMk7VYtzrTTy6dMla8M2GpgAPofRi8Rgix&u2=u%2Frt%2F6iA9J15DHxk&width=2560",
    badge: "4K QLED",
    features: ["65\" QLED Panel", "Quantum Processor 4K", "Object Tracking Sound", "HDMI 2.1", "Smart TV with Alexa"],
    shortDesc: "Breathtaking 65-inch QLED display with Quantum Processor for incredible 4K picture quality.",
    docName: "Samsung_QN65Q80C_Features.pdf"
  },

  // ---- LG ----
  {
    id: 7, brand: "lg", brandName: "LG",
    category: "refrigerator", categoryName: "Refrigerators",
    name: "LG LRFXS2503S French Door 25 cu ft",
    model: "LRFXS2503S", price: 178000, oldPrice: 195000,
    rating: 4.6, reviews: 289,
    image: "https://sspark.genspark.ai/cfimages?u1=1D98pUO3xV0jU4WnMQxX7sYPmqZfqHmyqLexeRzyYK5tBhu6MdUKygH4DHo%2F5Lyo1GUGK9efL9GjxRTPsQF7KTiRfuWRWy%2FTQK4f5iGXdmXbF84V6r%2BPhPwRjX%2FCevo%3D&u2=JL8IrHJ8majlbxG5&width=2560",
    badge: "Best Value",
    features: ["25 cu ft Capacity", "InstaView Door-in-Door", "LG ThinQ App", "Craft Ice Maker", "Linear Compressor"],
    shortDesc: "LG French Door refrigerator with InstaView knock-twice feature and Craft Ice maker.",
    docName: "LG_LRFXS2503S_Features.pdf"
  },
  {
    id: 8, brand: "lg", brandName: "LG",
    category: "washer", categoryName: "Washers & Dryers",
    name: "LG WM3470CW 5.0 cu ft Front Loader",
    model: "WM3470CW", price: 95000, oldPrice: 110000,
    rating: 4.5, reviews: 203,
    image: "https://sspark.genspark.ai/cfimages?u1=j%2F6gH9V2idn41wUVwvtq%2FU8mMAGEtBqvyTmKmbtc7IQxgByABrQZD8AU%2FCRbOFL%2F8yoTB7Pv1k8WIHhWznYKKq9lR%2B4Fw%2FO1rgc%2F6XiRrueLr3Y94xJDaDJ7YoKe&u2=kQPQ5%2F6JkPpWYUXV&width=2560",
    badge: "",
    features: ["5.0 cu ft Capacity", "6 Motion Technology", "Steam", "TurboWash 360°", "ThinQ Compatible"],
    shortDesc: "5.0 cu ft LG front-load washer with 6 Motion technology for cleaner and gentler washing.",
    docName: "LG_WM3470CW_Features.pdf"
  },
  {
    id: 9, brand: "lg", brandName: "LG",
    category: "ac", categoryName: "Air Conditioners",
    name: "LG LS-Q12GWZA Dual Inverter 1.0 Ton",
    model: "LS-Q12GWZA", price: 68000, oldPrice: 78000,
    rating: 4.7, reviews: 345,
    image: "https://sspark.genspark.ai/cfimages?u1=KXrbp8Py7l%2Fsp0wJvq1D6zbc3ARG8Iw00kX62HSMI5%2FvZibuqLKLsfRsiprpjt%2B2VgoU%2FmK4aMAMSvw7MpAA25l91O3C8sFAnTDUWGeW%2F%2FcNQ896UvuB%2FjTHy3JP8pvdvvtQX%2Bsd6ooEuOewcjxyxR5bBbmQpuIXAYRDiAL3Po7c17omrLN1zbhH4Vpn4cwKDQP8HiSRwQQ%3D&u2=6axjIiZwlLoPALzE&width=2560",
    badge: "Energy Star",
    features: ["Dual Inverter Compressor", "Faster Cooling", "70% Energy Savings", "Auto Restart", "Wi-Fi Enabled"],
    shortDesc: "LG Dual Inverter AC cools faster, saves more energy and lasts longer than conventional ACs.",
    docName: "LG_LSQ12GWZA_Features.pdf"
  },

  // ---- DAWLANCE ----
  {
    id: 10, brand: "dawlance", brandName: "Dawlance",
    category: "refrigerator", categoryName: "Refrigerators",
    name: "Dawlance DW-530 Inverter Refrigerator",
    model: "DW-530", price: 58000, oldPrice: 65000,
    rating: 4.3, reviews: 156,
    image: "https://sspark.genspark.ai/cfimages?u1=ZaFlLvSdjDqtGXNNbbiLLS%2Fe6UGzaeFdBU35ahQOFqeLu%2F3X89mri0UBN5Jh%2F7YkwRkTYnaFav11ej5IlGtkmS8XQ76MhkI9Z%2FgierhVrml4ou%2BVEXtsE2uPV2mA%2B5M4cJT9KKFLa3Xz1xrB&u2=kONlDey2cHgHVw8E&width=2560",
    badge: "Local Brand",
    features: ["530 Liters Capacity", "Inverter Technology", "Glass Shelves", "No Frost", "5-Year Warranty"],
    shortDesc: "Pakistan's No.1 refrigerator brand – Dawlance brings inverter technology at an affordable price.",
    docName: "Dawlance_DW530_Features.pdf"
  },
  {
    id: 11, brand: "dawlance", brandName: "Dawlance",
    category: "washer", categoryName: "Washers & Dryers",
    name: "Dawlance DW-7500 Twin Tub Washer",
    model: "DW-7500", price: 28000, oldPrice: 33000,
    rating: 4.1, reviews: 89,
    image: "https://sspark.genspark.ai/cfimages?u1=STvKAsgq92B9Xwb3dVeQ58j78wjNOCfEMJTodx5ba4RS%2BI%2FTkjuF4caNt84NPmDOj%2FytzAZlqkWLUgBgYVHLFWvvAahYzYPyNqdvSmKs%2FFJLuJpFCMypTTU%2BOCAW&u2=E45wt6k8Qcf43E5H&width=2560",
    badge: "Budget Pick",
    features: ["7.5kg Wash Capacity", "5kg Spin Capacity", "Twin Tub Design", "Plastic Body", "2-Year Warranty"],
    shortDesc: "Classic twin tub semi-automatic washing machine built for reliability and ease of use.",
    docName: "Dawlance_DW7500_Features.pdf"
  },

  // ---- PEL ----
  {
    id: 12, brand: "pel", brandName: "PEL",
    category: "ac", categoryName: "Air Conditioners",
    name: "PEL Fit Inverter AC 1.5 Ton",
    model: "PACI-12K FIT", price: 75000, oldPrice: 85000,
    rating: 4.2, reviews: 112,
    image: "https://sspark.genspark.ai/cfimages?u1=rmLiSadUze1EK8owT%2FNRA84JMy2luFs7hr15X%2F1I1TDkc%2F7tNPH2Rn%2Bc81hUtXmI1YwGkoHjPu%2F%2BlGJ6Nbg4nYd4GoNNWJdH2DdcRvgYrjfPm5pJJ%2BX%2FXgAQKnCsBlP9xmbHM6FjNCsJMijlL2W7%2BEASQzG6T4feKcK3ZKGe3YSUmUsmHrh7ywnu0xbgTezLv45DKx8%2FlA81S6I8LnirLv4qO%2F6RRZjOao%2Fo9LM%3D&u2=8SA6%2FBOgwZrKUUDQ&width=2560",
    badge: "",
    features: ["Inverter Compressor", "1.5 Ton Cooling", "Turbo Cool", "Auto Clean", "Wi-Fi Ready"],
    shortDesc: "PEL's affordable yet powerful inverter AC for medium-sized rooms with turbo cooling.",
    docName: "PEL_PACI12K_Features.pdf"
  },

  // ---- WHIRLPOOL ----
  {
    id: 13, brand: "whirlpool", brandName: "Whirlpool",
    category: "washer", categoryName: "Washers & Dryers",
    name: "Whirlpool WFW8620HW Front Load 5.0 cu ft",
    model: "WFW8620HW", price: 115000, oldPrice: 130000,
    rating: 4.5, reviews: 198,
    image: "https://sspark.genspark.ai/cfimages?u1=om0699x%2FajKc2lO0KcbaF1cTJAmHqX6zjkccqxNgsdGZxRIK%2BIxIunrhJZY7gcoasKz%2BInTm7ine40aDykApkptx7SZkrgufDQxoLDL9fi34DecpkPofKbOkHA5L&u2=6qu8Y0yZ6n3NhZEc&width=2560",
    badge: "",
    features: ["5.0 cu ft", "Steam Clean", "12 Cycles", "Presoak Option", "Smart Capable"],
    shortDesc: "Whirlpool front-load washer with steam cleaning and presoak options for heavy stains.",
    docName: "Whirlpool_WFW8620HW_Features.pdf"
  },
  {
    id: 14, brand: "whirlpool", brandName: "Whirlpool",
    category: "refrigerator", categoryName: "Refrigerators",
    name: "Whirlpool WRF555SDFZ French Door 25 cu ft",
    model: "WRF555SDFZ", price: 155000, oldPrice: 175000,
    rating: 4.4, reviews: 165,
    image: "https://sspark.genspark.ai/cfimages?u1=zAtUhTOd5Xv7h1oUyPIzQpNjJGvaRldJry42mobJIYbBR%2BLCui3YRtzIXyM6%2BsFoSDP0UzvSu5TBTsbE6RaBCOxkNfc3gHzMHy916E440dGi1VSqkA0sAnJ%2BAjaDzVGVptvVZc0j3t4mP0zbok3L&u2=0X%2BpkWtDQmIXVwsI&width=2560",
    badge: "",
    features: ["25 cu ft Capacity", "Adaptive Defrost", "Humidity Control Crispers", "LED Lighting", "In-Door Ice"],
    shortDesc: "Whirlpool French Door refrigerator with adaptive defrost that runs only when needed.",
    docName: "Whirlpool_WRF555SDFZ_Features.pdf"
  },

  // ---- ORIENT ----
  {
    id: 15, brand: "orient", brandName: "Orient",
    category: "ac", categoryName: "Air Conditioners",
    name: "Orient 1.5 Ton Inverter AC Diamond",
    model: "OAC-18GTW", price: 70000, oldPrice: 80000,
    rating: 4.1, reviews: 78,
    image: "https://sspark.genspark.ai/cfimages?u1=fIC7tUhbIqOUIYSO55M09WMPaEZ0pgeT0StPoePvcn0anwKyf31t2LjflLsq7uTFsDY4A9wkTbNIOh1ZQxwt3X9IfNVyOnLeSSs%2F7v3lxts9dtJsRscFblE%3D&u2=quhboauoM2b9BI1o&width=2560",
    badge: "",
    features: ["1.5 Ton Capacity", "Inverter Technology", "Self Cleaning", "Follow Me Function", "Remote Control"],
    shortDesc: "Orient Diamond series inverter AC with self-cleaning technology and follow-me mode.",
    docName: "Orient_OAC18GTW_Features.pdf"
  },

  // ---- GREE ----
  {
    id: 16, brand: "gree", brandName: "Gree",
    category: "ac", categoryName: "Air Conditioners",
    name: "Gree GS-12CITH12G Inverter 1.0 Ton",
    model: "GS-12CITH12G", price: 65000, oldPrice: 74000,
    rating: 4.3, reviews: 145,
    image: "https://sspark.genspark.ai/cfimages?u1=MW%2FaRSYjuzD4gU9SwBPQIDB7rQ2Ibswiq04gw23mZf70fDyt4hO6F6ypNEAfZ1ytpyUKCi7DNtm0NoLKfOURo3x8Mo0Ivp4TZluDoj90x3BRvwZxj4UGQA%3D%3D&u2=USZMuQAeMRrJJhh%2B&width=2560",
    badge: "",
    features: ["Inverter Compressor", "R32 Refrigerant", "Cold Plasma Filter", "Smart Diagnosis", "Auto Restart"],
    shortDesc: "Gree inverter AC with R32 eco-friendly refrigerant and cold plasma air purification filter.",
    docName: "Gree_GS12CITH12G_Features.pdf"
  }
];

const BRANDS = [
  { id: "haier",     name: "Haier",     tagline: "Inspired Living",             color: "#e60028", products: PRODUCTS.filter(p => p.brand === "haier").length },
  { id: "samsung",   name: "Samsung",   tagline: "Do What You Can't",           color: "#1428A0", products: PRODUCTS.filter(p => p.brand === "samsung").length },
  { id: "lg",        name: "LG",        tagline: "Life's Good",                  color: "#a50034", products: PRODUCTS.filter(p => p.brand === "lg").length },
  { id: "whirlpool", name: "Whirlpool", tagline: "Every Day, Care",             color: "#003087", products: PRODUCTS.filter(p => p.brand === "whirlpool").length },
  { id: "dawlance",  name: "Dawlance",  tagline: "Pakistan's #1 Appliance",    color: "#00529B", products: PRODUCTS.filter(p => p.brand === "dawlance").length },
  { id: "pel",       name: "PEL",       tagline: "Power of Excellence",         color: "#cc0000", products: PRODUCTS.filter(p => p.brand === "pel").length },
  { id: "orient",    name: "Orient",    tagline: "The Choice of Champions",     color: "#1c75bc", products: PRODUCTS.filter(p => p.brand === "orient").length },
  { id: "gree",      name: "Gree",      tagline: "Stay Comfortable",            color: "#00843D", products: PRODUCTS.filter(p => p.brand === "gree").length }
];

const CATEGORIES = [
  { id: "refrigerator", name: "Refrigerators",   icon: "fa-snowflake",      color: "#3b82f6", desc: "Keep your food fresh longer with our range of refrigerators from top brands." },
  { id: "washer",       name: "Washers & Dryers", icon: "fa-tshirt",         color: "#8b5cf6", desc: "Front load, top load and dryer combos for every household need." },
  { id: "ac",           name: "Air Conditioners", icon: "fa-wind",           color: "#06b6d4", desc: "Inverter and conventional ACs for homes and offices." },
  { id: "tv",           name: "Televisions",      icon: "fa-tv",             color: "#f59e0b", desc: "Smart, OLED, QLED, and LED TVs in all sizes." },
  { id: "microwave",    name: "Microwaves & Ovens",icon: "fa-broadcast-tower",color: "#ef4444", desc: "Microwave ovens, convection ovens, and built-in options." },
  { id: "dishwasher",   name: "Dishwashers",      icon: "fa-sink",           color: "#10b981", desc: "Built-in, portable, and countertop dishwashers." }
];
