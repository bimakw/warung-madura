# Warung Madura

[![Netlify Status](https://api.netlify.com/api/v1/badges/placeholder/deploy-status)](https://warung-madura-benno.netlify.app)

A modern e-commerce web application for traditional Indonesian convenience store (warung), built with Next.js and TypeScript.

**Live Demo:** [warung-madura-benno.netlify.app](https://warung-madura-benno.netlify.app)

## Features

- **Product Catalog**: Browse products by category with search and filter
- **Product Details**: Individual product pages with related items
- **Shopping Cart**: Add, remove, update quantities
- **Checkout Flow**: Customer form with validation and WhatsApp integration
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Deployment**: Netlify (Static Export) / Docker

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bimakw/warung-madura.git
cd warung-madura

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Docker

```bash
# Build and run with Docker
docker build -t warung-madura .
docker run -p 3000:3000 warung-madura

# Or use docker-compose
docker compose up -d
```

## Project Structure

```
warung-madura/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── checkout/        # Checkout flow
│   │   ├── keranjang/       # Shopping cart
│   │   ├── kontak/          # Contact page
│   │   └── produk/          # Product catalog & details
│   ├── components/          # Reusable components
│   ├── context/             # React Context (Cart)
│   ├── data/                # Static data (products, store info)
│   └── types/               # TypeScript interfaces
├── public/                  # Static assets
└── ...config files
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/produk` | Product catalog with search & filter |
| `/produk/[id]` | Product detail page |
| `/keranjang` | Shopping cart |
| `/checkout` | Checkout with customer form |
| `/checkout/success` | Order confirmation |
| `/kontak` | Contact information |

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build settings are auto-detected from `netlify.toml`
3. Deploy!

Build command: `npm run build`
Publish directory: `out`

## License

MIT
