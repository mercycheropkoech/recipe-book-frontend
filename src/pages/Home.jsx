import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section
        style={{
          minHeight: "90vh",
          background: "#FFF8F2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 8%",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "4rem",
              color: "#4E342E",
              marginBottom: "20px",
            }}
          >
            Welcome to RecipeBook
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              color: "#6D4C41",
              maxWidth: "600px",
              lineHeight: "1.8",
            }}
          >
            Discover amazing recipes from different cuisines.
            Upload your own dishes, save your favourites and
            share your cooking journey with everyone.
          </p>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              gap: "20px",
            }}
          >
            <Link to="/recipes">
              <button
                style={{
                  background: "#5D4037",
                  color: "white",
                  padding: "15px 35px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "17px",
                }}
              >
                Explore Recipes
              </button>
            </Link>

            <Link to="/upload">
              <button
                style={{
                  background: "#A1887F",
                  color: "white",
                  padding: "15px 35px",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "17px",
                }}
              >
                Upload Recipe
              </button>
            </Link>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900"
            alt="Food"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,.2)",
            }}
          />
        </div>
      </section>
    </>
  );
}