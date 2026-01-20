import type { Recipe } from "../types/recipe";

export function RecipeCard({ recipe, index }: { recipe: Recipe; index: number }) {
  return (
    <div className="card w-96 glass shadow-2xl border-base-200 m-8 overflow-hidden">
      <figure className="w-full h-48 overflow-hidden">
        <img src={recipe.imageUrl} alt={recipe.title + " truck"} className="object-cover w-full h-full" />
      </figure>
      <div className="card-body bg-base-100 bg-opacity-90 py-5">
        <div className="badge badge-primary badge-outline mb-3">#{index + 1} · Streetfood</div>
        <h2 className="card-title text-lg mb-2">{recipe.title}</h2>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Ingredients:</strong></p>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <div className="mt-2">
          <strong>Instructions:</strong>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}
