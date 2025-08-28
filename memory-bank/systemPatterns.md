# System Patterns: Next.js App Architecture

## Architecture Overview
Next.js 15 App Router with file-based routing and React Server Components.

## Project Structure
```
src/app/
├── layout.jsx          # Root layout with Hebrew/RTL setup
├── page.js             # Homepage with featured articles
├── globals.css         # Global CSS reset and variables
├── article/
│   └── [id]/
│       └── page.jsx    # Dynamic article routing
├── shared/
│   ├── Header.jsx      # Site header component
│   └── Footer.jsx      # Site footer component
├── routes/             # Legacy article components (being migrated)
│   ├── ArticlePage.jsx
│   └── ArticlePage2.jsx
└── styles/
    └── index.css       # Main stylesheet with all component styles
```

## Key Technical Decisions

### Layout Strategy
- **Single Layout**: Using `layout.jsx` with Hebrew/RTL configuration
- **RTL Support**: `dir="rtl"` and `lang="he"` on HTML element
- **Typography**: Heebo font family optimized for Hebrew

### Routing Pattern
- **App Router**: Using Next.js 15 App Router (not Pages Router)
- **Dynamic Routes**: `/article/[id]` for individual articles
- **Static Generation**: Pre-generating article routes with `generateStaticParams`

### Component Architecture
- **Server Components**: Default for better performance
- **Client Components**: Only where needed (marked with 'use client')
- **Shared Components**: Header/Footer in `shared/` directory

### Styling Approach
- **Custom CSS**: No framework, custom CSS with CSS variables
- **CSS Variables**: Centralized design tokens in `:root`
- **Responsive**: Mobile-first with `@media` queries
- **RTL Aware**: Using logical properties (`margin-inline`, `padding-inline`)

## Data Flow
1. Homepage: Static article data rendered server-side
2. Article Routes: Route based on ID parameter to specific components
3. Navigation: Next.js Link components for client-side routing

## Design Patterns
- **Container Pattern**: `.container` class for max-width and centering
- **CSS Grid**: For layout (articles grid, footer columns)
- **Flexbox**: For smaller component layouts
- **CSS Custom Properties**: For theming and consistent spacing
