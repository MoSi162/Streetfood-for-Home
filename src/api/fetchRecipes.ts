export async function fetchRecipes(query: string) {
  const res = await fetch(`https://api.api-ninjas.com/v2/recipe?query=${encodeURIComponent(query)}`, {
    headers: { "X-Api-Key": "PXtUxdPQg7WRJCgJUu//Qg==fou3SSQEfRQ9HPW8Y" }
  });
  if (!res.ok) throw new Error("Failed to fetch recipes");
  
  const data = await res.json();
  return data.map((r: any, idx: number) => ({
    ...r,
    imageUrl: getFoodtruckImage(r.title, idx)
  }));
}

function getFoodtruckImage(title: string, idx: number) {
  // Example: Add your AI/image logic here by keyword/style
  const images: Record<string, string> = {
    tacos: "https://img.freepik.com/premium-ai-image/taco-food-truck-maya-style-mexico.jpg",
    curry: "https://img.freepik.com/premium-ai-image/indian-curry-foodtruck-delhi.jpg",
    bratwurst: "https://img.freepik.com/premium-ai-image/german-bratwurst-foodtruck-berlin.jpg"
    // Add URLs or generative logic for more types!
  };
  const key = title.toLowerCase();
  return images[key] || `https://picsum.photos/seed/${title.split(' ')[0]}${idx}/500/300`; // fallback image
}
