# Warung Madura

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A modern e-commerce web application for traditional Indonesian convenience store (warung), built with Next.js and TypeScript.

**Live Demo:** [warung-madura-benno.netlify.app](https://warung-madura-benno.netlify.app)

## Features

- **Product Catalog** - Browse products by category with search and filter
- **Shopping Cart** - Add, remove, update quantities with persistent storage
- **Checkout Flow** - Customer form with WhatsApp integration
- **Dark Mode** - Toggle between light and dark themes
- **Wishlist** - Save favorite products
- **PWA Ready** - Installable as mobile app
- **Responsive** - Mobile-first design with Tailwind CSS

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| State | React Context API |
| Deployment | Netlify / Docker |

## Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

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
# Using docker-compose (recommended)
docker compose up -d

# Or build manually
docker build -t warung-madura .
docker run -p 3000:3000 warung-madura
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── checkout/           # Checkout flow
│   ├── keranjang/          # Shopping cart
│   ├── kontak/             # Contact page
│   ├── login/              # User login
│   ├── profil/             # User profile
│   ├── produk/             # Product catalog & details
│   └── register/           # User registration
├── components/             # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CartItem.tsx
│   └── PromoBanner.tsx
├── context/                # React Context providers
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   ├── ThemeContext.tsx
│   └── WishlistContext.tsx
├── data/                   # Static data
│   ├── products.ts
│   └── store.ts
└── types/                  # TypeScript interfaces
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Netlify](https://netlify.com/)

---

Made with ❤️ in Indonesia
