import { useState } from 'react'
import SearchBar from './components/Searchbar'
import RecipeCarousel from './components/RecipeCarousel'
import ChefChat from './components/ChefChat'
import './App.css'

interface Recipe {
  id: number
  title: string
  image: string
  ingredients?: string[]
  cuisines?: string[]
  category?: string
}

function App() {
  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [chatKey, setChatKey] = useState(0)

  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    setLoading(true)
    setError('')
    
    try {
      // Using free TheMealDB API - no API key required!
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch recipes')
      }
      
      const data = await response.json()
      
      // Transform the API response to our format
      const transformedRecipes = (data.meals || []).map((meal: any) => ({
        id: meal.idMeal,
        title: meal.strMeal,
        image: meal.strMealThumb,
        cuisines: [meal.strArea],
        category: meal.strCategory,
      }))
      
      setRecipes(transformedRecipes)
      
      if (transformedRecipes.length === 0) {
        setError('No recipes found. Try a different search!')
      }
    } catch (err) {
      setError('Error fetching recipes. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(search)
  }

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe)
    setChatKey(prev => prev + 1) // Force ChefChat remount for new recipe
  }

  return (
    <div className="app-container">
      <header className="app-header netflix-header">
        <div className="header-content">
          <h1>🚚 Streetfood for Home</h1>
          <p>Discover global street food recipes</p>
        </div>
      </header>

      <div className="search-section netflix-search">
        <form onSubmit={handleSearchSubmit}>
          <SearchBar 
            search={search} 
            setSearch={setSearch}
            onSubmit={handleSearchSubmit}
          />
          <button type="submit" className="search-btn netflix-btn">
            🔍 Search
          </button>
        </form>
      </div>

      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loading">
        <div className="spinner"></div>
        <p>Loading recipes...</p>
      </div>}
      
      {recipes.length > 0 && (
        <section className="carousel-section">
          <h2 className="section-title">🔥 Featured Recipes</h2>
          <RecipeCarousel recipes={recipes.slice(0, 10)} onRecipeClick={handleRecipeSelect} />
        </section>
      )}
      
      {selectedRecipe && (
        <ChefChat 
          key={chatKey}
          dishName={selectedRecipe.title} 
          ingredients={selectedRecipe.ingredients}
          cuisineType={selectedRecipe.category}
        />
      )}
      
      {!loading && recipes.length === 0 && !error && (
        <div className="empty-state">
          <div className="empty-icon">🍜</div>
          <p>Search for ingredients, dishes, or cuisines to get started!</p>
          <p className="empty-hint">Try: "Pizza", "Tacos", "Ramen", "Shawarma", etc.</p>
        </div>
      )}
    </div>
  )
}

export default App

