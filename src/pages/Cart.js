import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../features/CartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Mon Panier</h1>
      {items.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.itemName} - {item.itemPrice} MAD
                <button onClick={() => dispatch(removeFromCart(item))}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearCart())}>Vider le panier</button>
        </>
      )}
    </div>
  );
}

export default Cart;
