/**
 * DEMO: AI Chef Tips Examples
 * 
 * These are examples of what the AI Chef will provide for different recipes.
 * This demonstrates the agentic AI behavior and expert-level tips.
 */

// Example 1: PASTA CARBONARA
const carbonaraTips = {
  dishName: "Pasta Carbonara",
  cuisine: "Italian",
  tips: [
    "🔥 Reserve pasta water before draining - starchy water is liquid gold for finishing sauces",
    "⏱️ Cook pasta until just al dente; residual heat will continue cooking",
    "🧈 Finish pasta in the pan with sauce and a knob of butter for silky emulsification",
    "🌿 Grated fresh cheese goes on at the table, never cooked directly with pasta",
  ],
  ingredients: ["Quality pasta", "Fresh eggs", "Guanciale", "Pecorino Romano", "Black pepper"],
  pairing: "Italian red wine like Chianti or a crisp Vermentino",
  difficulty: "Medium"
}

// Example 2: SUSHI ROLLS
const sushiTips = {
  dishName: "Sushi Rolls",
  cuisine: "Japanese",
  tips: [
    "🌡️ Rice temperature is crucial - cool to 75°C for perfect stickiness",
    "✨ Use sushi-grade fish only - texture and safety matter",
    "🔪 Wet your knife between each cut for clean, uniform pieces",
    "🌿 Properly seasoned rice (vinegar, sugar, salt) is the foundation of great sushi",
  ],
  ingredients: ["Sushi rice", "Rice vinegar", "Nori", "Fresh fish", "Wasabi"],
  pairing: "Sake or green tea",
  difficulty: "Hard"
}

// Example 3: BEEF STEAK
const steakTips = {
  dishName: "Beef Steak",
  cuisine: "American",
  tips: [
    "🌡️ Let meat come to room temperature and pat dry for better searing",
    "🔥 Get your pan smoking hot before searing - don't move the meat around",
    "🧈 Baste with butter and aromatics during cooking for incredible flavor",
    "⏸️ Always rest the meat for 5-10 minutes to redistribute juices",
  ],
  ingredients: ["Prime beef cut", "Sea salt", "Black pepper", "Fresh thyme", "Butter"],
  pairing: "Bold red wine like Bordeaux or full-bodied Cabernet Sauvignon",
  difficulty: "Medium"
}

// Example 4: FISH TACOS
const tacosTips = {
  dishName: "Fish Tacos",
  cuisine: "Mexican",
  tips: [
    "🐟 Use firm white fish like mahi-mahi or halibut",
    "🔥 High-heat cooking creates crispy exterior while keeping fish moist inside",
    "🌿 Fresh cilantro and lime at the end brightens the entire dish",
    "🥒 Cabbage slaw provides crucial texture contrast and freshness",
  ],
  ingredients: ["White fish", "Corn tortillas", "Cabbage", "Lime", "Fresh cilantro"],
  pairing: "Mexican beer like Corona or a crisp Sauvignon Blanc",
  difficulty: "Easy"
}

// Example 5: COQ AU VIN
const coqAuVinTips = {
  dishName: "Coq au Vin",
  cuisine: "French",
  tips: [
    "🍷 Use a decent red wine - it's the star ingredient, not just a cooking medium",
    "🔥 Brown the chicken properly first - Maillard reaction creates depth",
    "🧈 Low, slow cooking (2-3 hours) allows flavors to meld and intensify",
    "✨ Pearl onions and mushrooms should be caramelized separately for texture",
  ],
  ingredients: ["Chicken", "Red wine", "Pearl onions", "Mushrooms", "Bacon", "Garlic"],
  pairing: "Red wine (Burgundy or Côtes du Rhône)",
  difficulty: "Hard"
}

// Example 6: THAI PAD THAI
const padThaiTips = {
  dishName: "Pad Thai",
  cuisine: "Thai",
  tips: [
    "🔥 High heat is essential - pad thai is a quick stir-fry, not a simmer",
    "⏱️ Have all ingredients prepped before cooking - everything happens in 3-4 minutes",
    "🌿 Fresh herbs (basil, cilantro) added at the very end preserve their aroma",
    "🍋 Balance of sweet, sour, salty, spicy is key - taste and adjust seasoning constantly",
  ],
  ingredients: ["Rice noodles", "Shrimp", "Tamarind", "Fish sauce", "Peanuts"],
  pairing: "Thai beer or a crisp Riesling",
  difficulty: "Medium"
}

// ============================================
// HOW THE AI CHEF WORKS
// ============================================

/*
AGENTIC AI BEHAVIOR:
The AI Chef demonstrates true agentic behavior by:

1. SPECIALIZATION
   - Only talks about food and cooking
   - Stays in character as Michelin chef
   - Provides expert-level advice

2. GOAL-ORIENTED
   - Goal: Help user cook like a Michelin chef
   - Provides tailored advice for specific dishes
   - Considers cuisine type and ingredients

3. CONTEXT-AWARE
   - Understands the specific dish being made
   - Knows ingredient interactions
   - Provides culture-appropriate techniques

4. MULTI-DIMENSIONAL FEEDBACK
   - Tips (techniques)
   - Ingredient recommendations
   - Pairing suggestions
   - Difficulty assessment

5. FALLBACK INTELLIGENCE
   - Even without API, provides quality tips
   - Categorizes dishes by type
   - Applies proven Michelin techniques

PROMPT ENGINEERING:
The system prompt explicitly constrains the AI:
- "You are a Michelin-star chef with 30 years of experience"
- "You only discuss food and cooking"
- "Give practical, actionable tips"
- "Always respond in JSON format"

This creates a focused, reliable agent that consistently provides value.
*/

// ============================================
// INTEGRATION POINTS
// ============================================

/*
WHERE CHEF TIPS APPEAR:

1. RecipeDetail.tsx
   └─ When user clicks "View Details" on a recipe
   └─ ChefTips component is rendered
   └─ Fetches tips based on:
      - Dish name
      - Ingredients list
      - Cuisine type

2. User Flow:
   Search → Results Grid → Click Recipe → See Details + Chef Tips

3. Data Flow:
   Recipe Search
   ├─ TheMealDB API (recipe data)
   └─ Groq API (chef tips)
      ├─ Prompt: Dish name + ingredients + cuisine
      ├─ AI: Michelin expert (system role)
      └─ Response: Tips, ingredients, pairing, difficulty

4. Fallback Flow:
   If no API key or API down → Use intelligent fallback tips
   - Fallbacks are categorized by dish type
   - Still provide value to user
   - App never breaks
*/

// ============================================
// CUSTOMIZATION IDEAS
// ============================================

/*
You can modify the AI Chef behavior by changing:

1. System Prompt
   - Make it more casual or formal
   - Add nutrition focus
   - Focus on speed/quick cooking
   - Add diet restrictions guidance

2. Response Format
   - Add calorie estimates
   - Add shopping list
   - Add prep time
   - Add cost estimates

3. Integration Points
   - Add tips to search results preview
   - Create "Chef's Recommendation" feed
   - Add ingredient substitution suggestions
   - Create shopping list integration

4. Advanced Features
   - User preferences learning
   - Dietary restriction awareness
   - Equipment-based tips
   - Technique videos linking
*/

export {
  carbonaraTips,
  sushiTips,
  steakTips,
  tacosTips,
  coqAuVinTips,
  padThaiTips
}
