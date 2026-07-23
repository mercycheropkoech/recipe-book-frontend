import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#5D4037",
        color: "white",
        padding: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link to="/recipes" style={{ color: "white", marginRight: "20px" }}>
        Recipes
      </Link>

      <Link to="/upload" style={{ color: "white", marginRight: "20px" }}>
        Upload
      </Link>

      <Link to="/favorites" style={{ color: "white", marginRight: "20px" }}>
        Favorites
      </Link>

      <Link to="/login" style={{ color: "white", marginRight: "20px" }}>
        Login
      </Link>

      <Link to="/register" style={{ color: "white" }}>
        Register
      </Link>
    </nav>
  );
}

export default Navbar;