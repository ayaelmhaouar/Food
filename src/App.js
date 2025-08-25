import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Restaurants from "./pages/Restaurants";
import Menu from "./pages/Menu"; 
import Cart from "./pages/Cart"; 

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "24px",
    marginRight: "30px",
    textAlign: "right",
  };

  return (
    <Router>
      {/* Navbar */}
      <nav
        style={{
          padding: "30px 20px",
          backgroundColor: "#6f4e37",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Liens menu */}
        <div
          style={{
            display:
              windowWidth > 600
                ? "flex"
                : mobileMenuOpen
                ? "flex"
                : "none",
            flexDirection: windowWidth > 600 ? "row" : "column",
            gap: "10px",
          }}
        >
          <Link to="/" style={linkStyle}>Accueil</Link>
          <Link to="/restaurants" style={linkStyle}>Restaurants</Link>
          <Link to="/menu" style={linkStyle}>Menu</Link>
          <Link to="/panier" style={linkStyle}>🛒 Panier</Link>
        </div>

        {/* Bouton mobile */}
        {windowWidth <= 600 && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "1px solid #fff",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/panier" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
