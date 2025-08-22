import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Calque sombre (overlay) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 0,
        }}
      ></div>

      {/* Contenu centré */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          🍴 Bienvenue sur <span style={{ color: "#ffe082" }}>FoodieApp</span>
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
          Découvrez une sélection des meilleurs restaurants : marocains, italiens, 
          japonais, américains, indiens et bien plus encore.  
          Trouvez votre prochain repas préféré !
        </p>

        <Link
          to="/restaurants"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "12px 25px",
            backgroundColor: "#ff7043",
            color: "white",
            textDecoration: "none",
            borderRadius: "30px",
            fontSize: "1.2rem",
            transition: "0.3s",
          }}
        >
          Explorer les Restaurants ➡️
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
