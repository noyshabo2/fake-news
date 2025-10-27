# Technical Context

## Technology Stack

### Core Framework
- **Next.js 15.5.2**: React framework with App Router
- **React 19.1.0**: UI library with latest features
- **React DOM 19.1.0**: DOM bindings for React

### Development Setup
- **Node.js**: Required for Next.js development
- **Package Manager**: npm (using package-lock.json)
- **Build Tool**: Next.js built-in bundler

### Styling
- **CSS**: Custom CSS with modern features
- **No Framework**: Removed Tailwind CSS dependencies
- **Typography**: Web fonts (Heebo for Hebrew)
- **Responsive**: Mobile-first approach

## Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
```

## File Structure Conventions
- **Components**: `.jsx` extension for React components
- **Styles**: Separate CSS files, imported in components
- **Images**: Static assets in `/public/assets/`
- **Routing**: App Router file-based routing

## Browser Support
- **Modern Browsers**: ES6+ support required
- **Hebrew Support**: Unicode and RTL text rendering
- **Mobile**: Responsive design for mobile devices

## Performance Considerations
- **Server Components**: Default for better performance
- **Image Optimization**: Next.js Image component
- **Static Generation**: Pre-built pages where possible
- **CSS**: Minimal, custom CSS for fast loading

## Development Constraints
- **Language**: Hebrew primary, RTL layout mandatory
- **Accessibility**: Semantic HTML and ARIA labels
- **SEO**: Proper meta tags and page structure
- **Mobile**: Mobile-first responsive design

## Dependencies
- **Production**: Only React and Next.js core
- **Development**: Currently none (cleaned up Tailwind)
- **Assets**: Self-hosted images in public directory

## Configuration Files
- **package.json**: Project dependencies and scripts
- **next.config.mjs**: Next.js configuration
- **jsconfig.json**: JavaScript/TypeScript configuration
- **postcss.config.mjs**: CSS processing configuration

