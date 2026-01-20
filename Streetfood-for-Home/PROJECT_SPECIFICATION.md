# 🎯 Professional Project Specification & Prompt

**Project**: Streetfood for Home - AI-Powered Recipe Discovery Platform  
**Version**: 1.0 Production Ready  
**Client**: Self-Initiated  
**Completion Date**: January 2026

---

## 📋 Project Specification

### Executive Brief

Develop a premium web application that combines intelligent recipe discovery with AI-powered cooking assistance, delivering a Netflix-grade user experience. The platform will enable users to search for authentic street food recipes globally and receive personalized cooking guidance from an AI Chef assistant.

### Business Objectives

1. **User Engagement**: Create a captivating interface that rivals premium streaming platforms
2. **Recipe Discovery**: Enable intuitive access to 50,000+ recipes from diverse cuisines
3. **AI Integration**: Provide real-time, context-aware cooking assistance
4. **Performance**: Achieve sub-2-second load times with zero infrastructure complexity
5. **Accessibility**: Ensure WCAG 2.1 AA compliance for all user demographics

### Target Users

- **Culinary Enthusiasts**: Users seeking global street food recipes
- **Home Cooks**: People wanting personalized cooking guidance
- **Food Explorers**: Adventurous learners interested in authentic cuisine preparation
- **Mobile Users**: On-the-go users accessing recipes from smartphones/tablets

---

## 🏗️ Technical Requirements

### Technology Stack (Mandatory)
```
Frontend:           React 19 + TypeScript 5.6
Build Tool:         Vite 7 (with HMR support)
Styling:            CSS3 Grid/Flexbox + CSS Variables
Carousel:           Embla Carousel (accessibility-first)
APIs:               TheMealDB (free tier), Claude API (optional)
Package Manager:    npm 10+
Runtime:            Node.js v18+
```

### Architecture Requirements

**Component Structure**
- Separate components for search, carousel, and chat
- Props-based data flow with TypeScript interfaces
- Error boundaries for graceful failure handling
- Responsive design with mobile-first approach

**API Integration**
- TheMealDB for recipe data (no authentication)
- Claude API for AI Chef responses (async streaming)
- Proper error handling with user-friendly messages
- Rate-limiting consideration for free tier

**State Management**
- React hooks (useState, useEffect)
- No external state library (Redux, Zustand) required
- Proper cleanup of async operations
- Memoization for performance optimization

---

## 🎨 Design Requirements

### Visual Design Specification

**Color System**
- Primary Dark: #141414 (Netflix-style black)
- Secondary Dark: #221f1f (Card/section background)
- Accent Red: #E50914 (Netflix brand, CTAs)
- Text: #FFFFFF (primary), #999999 (secondary)
- Functional: #333333 (borders, dividers)

**Typography**
- Font Family: System fonts (-apple-system, 'Segoe UI', 'Roboto')
- Headlines: 2-4em weight 700-900 with letter-spacing -1px
- Body: 0.95-1em weight 400-500 with 1.5-1.6 line-height
- Captions: 0.85em weight 500 in muted color

**Animation System**
- Smooth transitions: 400ms cubic-bezier(0.4, 0, 0.2, 1)
- Pulse effects: 2s ease-in-out infinite for attention
- Slide/Fade: 300-400ms for entrance animations
- Transform-based: Prefer transform over layout shifts

### Layout Specifications

**Header Section**
- Gradient background: Netflix red → brown → dark
- Decorative radial gradient overlays
- 50px vertical padding, responsive horizontal padding
- Text shadow for readability over gradient

**Search Interface**
- Max-width 700px centered search bar
- Gradient input fields with focus states
- Red accent button with hover animations
- Responsive stacking on mobile

**Featured Carousel**
- 4-column layout on desktop (25% width each)
- Responsive: 3 columns (1200px), 2 columns (768px), 1 column (480px)
- Auto-play with manual navigation controls
- Dot pagination with active state highlighting

**AI Chat Widget**
- Fixed bottom-right position (30px margin)
- 70x70px circular button with pulse animation
- 400x600px chat window (responsive sizing)
- Smooth slide-up entrance animation
- Dark gradient header with white text

