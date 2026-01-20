 # 🍜 Streetfood for Home - AI-Powered Recipe Discovery Platform

> **A premium, AI-enhanced web application that seamlessly discovers, showcases, and guides users through authentic street food recipes from around the globe with an interactive AI Chef assistant.**

---

## 📋 Executive Summary

**Streetfood for Home** is a modern, Netflix-style application designed to revolutionize how users discover and prepare street food recipes. The platform combines a curated recipe discovery system with real-time AI assistance, delivering a sophisticated user experience powered by intelligent recipe matching and personalized cooking guidance.

### Core Value Propositions
- 🌍 **Global Street Food Discovery**: Access thousands of authentic recipes from diverse cuisines worldwide
- 🤖 **AI Chef Assistant**: Real-time, context-aware cooking tips, ingredient substitutions, and technique guidance
- 🎬 **Cinema-Grade UI**: Netflix-inspired dark theme with smooth animations and premium interactions
- ⚡ **Zero-Setup Integration**: Free API with no authentication requirements—ready to deploy instantly

---

## ✨ Key Features

### 1. Intelligent Recipe Search
- **Smart Search Algorithm**: Find recipes by dish name, ingredients, cuisine type, or dietary preferences
- **Real-time Results**: Instant feedback with zero latency using TheMealDB API
- **Featured Carousel**: Beautifully displayed recipes with 4-column responsive grid
- **Filter & Discovery**: Explore trending and curated collections

### 2. Premium Carousel Interface
- **Full-Screen Featured Section**: 4-column responsive grid showcasing recipe cards
- **Smooth Navigation**: Previous/Next buttons with keyboard support
- **Interactive Cards**: Hover effects with recipe preview overlays
- **Pagination Dots**: Visual indicators with active state highlighting and auto-play

### 3. AI Chef Assistant
- **Context-Aware Guidance**: Trained on recipe data to provide specific cooking advice
- **Multi-Turn Conversations**: Persistent chat history with timestamp tracking
- **Real-time Streaming**: Async responses for seamless user experience
- **Floating Widget**: Always-accessible chat interface with pulse animation

