import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fallbackFavorites = [
  {
    id: 1,
    title: "Creamy Mushroom Pasta",
    description: "A rich and comforting pasta dish with herbs and parmesan.",
    image:
      "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Berry Yogurt Bowl",
    description: "Fresh berries, creamy yogurt, and honey for a light breakfast.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Spiced Chicken Wrap",
    description: "A tasty wrap packed with juicy chicken and crunchy veggies.",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
  },
];

function extractFavorites(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.favorites)) return payload.favorites;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const response = await fetch("/api/favorites/");

        if (!response.ok) {
          throw new Error("Failed to fetch favorites");
        }

        const payload = await response.json();
        const items = extractFavorites(payload);

        setFavorites(items.length ? items : fallbackFavorites);
      } catch {
        setError("Could not load favorites from the backend.");
        setFavorites(fallbackFavorites);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const removeFavorite = async (id) => {
    try {
      const response = await fetch(`/api/favorites/${id}/`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Unable to remove favorite");
      }

      setFavorites((current) =>
        current.filter((item) => (item.id ?? item._id) !== id)
      );
    } catch (err) {
      console.error("Failed to remove favorite:", err);
    }
  };

  return (
    <div
      style={{
        padding: "50px 8%",
        background: "#FFF8F2",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#4E342E",
          marginBottom: "40px",
          fontSize: "2.3rem",
        }}
      >
        My Favorites
      </h1>

      {error ? (
        <p style={{ color: "#B00020", marginBottom: "20px" }}>{error}</p>
      ) : null}

      {loading ? (
        <p style={{ color: "#5D4037" }}>Loading favorites...</p>
      ) : favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {favorites.map((recipe) => {
            const recipeId = recipe.id ?? recipe._id;
            return (
              <div
                key={recipeId ?? recipe.title}
                style={{
                  background: "white",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 6px 18px rgba(0,0,0,.12)",
                }}
              >
                <img
                  src={recipe.image || recipe.imageUrl || recipe.photo}
                  alt={recipe.title || "Favorite recipe"}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "20px" }}>
                  <h3 style={{ marginTop: 0, color: "#4E342E" }}>
                    {recipe.title || "Untitled Recipe"}
                  </h3>

                  <p style={{ color: "#5F5F5F", lineHeight: 1.5 }}>
                    {recipe.description || "No description available."}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      marginTop: "12px",
                    }}
                  >
                    <Link to={`/recipes/${recipeId}`}>
                      <button
                        style={{
                          background: "#5D4037",
                          color: "white",
                          border: "none",
                          padding: "12px 18px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        View Recipe
                      </button>
                    </Link>

                    <button
                      onClick={() => removeFavorite(recipeId)}
                      style={{
                        background: "#D32F2F",
                        color: "white",
                        border: "none",
                        padding: "12px 18px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}