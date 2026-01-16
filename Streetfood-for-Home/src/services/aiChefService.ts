/**
 * AI Chef Service
 * Uses Groq API (free tier) to generate Michelin-star chef tips for recipes
 * Groq API: https://console.groq.com/keys
 */

interface ChefTipsResponse {
  tips: string[]
  ingredients: string[]
  pairing: string
  difficulty: string
}

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || ''
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

/**
 * Get Michelin chef tips for a recipe
 */
export async function getChefTips(
  dishName: string,
  ingredients?: string[],
  cuisineType?: string
): Promise<ChefTipsResponse> {
  if (!GROQ_API_KEY) {
    console.warn('GROQ API Key not configured. Using fallback tips.')
    return getFallbackTips(dishName)
  }

  try {
    const prompt = buildChefPrompt(dishName, ingredients, cuisineType)

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content: `You are a Michelin-star chef with 30 years of experience. 
You are an expert in culinary arts, flavor combinations, and cooking techniques.
You only discuss food and cooking. You give practical, actionable tips for improving dishes.
Always respond in JSON format with: tips (array of 3-4 tips), ingredients (key ingredients list), 
pairing (wine/drink suggestion), difficulty (easy/medium/hard)`,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      console.error('Groq API error:', response.statusText)
      return getFallbackTips(dishName)
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content

    if (!content) {
      return getFallbackTips(dishName)
    }

    // Parse the JSON response from the chef
    const parsed = JSON.parse(content)
    return {
      tips: parsed.tips || [],
      ingredients: parsed.ingredients || [],
      pairing: parsed.pairing || 'Your choice of wine',
      difficulty: parsed.difficulty || 'Medium',
    }
  } catch (error) {
    console.error('Error fetching chef tips:', error)
    return getFallbackTips(dishName)
  }
}

function buildChefPrompt(
  dishName: string,
  ingredients?: string[],
  cuisineType?: string
): string {
  let prompt = `I am preparing "${dishName}"`

  if (cuisineType) {
    prompt += ` (${cuisineType} cuisine)`
  }

  if (ingredients && ingredients.length > 0) {
    prompt += `. The main ingredients are: ${ingredients.join(', ')}`
  }

  prompt += `. What are your top Michelin-level tips to make this dish exceptional? 
Also suggest a drink pairing and estimate the difficulty level.`

  return prompt
}

/**
 * Fallback tips in case API is not available
 */
function getFallbackTips(dishName: string): ChefTipsResponse {
  const generalTips: { [key: string]: ChefTipsResponse } = {
    default: {
      tips: [
        '🔥 Master the heat control - use high heat for quick cooking to lock in flavors and textures',
        '🧂 Season progressively throughout cooking, not just at the end - this builds layers of flavor',
        '🌿 Always use fresh herbs at the end - they add brightness and prevent flavor from becoming dull',
        '✨ Don\'t overcrowd the pan - respect your ingredients by giving them space to develop proper color and flavor',
      ],
      ingredients: ['Quality butter', 'Fresh herbs', 'Good sea salt', 'Fresh garlic', 'Quality olive oil'],
      pairing: 'A crisp white wine or light ale would complement this beautifully',
      difficulty: 'Medium',
    },
    pasta: {
      tips: [
        '💧 Reserve pasta water before draining - starchy water is liquid gold for finishing sauces',
        '⏱️ Cook pasta until just al dente; residual heat will continue cooking',
        '🧈 Finish pasta in the pan with sauce and a knob of butter for silky emulsification',
        '🌿 Grated fresh cheese goes on at the table, never cooked directly with pasta',
      ],
      ingredients: ['Quality pasta', 'Fresh tomatoes', 'Good olive oil', 'Garlic', 'Fresh basil'],
      pairing: 'Italian red wine like Chianti or a crisp Vermentino',
      difficulty: 'Medium',
    },
    fish: {
      tips: [
        '🌡️ Bring fish to room temperature before cooking for even doneness',
        '🍳 Cook skin-side down first on high heat to create crispy skin',
        '🧂 Season only just before cooking to prevent water loss',
        '🍋 A squeeze of fresh lemon at the end brightens and completes the dish',
      ],
      ingredients: ['Fresh white fish', 'Lemon', 'Quality butter', 'Fresh dill', 'Good olive oil'],
      pairing: 'Crisp white wine like Sauvignon Blanc or Albariño',
      difficulty: 'Medium',
    },
    beef: {
      tips: [
        '🌡️ Let meat come to room temperature and pat dry for better searing',
        '🔥 Get your pan smoking hot before searing - don\'t move the meat around',
        '🧈 Baste with butter and aromatics during cooking for incredible flavor',
        '⏸️ Always rest the meat for 5-10 minutes to redistribute juices',
      ],
      ingredients: ['Quality beef cut', 'Sea salt', 'Black pepper', 'Fresh thyme', 'Butter'],
      pairing: 'Bold red wine like Bordeaux or a full-bodied Cabernet Sauvignon',
      difficulty: 'Medium',
    },
    chicken: {
      tips: [
        '🌡️ Brine or salt chicken an hour before cooking for juicy results',
        '🔥 Sear skin until golden and crispy - never move it while searing',
        '🌡️ Use a meat thermometer - 165°F/74°C is perfect, not overcooked',
        '⏸️ Rest for 5 minutes minimum to keep meat moist',
      ],
      ingredients: ['Quality chicken', 'Fresh herbs', 'Good quality salt', 'Butter', 'Garlic'],
      pairing: 'Light red wine or full-bodied white wine like Chardonnay',
      difficulty: 'Easy',
    },
  }

  // Try to match the dish name to a category
  const lowerDishName = dishName.toLowerCase()
  for (const [key, tips] of Object.entries(generalTips)) {
    if (lowerDishName.includes(key) && key !== 'default') {
      return tips
    }
  }

  return generalTips.default
}

/**
 * Stream chef tips for real-time feedback
 */
export async function* streamChefTips(
  dishName: string,
  ingredients?: string[],
  cuisineType?: string
): AsyncGenerator<string> {
  if (!GROQ_API_KEY) {
    const tips = getFallbackTips(dishName)
    for (const tip of tips.tips) {
      yield tip
    }
    return
  }

  try {
    const prompt = buildChefPrompt(dishName, ingredients, cuisineType)

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content:
              'You are a passionate Michelin-star chef. Give 3-4 practical, specific tips for this dish. Be concise and actionable.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to stream chef tips')
    }

    const reader = response.body?.getReader()
    if (!reader) return

    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')

      for (let i = 0; i < lines.length - 1; i++) {
        const line = lines[i]
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6))
            const content = data.choices?.[0]?.delta?.content
            if (content) {
              yield content
            }
          } catch {
            // Skip invalid JSON lines
          }
        }
      }

      buffer = lines[lines.length - 1]
    }
  } catch (error) {
    console.error('Error streaming chef tips:', error)
    // Fallback to non-streaming
    const tips = getFallbackTips(dishName)
    for (const tip of tips.tips) {
      yield tip
    }
  }
}