### 4. Design System
- **Netflix-Inspired Dark Theme**: Professional dark gradient backgrounds (#141414-#221f1f)
- **Brand Red Accent**: Netflix-style accent color (#E50914) for CTAs and highlights
- **Premium Typography**: Clear hierarchy with system fonts (-apple-system, Segoe UI)
- **Smooth Animations**: 400ms cubic-bezier transitions for responsive interactions
- **Responsive Layout**: Mobile-first design with breakpoints at 1200px, 768px, 480px

---

## 🏗️ Technical Architecture

### Technology Stack
```
Frontend Framework:     React 19 + TypeScript 5.6
Build Tool:           Vite 7 (HMR, optimized bundling)
API Integration:      TheMealDB (REST, no authentication)
AI Integration:       Claude API (async streaming)
Component Library:    Embla Carousel (accessibility-first)
Styling:             Modern CSS Grid/Flexbox + CSS Variables
Package Manager:      npm 10+
Node Version:        v18+
```

### Project Structure
```
Streetfood-for-Home/
├── src/
│   ├── components/
│   │   ├── Searchbar.tsx          # Search input with validation
│   │   ├── RecipeCarousel.tsx     # Embla carousel with autoplay
│   │   └── ChefChat.tsx           # AI assistant interface
│   ├── services/
│   │   ├── aiChefService.ts       # Claude API integration
│   │   └── AI_CHEF_EXAMPLES.ts    # Prompt templates
│   ├── App.tsx                    # Main container & logic
│   ├── App.css                    # Netflix-style design system
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global styles
├── api/                           # Backend folder (future extension)
├── vite.config.ts                 # Build configuration
├── tsconfig.json                  # TypeScript strict mode
└── package.json                   # Dependencies & scripts
```

### Component Responsibilities

#### `App.tsx` (Main Application Logic)
- Search state management and validation
- API request handling with error boundaries
- Recipe data transformation and normalization
- Carousel selection state management
- ChefChat initialization with selected recipe context

#### `RecipeCarousel.tsx` (Embla-Powered Carousel)
- Responsive grid layout (4-3-2-1 columns)
- Auto-play functionality with pause on interaction
- Navigation buttons with accessibility labels
- Dot indicators with smooth transitions
- Hover state management for cards

#### `ChefChat.tsx` (AI Assistant Widget)
- Floating chat interface with toggle button
- Message threading with user/chef attribution
- Real-time streaming response handling
- Auto-scroll to latest message
- Context-aware prompting based on recipe

---

## 🎨 Design Specifications

### Color Palette
| Element | Color | Usage |
|---------|-------|-------|
| Primary Dark | `#141414` | Background |
| Secondary Dark | `#221f1f` | Cards/Sections |
| Accent Red | `#E50914` | Buttons, highlights |
| Text Primary | `#FFFFFF` | Headlines, body |
| Text Muted | `#999999` | Secondary text |
| Accent Gray | `#333333` | Borders, dividers |

### Typography System
- **Headlines**: 2-4em, weight 700-900, letter-spacing -1px
- **Body**: 0.95-1em, weight 400-500, line-height 1.5-1.6
- **Captions**: 0.85em, weight 500, color #999999

### Animation Tokens
- **Standard Transition**: 400ms cubic-bezier(0.4, 0, 0.2, 1)
- **Pulse Glow**: 2s ease-in-out infinite (for chat button)
- **Slide Up**: 400ms (for modals, floating elements)
- **Fade In**: 300ms (for messages)

### Responsive Breakpoints
```css
@media (max-width: 1200px) {  /* 3 columns */
@media (max-width: 768px) {   /* 2 columns, tablet */
@media (max-width: 480px) {   /* 1 column, mobile */
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher
- **Git**: For version control
- **Claude API Key**: For AI Chef functionality (optional for basic features)

### Installation (5 Minutes)

1. **Clone Repository**
   ```bash
   git clone https://github.com/MoSi162/Streetfood-for-Home.git
   cd Streetfood-for-Home/Streetfood-for-Home
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment** (Optional for AI features)
   ```bash
   # Create .env file
   echo "VITE_CLAUDE_API_KEY=your_key_here" > .env.local
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   Access at `http://localhost:5173/`

5. **Build for Production**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📖 Usage Guide

### Searching for Recipes
1. **Enter Search Term** in the search box
   - Examples: "Pizza", "Tacos", "Ramen", "Shawarma", "Kebab"
   - Supports partial matches and multiple ingredients

2. **Submit Query**
   - Press Enter or click the Search button
   - Results load in featured carousel (first 10 recipes)

3. **Browse Carousel**
   - Scroll using arrow buttons or swipe on mobile
   - Hover for recipe preview overlay
   - Click "View Recipe" to open AI Chat

### Using AI Chef Assistant
1. **Open Chat** by clicking the red chef button (bottom-right)
2. **Ask Questions** about:
   - Cooking techniques specific to the dish
   - Ingredient substitutions and alternatives
   - Flavor pairing recommendations
   - Difficulty level and time estimates
3. **Review Responses** with timestamp tracking
4. **Continue Conversation** with multi-turn context

---

## 🔌 API Reference

### TheMealDB Integration
**Endpoint**: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`

**Request Parameters**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| s | string | Yes | Search term (dish name) |

**Response Structure**
```json
{
  "meals": [
    {
      "idMeal": "52761",
      "strMeal": "Chicken Ijermi",
      "strMealThumb": "https://...",
      "strArea": "Nigerian",
      "strCategory": "Seafood",
      "strIngredient1": "Chicken",
      "strMeasure1": "1kg"
    }
  ]
}
```

### AI Chef Service (Claude API)
**Purpose**: Generate context-aware cooking guidance

**Integration Point**: `services/aiChefService.ts`

**Usage**
```typescript
for await (const chunk of streamChefTips(dishName, ingredients, cuisineType)) {
  // Handle streaming response
}
```

---

## 🛠️ Development Workflow

### Available Scripts
```bash
npm run dev       # Start dev server with HMR
npm run build     # Production bundle (minified)
npm run preview   # Preview production build locally
npm run lint      # ESLint code quality check
npm run type-check # TypeScript strict validation
```

### Code Quality Standards
- **TypeScript**: Strict mode enabled (`strict: true`)
- **ESLint**: Airbnb config extended
- **Formatting**: Prettier (80-char line length)
- **Testing**: Unit tests for components (future)

### Git Workflow
```bash
git checkout -b feature/your-feature
# Make changes
git add src/
git commit -m "feat: add new feature"
git push origin feature/your-feature
# Create Pull Request
```

---

## 📱 Responsive Design Details

### Desktop (1400px+)
- **Layout**: 4-column carousel, full-width search
- **Spacing**: 30px padding, 40px margins
- **Font Sizes**: 4em headers, 1em body
- **Chat Window**: 400x600px fixed position

### Tablet (768px - 1199px)
- **Layout**: 2-3 columns, stacked search form
- **Spacing**: 20px padding, 25px margins
- **Font Sizes**: 2.5em headers, 0.95em body
- **Chat Window**: 360x500px, right-aligned

### Mobile (< 768px)
- **Layout**: Full-width (1 column), touch-optimized
- **Navigation**: Carousel arrows hidden, swipe enabled
- **Chat**: Floating button, 100vw-40px width
- **Search**: Single column form layout

---

## 🔐 Security & Privacy

- **No Authentication Required**: Uses public APIs only
- **No User Data Storage**: All data processed client-side
- **API Key Protection**: Environment variables for sensitive data
- **HTTPS Ready**: Vite supports secure deployments
- **CORS Handling**: Proper origin validation

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: "Failed to fetch recipes"
- **Solution**: Check internet connection, verify TheMealDB API status
- **Alternative**: Try different search terms

**Issue**: AI Chat not responding
- **Solution**: Verify `VITE_CLAUDE_API_KEY` is set correctly
- **Fallback**: Chat displays helpful error message

**Issue**: Carousel not scrolling smoothly
- **Solution**: Check browser hardware acceleration is enabled
- **Debug**: Open DevTools, check for JS errors in console

---

## 📊 Performance Metrics

### Target Metrics
- **Time to Interactive**: < 2 seconds
- **First Contentful Paint**: < 1 second
- **Lighthouse Score**: 90+ (Performance)
- **Bundle Size**: < 200KB gzipped

### Optimization Techniques
- Code splitting via Vite
- Image lazy loading on carousel
- CSS custom properties for theme switching
- Async/await for API calls

---

## 🔮 Future Enhancements

### Phase 2 Features
- [ ] User authentication and saved favorites
- [ ] Advanced filtering (dietary restrictions, prep time)
- [ ] Recipe rating and reviews system
- [ ] Video cooking demonstrations integration
- [ ] Ingredient-based shopping list generator

### Phase 3 Features
- [ ] Backend API for user data persistence
- [ ] Machine learning recipe recommendations
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) capabilities
- [ ] Mobile app version (React Native)

---

## 📄 License

This project is licensed under the **MIT License** - see LICENSE file for details.

---

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes with clear commit messages
4. Submit a pull request with description

### Code Style Guidelines
- Follow ESLint rules automatically
- Use TypeScript for all components
- Add comments for complex logic
- Test responsive behavior on multiple devices

---

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs](https://github.com/MoSi162/Streetfood-for-Home/issues)
- **Email**: support@streetfoodforhome.com
- **Documentation**: See [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)

---

## 🎯 Project Goals

1. **User Experience Excellence**: Deliver a premium interface that rivals streaming platforms
2. **Accessibility First**: WCAG 2.1 AA compliance with keyboard navigation
3. **Performance**: Sub-2-second load times on 4G networks
4. **Scalability**: Support 100K+ concurrent users with CDN
5. **Extensibility**: Modular architecture for easy feature additions

---

## 📈 Success Metrics

- 10K+ monthly active users
- 95%+ positive user reviews
- 50K+ recipes discoverable
- <100ms average search response time
- 99.9% platform uptime

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅
