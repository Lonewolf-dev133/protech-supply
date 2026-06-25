# ProTech Supply — Affiliate Marketing Site

A modern, responsive affiliate marketing website for HVAC appliances and technical tools. Built with HTML5, Tailwind CSS, and vanilla JavaScript.

## Features

- **Product Showcase** — Grid layout with image, description, price, and "Learn More" cards
- **Interactive Modal** — Click any product to see embedded video demos, detailed specs, and customer reviews
- **Affiliate Ready** — "Purchase on Amazon" button with your affiliate links on every product
- **Professional Design** — Cool blue/slate palette, smooth hover animations, sticky nav, fully responsive
- **Admin Panel** — Built-in UI at `/admin.html` to manage products without editing code

## Quick Start

```bash
# Serve locally
npx serve .
# or
python -m http.server
```

Open `http://localhost:3000` (or whatever port) in your browser.

## File Structure

```
affiliate-site/
├── index.html          # Main website
├── admin.html          # Admin panel (manage products)
├── README.md           # This file
├── css/
│   └── style.css       # Custom styles & animations
├── js/
│   ├── data.js         # Product data (source of truth for git)
│   └── app.js          # Site interactivity
└── img/                # (optional) local images
```

## Managing Products

### Option A: Admin Panel (Recommended)

1. Open `/admin.html` on your live site
2. Edit products, update affiliate links, manage reviews via the UI
3. Click **Export** to download an updated `data.js`
4. Replace `js/data.js` in the repo with the downloaded file
5. Commit and push

> Changes made in the admin panel are saved to your browser's localStorage immediately (visible on refresh). Export to `data.js` to make them permanent in the repository.

### Option B: Edit Directly

Edit `js/data.js` — each product has clearly labeled fields:

| Field            | Description                                  |
|------------------|----------------------------------------------|
| `name`           | Product title                                |
| `tagline`        | Short subtitle under title                   |
| `price`          | Display price (e.g. "$249.99")               |
| `image`          | Product image URL                            |
| `description`    | Short description (card view)                |
| `longDescription`| Full description (modal view)                |
| `specs`          | Array of specification strings               |
| `videoUrl`       | YouTube embed URL (use `/embed/` format)     |
| `affiliateLink`  | **Your Amazon affiliate URL**                |
| `badge`          | Optional badge text ("Best Seller", "New")   |
| `reviews`        | Array of `{ author, rating, text }` objects  |

## Deploy to GitHub Pages

1. Create a repository on GitHub
2. Push this folder to the repo:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

3. Go to **Settings > Pages** and set the source to **main branch / root folder**
4. Your site will be live at `https://YOUR-USER.github.io/YOUR-REPO`

> The site works as a static site — no build step needed.

## Customization

- **Colors** — Edit the `bg-gradient-to-br from-blue-600 to-blue-800` classes in `index.html` or override in `css/style.css`
- **Fonts** — Inter is loaded via Google Fonts in `css/style.css`
- **Layout** — Tailwind responsive classes control the grid (default: 1 col mobile, 2 col tablet, 3 col desktop)

## License

MIT
