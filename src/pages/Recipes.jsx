import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../services/recipeService";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const data = await getRecipes();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <h2>Loading recipes...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "50px 8%",
        background: "#FFF8F2",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#4E342E",
          marginBottom: "40px",
        }}
      >
        Our Recipes
      </h1>

      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,.12)",
              }}
            >
              <img
                src={
                  recipe.image ||
                  "https://via.placeholder.com/400x250?text=Recipe"
                }
                alt={recipe.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{recipe.title}</h3>

                <p>
                  {recipe.description
                    ? recipe.description.substring(0, 100)
                    : "No description available."}
                </p>

                <Link to={`/recipes/${recipe.id}`}>
                  <button
                    style={{
                      background: "#5D4037",
                      color: "white",
                      border: "none",
                      padding: "12px 22px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    View Recipe
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}