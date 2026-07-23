export default function Recipes() {
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {[1, 2, 3].map((recipe) => (
          <div
            key={recipe}
            style={{
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0,0,0,.12)",
            }}
          >
            <img
              src={`https://picsum.photos/400/250?random=${recipe}`}
              alt="recipe"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>Recipe {recipe}</h3>

              <p>
                Delicious homemade meal prepared with fresh ingredients.
              </p>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}