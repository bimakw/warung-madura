# Contributing to Warung Madura

Thank you for your interest in contributing to Warung Madura! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git

### Setup

1. **Fork the repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/warung-madura.git
   cd warung-madura
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/bimakw/warung-madura.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

## Development Workflow

### Creating a Branch

Always create a new branch for your work:

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/description` | `feature/add-payment-gateway` |
| Bug Fix | `fix/description` | `fix/cart-calculation` |
| Documentation | `docs/description` | `docs/update-readme` |
| Refactor | `refactor/description` | `refactor/product-card` |

### Running Tests

Before submitting, ensure your code passes:

```bash
# Run linter
npm run lint

# Build project
npm run build
```

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>: <description>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Code style (formatting, no logic change) |
| `refactor` | Code refactoring |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |

### Examples

```bash
feat: add product search functionality
fix: resolve cart total calculation issue
docs: update installation instructions
style: format code with prettier
refactor: simplify checkout form validation
```

## Pull Request Process

1. **Update your branch**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your changes**

   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**

   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Fill in the PR template

4. **PR Requirements**

   - Clear title following commit convention
   - Description of changes
   - Screenshots (for UI changes)
   - Link to related issue (if any)

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Refactoring

## Screenshots (if applicable)

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed my code
- [ ] Build passes locally
- [ ] Updated documentation (if needed)
```

## Style Guide

### TypeScript

- Use TypeScript for all new files
- Define interfaces for props and data structures
- Avoid `any` type

```typescript
// Good
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

// Avoid
const ProductCard = (props: any) => { ... }
```

### React Components

- Use functional components with hooks
- Use descriptive component names
- Keep components focused and small

```typescript
// Good
export default function ProductCard({ product }: ProductCardProps) {
  return (
    // ...
  );
}
```

### Tailwind CSS

- Use Tailwind utility classes
- Group related classes together
- Use responsive prefixes consistently

```tsx
// Good
<div className="flex flex-col gap-4 p-4 md:flex-row md:gap-6">

// Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

### File Naming

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ProductCard.tsx` |
| Utilities | camelCase | `formatPrice.ts` |
| Types | camelCase | `index.ts` |
| Pages | lowercase | `page.tsx` |

## Questions?

Feel free to open an issue if you have questions or need help getting started.

Thank you for contributing!
