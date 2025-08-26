# 📋 Portfolio Site Improvement Tasks

## 🚨 **Priority 1: Critical Issues**

### 1. **Clean up Mixed Architecture** ✅ **COMPLETED**
- [x] Remove legacy React files from `/src` folder
- [x] Remove unused CRA dependencies from `package.json`
- [x] Delete `public/index.html` and other CRA-specific files
- [x] Ensure all components use Next.js 15 patterns

### 2. **Fix Next.js Build Configuration** ✅ **COMPLETED**
- [x] Remove `eslint: { ignoreDuringBuilds: true }` from `next.config.mjs`
- [x] Remove `typescript: { ignoreBuildErrors: true }` from `next.config.mjs`
- [x] Fix any actual ESLint and TypeScript errors that surface
- [x] Add proper error handling and type safety

### 3. **Remove Dependency Bloat** ✅ **COMPLETED**
- [x] Choose between MUI and Radix UI (recommend keeping Radix UI + shadcn/ui)
- [x] Remove MUI dependencies: `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`
- [x] Clean up unused Radix UI components
- [x] Update package.json to remove unused dependencies

## 🔍 **Priority 2: SEO & Performance**

### 4. **SEO Optimization**
- [ ] Add viewport meta tag to layout
- [ ] Add Open Graph meta tags for social sharing
- [ ] Add Twitter Card meta tags
- [ ] Add JSON-LD structured data for person/professional
- [ ] Improve meta descriptions with targeted keywords
- [ ] Add canonical URL tags

### 5. **Create Sitemap**
- [ ] Generate `sitemap.xml` in `/public`
- [ ] Include all main pages and project pages
- [ ] Submit sitemap to Google Search Console

### 6. **Image Optimization**
- [ ] Remove `images: { unoptimized: true }` from `next.config.mjs`
- [ ] Convert placeholder images to Next.js `<Image>` components
- [ ] Add proper alt text to all images
- [ ] Optimize image sizes and formats (WebP)

### 7. **Favicon Implementation**
- [ ] Add proper favicon files (16x16, 32x32, 180x180)
- [ ] Add Apple touch icons
- [ ] Update `manifest.json` with correct icon paths
- [ ] Add favicon meta tags to layout

## 🎯 **Priority 3: User Experience**

### 8. **Language & Localization**
- [ ] Change `lang="en"` to `lang="es"` in `app/layout.tsx`
- [ ] Add `hreflang` attributes if supporting multiple languages
- [ ] Ensure all content matches the declared language

### 9. **Accessibility Improvements**
- [ ] Add focus management for keyboard navigation
- [ ] Add skip to main content link
- [ ] Ensure proper heading hierarchy (h1 > h2 > h3)
- [ ] Add ARIA labels where needed
- [ ] Test with screen readers
- [ ] Improve color contrast ratios

### 10. **Responsive Design**
- [ ] Consider merging mobile/desktop components into responsive ones
- [ ] Test on various screen sizes
- [ ] Ensure touch targets are at least 44px
- [ ] Add proper spacing and typography scales

## 🔧 **Priority 4: Code Quality**

### 11. **Remove Duplicate Code**
- [ ] Remove duplicate `use-mobile.tsx` from `/hooks` (keep the one in `/components/ui`)
- [ ] Remove duplicate `use-toast.ts` from `/hooks` (keep the one in `/components/ui`)
- [ ] Update imports to use the remaining files

### 12. **Security Improvements**
- [ ] Add `rel="noopener noreferrer"` to all external links
- [ ] Review and update Content Security Policy
- [ ] Ensure no sensitive information in client-side code

### 13. **Performance Monitoring**
- [ ] Add bundle analyzer: `@next/bundle-analyzer`
- [ ] Set up Core Web Vitals monitoring
- [ ] Add performance budgets
- [ ] Implement lazy loading for non-critical components

## 🎨 **Priority 5: Enhancement Features**

### 14. **Additional Improvements**
- [ ] Add loading states for better UX
- [ ] Implement error boundaries
- [ ] Add animation/transitions with Framer Motion
- [ ] Create a 404 page
- [ ] Add contact form validation
- [ ] Implement dark/light theme toggle properly
- [ ] Add project filtering/search functionality

### 15. **Development Workflow**
- [ ] Add pre-commit hooks with Husky
- [ ] Set up automated testing with Jest/Testing Library
- [ ] Add CI/CD pipeline with GitHub Actions
- [ ] Set up dependency updates with Renovate

---

## 📊 **Expected Impact**

- **Performance**: 20-30% faster load times
- **SEO**: Better search engine rankings
- **Accessibility**: WCAG 2.1 AA compliance
- **Maintenance**: Cleaner, more maintainable codebase
- **Bundle Size**: 30-40% reduction after removing unused deps

## 🎯 **Quick Wins** ✅ **COMPLETED**
1. ✅ Fix language declaration (`lang="es"`) - Changed from `lang="en"` to `lang="es"` in layout.tsx
2. ✅ Remove unused React files - Deleted `/src` folder and `public/index.html`
3. ✅ Add proper meta tags - Added OpenGraph, Twitter Cards, viewport, and SEO meta tags
4. ✅ Remove duplicate utilities - Removed duplicate `/hooks` folder
5. ✅ Add security attributes to external links - All external links already had `rel="noopener noreferrer"`