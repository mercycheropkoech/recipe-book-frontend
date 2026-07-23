import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#4E342E",
        padding: "18px 8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <h2
        style={{
          color: "#FFF8F2",
          fontSize: "30px",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        RecipeBook
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/recipes" style={linkStyle}>
          Recipes
        </NavLink>

        <NavLink to="/upload" style={linkStyle}>
          Upload
        </NavLink>

        <NavLink to="/favorites" style={linkStyle}>
          Favorites
        </NavLink>

        <NavLink to="/login" style={linkStyle}>
          Login
        </NavLink>

        <NavLink to="/register" style={linkStyle}>
          Register
        </NavLink>
      </div>
    </nav>
  );
}

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#FFD180" : "#FFF8F2",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "17px",
  transition: "0.3s",
});