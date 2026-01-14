import React, { useState } from 'react'
import FoodTruck from './FoodTruck'
import RecipeDetail from './RecipeDetail'

interface Recipe {
  id: number
  title: string
  image: string
}

type Props = {
  recipes: Recipe[]
}

const RecipeResults: React.FC<Props> = ({ recipes }) => {
  const [selectedMealId, setSelectedMealId] = useState<string | null>(null)

  return (
    <div className="results-container">
      <h2>Your Street Food Options 🍜</h2>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => setSelectedMealId(recipe.id.toString())}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedMealId(recipe.id.toString())
              }
            }}
          >
            <FoodTruck recipe={recipe} />
            <h3>{recipe.title}</h3>
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            )}
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>

      {selectedMealId && (
        <RecipeDetail
          mealId={selectedMealId}
          onClose={() => setSelectedMealId(null)}
        />
      )}
    </div>
  )
}

export default RecipeResults