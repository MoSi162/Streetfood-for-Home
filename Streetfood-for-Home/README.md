# 🚚 Streetfood for Home

A modern web application that lets you search for street food recipes from around the world and visualizes each dish with a colorful SVG food truck illustration.

## Features

✨ **Key Features:**
- 🔍 **Smart Search**: Search by dish name, ingredients, or cuisine type
- 🎨 **Dynamic Food Trucks**: Each recipe gets a unique colorful food truck SVG visualization
- 🌍 **Global Recipes**: Access thousands of dishes from around the world
- 📱 **Responsive Design**: Beautiful UI that works on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with Vite for instant hot module reloading
- 🎯 **Zero Configuration API**: Uses free TheMealDB API with no key required

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **API**: TheMealDB (Free, no authentication needed)
- **Styling**: Modern CSS with gradients and animations
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MoSi162/Streetfood-for-Home.git
   cd Streetfood-for-Home
   ```

2. **Navigate to project folder**
   ```bash
   cd Streetfood-for-Home
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Create an optimized build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How to Use

1. **Enter Search Term**: Type a dish name, ingredient, or cuisine in the search box
   - Examples: "Pizza", "Tacos", "Ramen", "Shawarma", "Burger", "Pasta"

2. **Click Search**: Press the search button or hit Enter

3. **View Results**: Browse the results with:
   - 🚚 Unique food truck SVG for each recipe
   - 📸 Actual dish image
   - 📝 Recipe name

## Project Structure

```
Streetfood-for-Home/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx       # Search input component
│   │   ├── RecipeResults.tsx   # Results grid container
│   │   └── FoodTruck.tsx       # SVG food truck visualization
│   ├── App.tsx                 # Main app component with API logic
│   ├── App.css                 # Application styling
│   ├── index.css               # Global styles
│   └── main.tsx                # React entry point
├── api/                        # Backend folder (for future extensions)
├── package.json                # Dependencies
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## API Integration

The app uses the **TheMealDB API** - a free, open API for meal data:

- **Endpoint**: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
- **No Authentication**: No API key required
- **Response**: Meal data including name, image, cuisine type, and more
- **Rate Limits**: Generous free tier for development and personal use

## Component Details

### SearchBar
- Input field for user queries
- Connected to parent App component state
- Placeholder text guides users

### FoodTruck
- SVG-based visualization
- Generates unique color schemes based on recipe ID
- Includes truck body, cabin, wheels, service window, and decorative elements
- Responsive and smooth animations on hover

### RecipeResults
- Grid layout that adapts to screen size
- Displays up to 8 recipes per search
- Shows recipe card with truck illustration, name, and image

## Customization

### Change Food Truck Colors

Edit the `colors` array in `src/components/FoodTruck.tsx`:

```typescript
const colors = [
  { main: '#FF6B6B', accent: '#FFE66D' },
  { main: '#4ECDC4', accent: '#FF6B9D' },
  // Add more color schemes...
]
```

### Add More Features

- **Detailed Recipe View**: Click a recipe to see full ingredients and instructions
- **Favorites**: Save favorite recipes using localStorage
- **Filter by Cuisine**: Add filters for specific cuisines
- **Recipe Details API**: Fetch full ingredient lists from TheMealDB

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel auto-detects the Vite config and deploys

### Deploy to Netlify

1. Build the project: `npm run build`
2. Connect your GitHub repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Any Static Host

```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

## Environment Variables

Currently, the app requires no environment variables since TheMealDB is a public API.

If you want to add protected APIs in the future:

1. Create `.env.local`:
   ```
   VITE_API_KEY=your_api_key_here
   ```

2. Access in code:
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY
   ```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

🔮 **Planned Features:**
- [ ] Advanced recipe details with ingredients and instructions
- [ ] User authentication and saved favorites
- [ ] Recipe rating and comments system
- [ ] Ingredient-based filtering
- [ ] Meal plan creator
- [ ] Nutrition information display
- [ ] Share recipes on social media
- [ ] Dark mode toggle (partially implemented)
- [ ] Multi-language support
- [ ] Video recipe integration

## Troubleshooting

### "No recipes found" Error
- Check your internet connection
- Try a different search term
- The TheMealDB API might be temporarily unavailable

### Port Already in Use
```bash
# Change the port in vite.config.ts or run:
npm run dev -- --port 3000
```

### Build Fails
```bash
# Clear node_modules and reinstall:
rm -rf node_modules package-lock.json
npm install
npm run build
```

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues, please open an issue on the GitHub repository.

---

**Happy Cooking! 🍜👨‍🍳**

Made with ❤️ by MoSi162
