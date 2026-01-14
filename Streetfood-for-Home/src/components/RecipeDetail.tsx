import React, { useState, useEffect } from 'react'

interface RecipeDetailProps {
  mealId: string
  onClose: () => void
}

interface MealDetail {
  strMeal: string
  strMealThumb: string
  strArea: string
  strCategory: string
  strInstructions: string
  strYoutube?: string
  ingredients: { name: string; measure: string }[]
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ mealId, onClose }) => {
  const [meal, setMeal] = useState<MealDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMealDetails()
  }, [mealId])

  const fetchMealDetails = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      )
      const data = await response.json()

      if (data.meals && data.meals[0]) {
        const m = data.meals[0]

        // Extract ingredients
        const ingredients = []
        for (let i = 1; i <= 20; i++) {
          const ingredient = m[`strIngredient${i}`]
          const measure = m[`strMeasure${i}`]
          if (ingredient) {
            ingredients.push({ name: ingredient, measure })
          }
        }

        setMeal({
          strMeal: m.strMeal,
          strMealThumb: m.strMealThumb,
          strArea: m.strArea,
          strCategory: m.strCategory,
          strInstructions: m.strInstructions,
          strYoutube: m.strYoutube,
          ingredients,
        })
      }
    } catch (error) {
      console.error('Error fetching meal details:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {loading ? (
          <div className="modal-loading">Loading recipe details...</div>
        ) : meal ? (
          <>
            <div className="modal-header">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="modal-title-section">
                <h2>{meal.strMeal}</h2>
                <div className="modal-tags">
                  <span className="tag">{meal.strCategory}</span>
                  <span className="tag">{meal.strArea}</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Ingredients</h3>
                <ul className="ingredients-list">
                  {meal.ingredients.map((ing, idx) => (
                    <li key={idx}>
                      <span className="ingredient-name">{ing.name}</span>
                      <span className="ingredient-measure">{ing.measure}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Instructions</h3>
                <p className="instructions-text">{meal.strInstructions}</p>
              </div>

              {meal.strYoutube && (
                <div className="modal-section">
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-link"
                  >
                    🎥 Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>Could not load recipe details</p>
        )}
      </div>
    </div>
  )
}

export default RecipeDetail