import { useState } from 'react'
import SearchBar from './components/Searchbar'
import RecipeResults from './components/RecipeResults'
import './App.css'

interface Recipe {
  id: number
  title: string
  image: string
  ingredients?: string[]
  cuisines?: string[]
}

function App() {
  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚚 Streetfood for Home</h1>
        <p>Find delicious street food recipes from around the world</p>
      </header>

      <div className="search-section">
        <form onSubmit={handleSearchSubmit}>
          <SearchBar 
            search={search} 
            setSearch={setSearch}
            onSubmit={handleSearchSubmit}
          />
          <button type="submit" className="search-btn">
            🔍 Search
          </button>
        </form>
      </div>

      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loading">Loading recipes...</div>}
      
      {recipes.length > 0 && (
        <RecipeResults recipes={recipes} />
      )}
      
      {!loading && recipes.length === 0 && !error && (
        <div className="empty-state">
          <p>Search for ingredients, dishes, or cuisines to get started!</p>
          <p style={{ fontSize: '0.9em', marginTop: '10px', opacity: 0.7 }}>
            Try: "Pizza", "Tacos", "Ramen", "Shawarma", etc.
          </p>
        </div>
      )}
    </div>
  )
}

export default App
