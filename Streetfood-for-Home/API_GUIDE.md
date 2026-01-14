# 🔌 API Integration Guide

## TheMealDB API

### Overview
**Streetfood for Home** uses the free **TheMealDB API** to fetch authentic meal recipes from a comprehensive global database.

- **Base URL**: `https://www.themealdb.com/api/json/v1/1/`
- **Authentication**: None required (public API)
- **Rate Limits**: No rate limits for reasonable use
- **Status**: 99.9% uptime
- **Data Quality**: High

---

## Endpoints Used

### 1. Search by Meal Name
```
GET /search.php?s={meal_name}
```

**Example:**
```javascript
const response = await fetch(
  'https://www.themealdb.com/api/json/v1/1/search.php?s=pizza'
);
const data = await response.json();
```

**Response:**
```json
{
  "meals": [
    {
      "idMeal": "52771",
      "strMeal": "Meat Lover's Pizza",
      "strDrinkAlternate": null,
      "strCategory": "Seafood",
      "strArea": "Italian",
      "strInstructions": "Cooking instructions here...",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/...",
      "strTags": "Lockdown,Pizza",
      "strYoutube": "https://www.youtube.com/watch?v=...",
      "strIngredient1": "Flour",
      "strIngredient2": "Water",
      ...
      "strMeasure1": "3 cups",
      "strMeasure2": "1 cup",
      ...
    }
  ]
}
```

### 2. Get Meal Details by ID
```
GET /lookup.php?i={meal_id}
```

**Example:**
```javascript
const response = await fetch(
  'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771'
);
const data = await response.json();
```

**Use Case:** Get full ingredient list and detailed instructions

---

## Response Structure

### Meal Object Properties

| Property | Type | Description |
|----------|------|-------------|
| `idMeal` | String | Unique meal ID |
| `strMeal` | String | Meal name |
| `strCategory` | String | Meal category (e.g., "Seafood", "Vegan") |
| `strArea` | String | Cuisine area (e.g., "Italian", "Chinese") |
| `strInstructions` | String | Cooking instructions |
| `strMealThumb` | String | Meal image URL |
| `strTags` | String | Comma-separated tags |
| `strYoutube` | String | YouTube video link |
| `strIngredient1-20` | String | Ingredient names |
| `strMeasure1-20` | String | Ingredient measurements |

---

## Implementation in Code

### Search Function
```typescript
const handleSearch = async (query: string) => {
  setLoading(true);
  setError('');
  
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    
    const data = await response.json();
    
    // Transform API response to our format
    const transformedRecipes = (data.meals || []).map((meal: any) => ({
      id: meal.idMeal,
      title: meal.strMeal,
      image: meal.strMealThumb,
      cuisines: [meal.strArea],
      category: meal.strCategory,
    }));
    
    setRecipes(transformedRecipes);
  } catch (err) {
    setError('Error fetching recipes. Please try again.');
    console.error(err);
  } finally {
    setLoading(false);
  }
};
```

### Fetch Meal Details
```typescript
useEffect(() => {
  fetchMealDetails();
}, [mealId]);

const fetchMealDetails = async () => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();

    if (data.meals && data.meals[0]) {
      const m = data.meals[0];

      // Extract ingredients
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = m[`strIngredient${i}`];
        const measure = m[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push({ name: ingredient, measure });
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
      });
    }
  } catch (error) {
    console.error('Error fetching meal details:', error);
  } finally {
    setLoading(false);
  }
};
```

---

## Data Categories

### Categories Available
- Seafood
- Breakfast
- Vegetarian
- Pasta
- Desserts
- Light Meal
- Vegan
- Starter
- Snack
- Side

### Areas/Cuisines
- Italian
- Chinese
- Japanese
- Thai
- Mexican
- Indian
- American
- French
- British
- Spanish
- Turkish
- Greek
- Vietnamese
- Korean
- German
- Dutch
- Polish
- Russian
- and many more...

---

## API Limitations & Notes

### Rate Limits
- **Search Limit**: No official limit
- **Practical Limit**: ~1-2 requests per second recommended
- **Monthly Limit**: None for reasonable use

### Response Limits
- **Max Results**: Usually returns multiple meals per search
- **Image Quality**: Medium to high resolution

### Data Limitations
- **Some meals** may not have complete ingredient lists
- **YouTube links** available for most popular recipes
- **Occasional null values** in less common fields

---

## Error Handling

### Common Errors

1. **No Results**
```javascript
if (!data.meals || data.meals.length === 0) {
  setError('No recipes found. Try a different search!');
}
```

2. **Network Error**
```javascript
catch (err) {
  setError('Failed to connect. Check your internet.');
}
```

3. **API Down**
```javascript
if (!response.ok) {
  throw new Error(`API Error: ${response.status}`);
}
```

---

## Alternatives & Comparisons

### Why TheMealDB?

| API | Pros | Cons |
|-----|------|------|
| **TheMealDB** | Free, no auth, good data | No nutrition info |
| **Spoonacular** | Detailed, nutrition data | Requires API key, limited free tier |
| **Edamam** | Comprehensive, filters | Limited free tier, complex |
| **RecipeAPI** | Simple, fast | Limited recipes |

**TheMealDB** is perfect for this project because:
- ✅ Completely free
- ✅ No API key required
- ✅ Thousands of recipes
- ✅ Good data quality
- ✅ Reliable service
- ✅ Perfect for learning

---

## Performance Tips

### Optimization Strategies

1. **Cache Results**
```javascript
const [cache, setCache] = useState({});

if (cache[query]) {
  setRecipes(cache[query]);
  return;
}
```

2. **Debounce Searches**
```javascript
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
```

3. **Lazy Load Images**
```html
<img src={url} loading="lazy" alt={title} />
```

---

## Rate Limiting Example

```javascript
let lastRequestTime = 0;
const MIN_INTERVAL = 1000; // 1 second minimum between requests

const throttledSearch = async (query) => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < MIN_INTERVAL) {
    await new Promise(resolve => 
      setTimeout(resolve, MIN_INTERVAL - timeSinceLastRequest)
    );
  }
  
  lastRequestTime = Date.now();
  return handleSearch(query);
};
```

---

## Future API Enhancements

Consider adding these APIs:

1. **Nutrition API** - Get nutritional information
2. **Weather API** - Suggest recipes based on weather
3. **Ingredient API** - Auto-complete ingredients
4. **Rating API** - User ratings and reviews
5. **Image API** - Higher quality images

---

## Testing the API

### Using cURL
```bash
# Search for pizza recipes
curl "https://www.themealdb.com/api/json/v1/1/search.php?s=pizza"

# Get specific meal details
curl "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771"
```

### Using Postman
1. Create new GET request
2. Enter endpoint URL
3. Send request
4. View formatted JSON response

### Using Browser Console
```javascript
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pizza')
  .then(r => r.json())
  .then(d => console.log(d.meals));
```

---

## Resources

- **Official API Docs**: https://www.themealdb.com/api.php
- **API GitHub**: https://github.com/themealdb/themealdb.com
- **Database**: https://www.themealdb.com/

---

## Support

For API issues:
1. Check status at https://www.themealdb.com/
2. Report issues on GitHub
3. Try alternative search terms
4. Clear cache and retry

---

**Happy API exploring! 🍜**
