import { useEffect, useState } from 'react'
import { getChefTips } from '../services/aiChefService'

interface ChefTipsProps {
  dishName: string
  ingredients?: string[]
  cuisineType?: string
}

interface ChefTipsData {
  tips: string[]
  ingredients: string[]
  pairing: string
  difficulty: string
}

const ChefTips: React.FC<ChefTipsProps> = ({ dishName, ingredients, cuisineType }) => {
  const [tips, setTips] = useState<ChefTipsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTips = async () => {
      setLoading(true)
      setError(null)

      try {
        const chefTips = await getChefTips(dishName, ingredients, cuisineType)
        setTips(chefTips)
      } catch (err) {
        setError('Failed to get chef tips')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTips()
  }, [dishName, ingredients, cuisineType])

  if (loading) {
    return (
      <div className="chef-tips-container loading">
        <div className="chef-avatar">👨‍🍳</div>
        <p>Chef is preparing tips for you...</p>
      </div>
    )
  }

  if (error || !tips) {
    return null
  }

  return (
    <div className="chef-tips-container">
      <div className="chef-header">
        <div className="chef-avatar">👨‍🍳</div>
        <h3>Michelin Chef Tips</h3>
      </div>

      <div className="chef-content">
        <div className="tips-section">
          <h4>💡 Expert Tips</h4>
          <ul className="tips-list">
            {tips.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {tips.ingredients.length > 0 && (
          <div className="ingredients-section">
            <h4>🥘 Essential Ingredients</h4>
            <div className="ingredient-tags">
              {tips.ingredients.map((ingredient, index) => (
                <span key={index} className="ingredient-tag">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="pairing-section">
          <h4>🍷 Chef's Recommendation</h4>
          <p>{tips.pairing}</p>
        </div>

        <div className="difficulty-section">
          <h4>⏱️ Difficulty Level</h4>
          <div className={`difficulty-badge ${tips.difficulty.toLowerCase()}`}>
            {tips.difficulty}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChefTips
