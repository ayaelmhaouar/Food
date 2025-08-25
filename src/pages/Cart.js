import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/CartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // calcul du total
  const total = items.reduce(
    (sum, item) => sum + item.itemPrice * (item.quantity || 1),
    0
  );

  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>🛒 Mon Panier</h1>

      {items.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Le panier est vide.
        </p>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "15px",
            }}
          >
            {items.map((item) => (
              <div
                key={item.itemID}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "#fff",
                }}
              >
                {/* Image */}
                <img
                  src={item.localImage || "./images/default.jpeg"}
                  alt={item.itemName}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "10px",
                    objectFit: "cover",
                    marginRight: "15px",
                  }}
                />

                {/* Détails */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0 }}>{item.itemName}</h3>
                  <p style={{ margin: "5px 0", color: "#666" }}>
                    {item.itemPrice} MAD × {item.quantity || 1}
                  </p>
                  <strong>
                    Total : {item.itemPrice * (item.quantity || 1)} MAD
                  </strong>
                </div>

                {/* Bouton supprimer */}
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  ❌ Supprimer
                </button>
              </div>
            ))}
          </div>

          {/* Résumé panier */}
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Total du panier : {total} MAD</h2>
            <button
              onClick={() => dispatch(clearCart())}
              style={{
                marginTop: "10px",
                backgroundColor: "#6f4e37",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              🗑️ Vider le panier
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
