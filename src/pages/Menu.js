import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // 🔹 Restaurants avec leurs images locales
  const localData = [
    { restaurantID: 26, restaurantName: "Le Délice", imageUrl: "./images/d.jpeg" },
    { restaurantID: 25, restaurantName: "Pasta Roma", imageUrl: "./images/Carbonara Recipe.jpeg" },
    { restaurantID: 27, restaurantName: "Sushi Zen", imageUrl: "./images/Suchii.jpeg" },
    { restaurantID: 28, restaurantName: "Burger House", imageUrl: "./images/b.jpeg" },
    { restaurantID: 29, restaurantName: "Le Gourmet Indien", imageUrl: "./images/Elegant Indian .jpeg" },
    { restaurantID: 30, restaurantName: "La Mer", imageUrl: "./images/fruits de mer .jpeg" },
    { restaurantID: 31, restaurantName: "Tacos Express", imageUrl: "./images/tacos.jpeg" },
    { restaurantID: 33, restaurantName: "Le Kebab Royal", imageUrl: "./images/kebda.jpeg" },
  ];

  useEffect(() => {
    setLoading(true);

    fetch("https://fakerestaurantapi.runasp.net/api/Restaurant/5/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log("API data:", data);

        if (!data || data.length === 0) {
          // 🔹 fallback si API vide
          const fallback = localData.map((dish) => ({
            itemID: dish.restaurantID,
            itemName: dish.restaurantName,
            itemDescription: "Description du plat non disponible",
            itemPrice: Math.floor(Math.random() * 100) + 20,
            restaurantName: dish.restaurantName,
            localImage: dish.imageUrl,
          }));
          setFoods(fallback);
        } else {
          // 🔹 mapping API vers plats en utilisant image locale si possible
          const mapped = data.map((item) => {
            const restaurant = localData.find(
              (r) => r.restaurantName === item.name
            );
            return {
              itemID: item.id || item.restaurantID,
              itemName: item.name,
              itemDescription: item.description || "Description non disponible",
              itemPrice: Math.floor(Math.random() * 100) + 50,
              restaurantName: item.name,
              localImage: restaurant
                ? restaurant.imageUrl
                : "./images/default.jpeg",
            };
          });
          setFoods(mapped);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        // 🔹 fallback sur erreur
        const fallback = localData.map((dish) => ({
          itemID: dish.restaurantID,
          itemName: dish.restaurantName,
          itemDescription: "Description du plat non disponible",
          itemPrice: Math.floor(Math.random() * 100) + 20,
          restaurantName: dish.restaurantName,
          localImage: dish.imageUrl,
        }));
        setFoods(fallback);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>⏳ Chargement...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>🍽️ Plats disponibles</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {foods.map((dish) => (
          <div
            key={dish.itemID}
            style={{
              border: "1px solid #ccc",
              borderRadius: 10,
              padding: 15,
              boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={dish.localImage}
              alt={dish.itemName}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
            <h2>{dish.itemName}</h2>
            <p>{dish.itemDescription}</p>
            <p>
              <strong>Prix :</strong> {dish.itemPrice} MAD
            </p>
            <p>
              <strong>Restaurant :</strong> {dish.restaurantName}
            </p>

            <button
              onClick={() => dispatch(addToCart(dish))}
              style={{
                marginTop: 10,
                backgroundColor: "#aa4c0aff",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ➕ Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
