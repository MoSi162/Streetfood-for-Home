# AI Chef Integration Guide

## 🎯 Overview

This project now includes an **AI Chef Agent** powered by Groq's free API. The AI chef acts as a Michelin-star expert who provides personalized tips and recommendations for any recipe you search.

## 🚀 Features

- 👨‍🍳 Michelin-star chef expertise with every recipe
- 💡 3-4 expert tips tailored to the specific dish
- 🥘 Key ingredient recommendations
- 🍷 Wine/beverage pairing suggestions
- ⏱️ Difficulty level assessment
- ✨ Beautiful, responsive UI
- 🔄 Fallback tips if API is unavailable

## 🔧 Setup (2 minutes)

### Step 1: Get a Free Groq API Key

1. Visit [Groq Console](https://console.groq.com/keys)
2. Sign up for a free account (email only, no credit card needed)
3. Copy your API key

### Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder:
   ```env
   VITE_GROQ_API_KEY=your_actual_groq_api_key_here
   ```

### Step 3: Run the App

```bash
npm install
npm run dev
```

## 🤖 How It Works

1. When you search for a recipe (e.g., "Pasta Carbonara")
2. The recipe details load from TheMealDB API
3. The AI Chef component requests tips from Groq API
4. Chef tips appear with:
   - Expert cooking techniques
   - Ingredient recommendations
   - Wine/drink pairing
   - Difficulty rating

## 📝 Example Chef Tips

**For Pasta Carbonara:**
- "Reserve pasta water before draining - starchy water is liquid gold for finishing sauces"
- "Cook pasta until just al dente; residual heat will continue cooking"
- "Finish pasta in the pan with sauce and a knob of butter for silky emulsification"
- "Grated fresh cheese goes on at the table, never cooked directly with pasta"

**Pairing:** Italian red wine like Chianti or a crisp Vermentino
**Difficulty:** Medium

## 🆓 Why Groq is Perfect

- ✅ **Completely Free** - No credit card required
- ✅ **Fast** - Mixtral 8x7B model is quick
- ✅ **Reliable** - Enterprise-grade infrastructure
- ✅ **API Key-based** - Easy to use
- ✅ **No Rate Limits** - Generous free tier

## 🔄 Fallback Behavior

If the API key is not configured or the API is unavailable, the app will use **intelligent fallback tips** based on dish type:
- Special tips for pasta, fish, beef, chicken
- General Michelin-level cooking advice
- The app continues to work perfectly without the API

## 🎨 Chef Tips Display

The chef tips appear below the recipe instructions in a beautiful card with:
- Chef avatar emoji 👨‍🍳
- Organized sections for different tip types
- Color-coded ingredient tags
- Responsive design for mobile
- Dark mode support

## 🔐 Security Notes

- API key is stored in `.env.local` (never committed to git)
- Groq API is used directly from the browser
- No backend server needed for API calls
- .gitignore already prevents .env.local from being tracked

## 📦 Alternative AI APIs

If you prefer other free APIs:

### OpenRouter
- API: https://openrouter.ai
- Supports GPT-4, Claude, etc.
- Free tier available

### Hugging Face
- API: https://huggingface.co/settings/tokens
- Good for open-source models

### OpenAI (Experimental)
- Limited free credits for new accounts
- More features than Groq

## 🐛 Troubleshooting

**Q: I'm not seeing chef tips**
- Check if `.env.local` is created and has the API key
- Open browser DevTools → Console to see error messages
- The app should show fallback tips instead

**Q: "Authorization failed" error**
- Verify the API key is correct
- Make sure you copied it completely
- Check if your Groq account is still active

**Q: Tips are slow to load**
- Groq is usually fast, but can be slow at peak times
- Fallback tips appear immediately
- Tips load in the background

## 📚 Code Structure

- `src/services/aiChefService.ts` - AI service with Groq integration
- `src/components/ChefTips.tsx` - Chef tips UI component
- `.env.example` - Environment variable template

## 🎓 Customization

You can modify the chef's personality in `aiChefService.ts`:

```typescript
role: 'system',
content: `You are a Michelin-star chef...`  // ← Modify here
```

Change the prompt to make the chef:
- More casual or formal
- Focus on specific cuisines
- Give nutrition information
- Suggest meal combinations

## 📞 Support

For issues with:
- **Groq API**: https://console.groq.com/docs
- **This app**: Check the main README.md

---

**Enjoy your Michelin-level cooking tips!** 🍽️👨‍🍳
