import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../services/recipeService";

export default function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecipe();
  }, []);

  const loadRecipe = async () => {
    try {
      const data = await getRecipe(id);
      setRecipe(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const imageUrl = (image) =>
    image
      ? `http://127.0.0.1:8000${image}`
      : "https://via.placeholder.com/700x400?text=Recipe";

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  if (!recipe) {
    return <h2 style={{ textAlign: "center" }}>Recipe not found.</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <img
        src={imageUrl(recipe.image)}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />

      <h1 style={{ marginTop: "25px" }}>{recipe.title}</h1>

      <p>{recipe.description}</p>

      <p>
        <strong>Cooking Time:</strong> {recipe.cooking_time} minutes
      </p>

      <h2>Ingredients</h2>

      <ul>
        {recipe.ingredients?.length > 0 ? (
          recipe.ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.quantity} {ingredient.name}
            </li>
          ))
        ) : (
          <li>No ingredients listed.</li>
        )}
      </ul>

      <h2>Instructions</h2>

      <p style={{ whiteSpace: "pre-line" }}>
        {recipe.instructions}
      </p>
    </div>
  );
}