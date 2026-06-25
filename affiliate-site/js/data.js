/**
 * ============================================================
 *  PRODUCT DATA — Edit this section to update site content
 *  Affiliate links, descriptions, images, videos, reviews
 * ============================================================
 */
var PRODUCTS = [
  {
    id: 1,
    name: "Smart HVAC Controller Pro",
    tagline: "Intelligent climate control for modern homes",
    price: "$249.99",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    description: "WiFi-enabled thermostat with AI learning, zone control, and energy savings up to 30%.",
    longDescription:
      "The Smart HVAC Controller Pro revolutionizes home climate management. Using advanced AI algorithms, it learns your schedule and preferences to optimize heating and cooling automatically. Supports multi-zone control, voice assistant integration, and provides detailed energy usage reports through its companion app.",
    specs: [
      "WiFi 802.11 b/g/n/ac (2.4 & 5 GHz)",
      "Compatible with 95% of HVAC systems",
      "AI learning with 7-day forecast adaptation",
      "Energy savings: up to 30% reduction",
      "Voice: Alexa, Google Assistant, Siri",
      "Dimensions: 4.5 × 4.5 × 0.8 in",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE1",
    badge: "Best Seller",
    reviews: [
      { author: "TechReviewer88", rating: 5, text: "Cut my energy bill by 25% in the first month. The AI scheduling is incredibly accurate." },
      { author: "HomeAutoGuru", rating: 5, text: "Flawless integration with my existing smart home setup. Installation took under 30 minutes." },
      { author: "DIY_HVAC", rating: 4, text: "Great product but the app could use a UI refresh. Hardware is top-notch though." },
    ],
  },
  {
    id: 2,
    name: "Industrial-Grade Duct Cleaner",
    tagline: "Commercial power, residential precision",
    price: "$189.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    description: "HEPA-filtered rotary brush system that removes 99.97% of airborne particles from ductwork.",
    longDescription:
      "Engineered for both professionals and serious homeowners, the Industrial-Grade Duct Cleaner features a powerful 12-amp motor paired with a HEPA filtration system. The rotating brush head agitates stubborn debris while the vacuum extracts everything — pollen, mold spores, dust mites, and construction debris — leaving your air pristine.",
    specs: [
      "12-amp motor, variable speed control",
      "True HEPA H13 filtration (99.97%)",
      "20-ft reinforced hose included",
      "Rotary brush: 4 interchangeable heads",
      "Noise level: 68 dB (quiet operation)",
      "Weight: 14.5 lbs",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE2",
    badge: "Top Rated",
    reviews: [
      { author: "CleanAirAdvocate", rating: 5, text: "The difference in air quality is night and day. My allergy symptoms have significantly improved." },
      { author: "ProContractor99", rating: 5, text: "I use this on every job. Clients are always impressed with the results. Built like a tank." },
    ],
  },
  {
    id: 3,
    name: "Precision HVAC Manifold Gauge",
    tagline: "Digital accuracy for critical diagnostics",
    price: "$329.99",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    description: "Wireless digital manifold with Bluetooth logging, 0.5% accuracy, and 30+ refrigerant profiles.",
    longDescription:
      "Step into the future of HVAC diagnostics with this Bluetooth-enabled digital manifold gauge. It supports over 30 refrigerant types, automatically calculates superheat and subcooling, and logs all data to your smartphone. The 0.5% full-scale accuracy ensures you never miss a critical measurement.",
    specs: [
      "Accuracy: ±0.5% of full scale",
      "Bluetooth 5.0 range: 100 ft",
      "30+ preloaded refrigerant profiles",
      "Auto superheat / subcooling calc",
      "Rechargeable Li-ion (18 hr battery)",
      "Operating temp: -4°F to 140°F",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE3",
    badge: "New",
    reviews: [
      { author: "HVACProField", rating: 5, text: "The Bluetooth logging is a game-changer for service reports. Superheat calculations are spot-on." },
      { author: "TechDiagQueen", rating: 5, text: "Replaced my analog set and will never go back. The refrigerant library is incredibly comprehensive." },
      { author: "CoolingSpecialist", rating: 4, text: "Excellent tool. Would like to see more custom refrigerant profiles in a future update." },
    ],
  },
  {
    id: 4,
    name: "Ultra-Quiet ERV Ventilator",
    tagline: "Fresh air without the noise",
    price: "$459.99",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80",
    description: "Energy recovery ventilator with 85% efficiency and silent 0.3 sone operation.",
    longDescription:
      "The Ultra-Quiet ERV Ventilator continuously supplies fresh, filtered air while recovering energy from exhaust air. With 85% enthalpy efficiency and a virtually silent 0.3 sone fan, it maintains indoor air quality without disturbing your peace. Ideal for tight, modern homes needing mechanical ventilation.",
    specs: [
      "Enthalpy efficiency: 85%",
      "Sound level: 0.3 sones (whisper-quiet)",
      "Airflow: 50–200 CFM",
      "MERV-13 filtration included",
      "Frost control down to -13°F",
      "Energy Star Most Efficient 2025",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE4",
    badge: "Energy Star",
    reviews: [
      { author: "GreenBuilderCO", rating: 5, text: "Installed in a net-zero home — performs beautifully. The efficiency numbers are real." },
      { author: "FreshAirFanatic", rating: 5, text: "You literally cannot hear it running. CO2 levels dropped from 1200 to 600 ppm." },
    ],
  },
  {
    id: 5,
    name: "Thermal Imaging Camera",
    tagline: "See hidden HVAC issues instantly",
    price: "$599.99",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    description: "256×192 IR resolution camera with real-time analysis, 4″ LCD, and 8-hour battery.",
    longDescription:
      "Diagnose duct leaks, insulation gaps, refrigerant line issues, and electrical hotspots with professional-grade thermal imaging. The 256×192 IR sensor delivers crisp thermal detail, while the 4-inch LCD and on-screen analysis tools let you identify problems instantly. Includes free PC/Mac reporting software.",
    specs: [
      "IR resolution: 256 × 192 pixels",
      "Thermal sensitivity: <50 mK",
      "Temperature range: -4°F to 1022°F",
      "Display: 4-inch color LCD",
      "Battery: 8 hours continuous use",
      "Includes: USB-C, carrying case, software",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE5",
    badge: "Professional",
    reviews: [
      { author: "InspectMaster", rating: 5, text: "Found a refrigerant leak in 2 minutes that would have taken hours with traditional methods." },
      { author: "EnergyAuditorPro", rating: 5, text: "The reporting software alone is worth the price. My clients love the visual evidence." },
    ],
  },
  {
    id: 6,
    name: "Mini-Split Multi-Zone Kit",
    tagline: "Whole-home comfort, zone by zone",
    price: "$1,899.99",
    image: "https://images.unsplash.com/photo-1631545806601-b1bc0e5a8f3b?w=600&q=80",
    description: "3-zone mini-split system with inverter technology, 22 SEER, and Wi-Fi control.",
    longDescription:
      "The Mini-Split Multi-Zone Kit delivers personalized comfort to up to three rooms simultaneously. Each indoor unit operates independently, so everyone sets their own temperature. Inverter technology ramps power up and down smoothly — no wasted energy, no temperature swings. 22 SEER rating means maximum efficiency.",
    specs: [
      "22 SEER / 13 HSPF efficiency",
      "3 indoor units (up to 4 possible)",
      "Inverter compressor, variable speed",
      "Wi-Fi control with mobile app",
      "Heating down to -22°F ambient",
      "Linesets pre-charged for 25 ft",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    affiliateLink: "https://www.amazon.com/dp/EXAMPLE6",
    badge: "Best Value",
    reviews: [
      { author: "RenoDad2025", rating: 5, text: "Replaced old ducted system. Each room is now perfectly comfortable and our bills dropped 40%." },
      { author: "HVACLife", rating: 5, text: "DIY-friendly install if you have basic skills. Performance rivals Mitsubishi at half the price." },
      { author: "ZoneComfortGuy", rating: 4, text: "Great system. The app could be more polished, but the hardware is solid." },
    ],
  },
];
