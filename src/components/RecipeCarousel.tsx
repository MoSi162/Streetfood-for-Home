import React, { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface Recipe {
  id: number
  title: string
  image: string
  cuisines?: string[]
  category?: string
}

interface RecipeCarouselProps {
  recipes: Recipe[]
  onRecipeClick: (recipe: Recipe) => void
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({ recipes, onRecipeClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = () => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  if (recipes.length === 0) return null

  return (
    <div className="recipe-carousel-wrapper">
      <div className="carousel-container" ref={emblaRef}>
        <div className="carousel-track">
          {recipes.map((recipe, index) => (
            <div key={recipe.id} className="carousel-slide">
              <div
                className={`carousel-card ${index === selectedIndex ? 'active' : ''}`}
                onClick={() => onRecipeClick(recipe)}
              >
                <div className="carousel-image-container">
                  <img src={recipe.image} alt={recipe.title} className="carousel-image" />
                  <div className="carousel-overlay">
                    <button className="carousel-play-btn">▶ View Recipe</button>
                  </div>
                </div>
                <div className="carousel-info">
                  <h3>{recipe.title}</h3>
                  {recipe.cuisines && recipe.cuisines.length > 0 && (
                    <p className="carousel-cuisine">{recipe.cuisines[0]}</p>
                  )}
                  {recipe.category && <p className="carousel-category">{recipe.category}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-prev" onClick={scrollPrev} aria-label="Previous recipe">
        ❮
      </button>
      <button className="carousel-next" onClick={scrollNext} aria-label="Next recipe">
        ❯
      </button>

      <div className="carousel-dots">
        {recipes.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === selectedIndex ? 'active' : ''}`}
            onClick={() => {
              if (emblaApi) {
                emblaApi.scrollTo(index)
              }
            }}
            aria-label={`Go to recipe ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default RecipeCarousel