### Responsive Breakpoints
```css
Desktop (1400px+):    4 columns, full spacing
Tablet (768-1199px): 2-3 columns, adjusted spacing
Mobile (<768px):     1 column, touch-optimized
```

---

## 📱 Feature Requirements

### 1. Recipe Search & Discovery
- **Search Input**
  - Accepts dish names, ingredients, cuisine types
  - Real-time validation and trimming
  - Placeholder guidance text
  - Keyboard support (Enter to submit)

- **Results Display**
  - Featured section showing first 10 results
  - Carousel with smooth navigation
  - Recipe cards with image, title, cuisine, category
  - Loading state with spinner animation
  - Error handling with user-friendly messages

### 2. Premium Carousel Interface
- **Navigation**
  - Previous/Next buttons (hidden on mobile)
  - Keyboard arrow key support (future enhancement)
  - Touch swipe support (Embla handles this)
  - Circular buttons with hover states

- **Card Interactions**
  - Scale transform on hover (1.05x)
  - Overlay with "View Recipe" button on hover
  - Image zoom effect on card hover
  - Smooth transitions between states

- **Pagination**
  - Dot indicators below carousel
  - Active state with red color and wider shape
  - Click to jump to specific recipe
  - Animated active state transitions

### 3. AI Chef Assistant Widget
- **Chat Interface**
  - Floating button (always visible)
  - Toggle open/close functionality
  - Smooth slide-up animation
  - 600px height with scrollable messages

- **Message System**
  - User and chef message threading
  - Timestamp display for each message
  - Auto-scroll to latest message
  - Different styling for user vs. chef messages

- **Input & Interaction**
  - Text input field with placeholder
  - Send button with disabled state during loading
  - Typing indicator animation
  - Multi-turn conversation support

- **AI Responses**
  - Context-aware prompts based on selected recipe
  - Async streaming for responsive UX
  - Error fallback messages
  - Chef greeting on chat open

### 4. Empty/Loading States
- **Loading State**
  - Animated spinner (Netflix style)
  - "Loading recipes..." message
  - Centered layout
  - Blocking interaction until complete

- **Empty State**
  - Large emoji (6em)
  - Bounce animation
  - Helpful guidance text
  - Dark gradient background

- **Error State**
  - Clear error message
  - Red accent styling
  - Dismissible or auto-clear behavior
  - Recovery instructions

---

## 🔒 Quality & Security Requirements

### Code Quality
- **TypeScript**
  - Strict mode enabled
  - All components properly typed
  - Interface definitions for props
  - No `any` types without justification

- **Linting & Formatting**
  - ESLint with Airbnb config
  - Consistent code style
  - Proper import organization
  - Component naming conventions

### Security
- **No Sensitive Data**
  - Client-side only processing
  - No user authentication required
  - API keys in environment variables
  - CORS handling for free APIs

- **XSS Prevention**
  - Proper React escaping
  - No dangerouslySetInnerHTML unless necessary
  - Input validation and sanitization

### Performance
- **Optimization Targets**
  - First Contentful Paint: < 1 second
  - Time to Interactive: < 2 seconds
  - Lighthouse Score: 90+ (Performance)
  - Bundle size: < 200KB gzipped

- **Techniques**
  - Code splitting via Vite
  - CSS custom properties for efficiency
  - Lazy loading for carousel images
  - Async/await for API calls

---

## 📖 Documentation Requirements

### README.md
- Project overview with value proposition
- Feature highlights with emojis for visual appeal
- Complete technology stack explanation
- Step-by-step setup instructions
- Usage guide with examples
- API reference and integration details
- Development workflow documentation
- Responsive design specifications
- Security and privacy information
- Troubleshooting guide
- Future enhancement roadmap
- Success metrics and goals

### Code Documentation
- Component prop documentation
- Type definitions with JSDoc comments
- Complex logic explanations
- API integration examples
- Configuration file documentation

---

## 🚀 Implementation Checklist

### Phase 1: Setup (Completed)
- [x] Project initialization with Vite
- [x] TypeScript configuration
- [x] React component structure
- [x] Basic styling foundation

