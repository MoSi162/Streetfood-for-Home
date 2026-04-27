import React from 'react'

interface Recipe {
  id: number
  title: string
  image: string
}

type Props = {
  recipe: Recipe
}

const FoodTruck: React.FC<Props> = ({ recipe }) => {
  // Generate a random food truck color scheme for variety
  const colors = [
    { main: '#FF6B6B', accent: '#FFE66D' },
    { main: '#4ECDC4', accent: '#FF6B9D' },
    { main: '#FFD93D', accent: '#FF6B35' },
    { main: '#95E1D3', accent: '#F38181' },
    { main: '#AA96DA', accent: '#FCBAD3' },
  ]
  
  const color = colors[recipe.id % colors.length]

  return (
    <div className="food-truck-container">
      <svg
        width="200"
        height="150"
        viewBox="0 0 200 150"
        className="food-truck-svg"
      >
        {/* Truck body */}
        <rect
          x="20"
          y="60"
          width="140"
          height="50"
          fill={color.main}
          stroke="#333"
          strokeWidth="2"
          rx="5"
        />

        {/* Truck cabin */}
        <rect
          x="20"
          y="40"
          width="40"
          height="30"
          fill={color.main}
          stroke="#333"
          strokeWidth="2"
        />

        {/* Window */}
        <rect
          x="26"
          y="46"
          width="28"
          height="14"
          fill="#87CEEB"
          stroke="#333"
          strokeWidth="1"
        />

        {/* Service window */}
        <rect
          x="80"
          y="65"
          width="50"
          height="30"
          fill={color.accent}
          stroke="#333"
          strokeWidth="2"
          rx="3"
        />

        {/* Service window frame */}
        <circle cx="95" cy="75" r="4" fill="#333" />
        <circle cx="110" cy="75" r="4" fill="#333" />
        <circle cx="120" cy="75" r="4" fill="#333" />

        {/* Wheels */}
        <circle cx="45" cy="115" r="8" fill="#333" stroke="#555" strokeWidth="2" />
        <circle cx="155" cy="115" r="8" fill="#333" stroke="#555" strokeWidth="2" />

        {/* Hubcaps */}
        <circle cx="45" cy="115" r="4" fill="#FFD700" />
        <circle cx="155" cy="115" r="4" fill="#FFD700" />

        {/* Bumper */}
        <rect x="15" y="108" width="170" height="3" fill="#333" />

        {/* Roof/awning detail */}
        <rect
          x="70"
          y="50"
          width="60"
          height="8"
          fill={color.accent}
          stroke="#333"
          strokeWidth="1"
          rx="2"
        />

        {/* Decorative flags */}
        <polygon
          points="75,50 78,45 75,48"
          fill="#FF69B4"
        />
        <polygon
          points="120,50 123,45 120,48"
          fill="#FF69B4"
        />
      </svg>
    </div>
  )
}

export default FoodTruck