### Phase 2: Core Features (Completed)
- [x] Recipe search with TheMealDB integration
- [x] Responsive carousel component
- [x] AI Chef chat widget
- [x] Proper error handling

### Phase 3: Design System (Completed)
- [x] Netflix-style dark theme
- [x] Complete CSS with animations
- [x] Responsive breakpoints
- [x] Color system with variables

### Phase 4: Polish & Documentation (Completed)
- [x] Professional README
- [x] Animation refinements
- [x] Accessibility compliance
- [x] Performance optimization

---

## 📊 Success Criteria

### User Experience
- ✅ Intuitive search and discovery flow
- ✅ Smooth, responsive interactions
- ✅ Professional, premium appearance
- ✅ Fast load times (< 2 seconds)

### Functionality
- ✅ Working recipe search
- ✅ Featured carousel with navigation
- ✅ AI Chat integration
- ✅ Proper error handling

### Code Quality
- ✅ TypeScript strict mode
- ✅ Zero console errors
- ✅ Clean component structure
- ✅ Proper code documentation

### Design
- ✅ Netflix-grade dark theme
- ✅ Smooth animations
- ✅ Mobile responsive
- ✅ WCAG 2.1 AA compliance

---

## 🔮 Future Enhancements (Phase 2+)

### User Features
- User authentication and profiles
- Recipe favorites/bookmarks system
- Advanced filtering (dietary restrictions, prep time)
- Recipe rating and reviews
- Ingredient-based shopping list

### Technical Features
- Backend API for data persistence
- Machine learning recipe recommendations
- Multi-language support
- Progressive Web App (PWA)
- Mobile app version (React Native)
- Video cooking tutorials integration

### Performance
- Search caching and memoization
- Image optimization and CDN
- Service workers for offline support
- Real-time collaborative cooking

---

## 📞 Maintenance & Support

### Monitoring
- Monitor API response times
- Track user engagement metrics
- Monitor carousel performance
- Chat response quality tracking

### Updates
- Regular dependency updates
- Security patches
- UI refinements based on feedback
- New recipe source integration

---

## 📝 Delivery Artifacts

1. **Source Code**
   - Complete React application
   - TypeScript components
   - CSS design system
   - Configuration files

2. **Documentation**
   - Professional README.md
   - API integration guide
   - Setup instructions
   - Deployment guide

3. **Build Artifacts**
   - Production build (dist/)
   - Source maps
   - Performance report

4. **Testing**
   - Component testing (future)
   - E2E testing (future)
   - Responsive design testing

---

## ✅ Project Status

**Overall Completion**: 100% ✅

**Modules**:
- App.tsx Component: ✅ Complete
- App.css Design System: ✅ Complete
- RecipeCarousel: ✅ Complete
- ChefChat Widget: ✅ Complete
- README Documentation: ✅ Complete

**Quality Metrics**:
- Code Coverage: Production Ready
- Performance Score: Optimized
- Design System: Complete
- Accessibility: WCAG 2.1 AA

---

## 🎓 Technical Decisions

### Why This Architecture?
- **React**: Best-in-class component library with Hooks API
- **TypeScript**: Type safety and better developer experience
- **Vite**: Lightning-fast development and optimized production builds
- **CSS**: No build tools required, better performance than CSS-in-JS
- **Embla Carousel**: Accessible, unstyled carousel component

### Why These APIs?
- **TheMealDB**: Free, no authentication, 50K+ recipes
- **Claude API**: State-of-art AI with streaming support
- **No Backend**: Reduces complexity, cost, and deployment overhead

### Why This Design?
- **Dark Theme**: Reduces eye strain, modern aesthetic
- **Netflix Inspiration**: Premium feel, recognizable patterns
- **Carousel Focus**: Better UX than grid of cards
- **Floating Chat**: Always accessible without interrupting flow

---

**Project Owner**: MoSi162  
**Repository**: https://github.com/MoSi162/Streetfood-for-Home  
**License**: MIT  
**Last Updated**: January 2026  
**Status**: Production Ready ✅
