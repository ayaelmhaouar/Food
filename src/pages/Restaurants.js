import React, { useState, useEffect } from "react";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Exemple fetch (tu peux utiliser ça plus tard)
    fetch("https://fakerestaurantapi.runasp.net/api/Restaurant")
      .then((res) => res.json())

      .then((json) => console.log(json));

    // Données avec image
    const data = [
      {
        restaurantID: 26,
        restaurantName: "Le Gourmet",
        address: "123 Rue de Paris",
        type: "Français",
        parkingLot: true,
        imageUrl: "./images/res.png",
      },
      {
        restaurantID: 25,
        restaurantName: "Le Délice",
        address: "45 Avenue Casablanca",
        type: "Fast Food",
        parkingLot: false,
        imageUrl: "./images/re.png",
      },
      {
        restaurantID: 27,
        restaurantName: "Sushi Zen",
        address: "78 Rue Tokyo",
        type: "Japonais",
        parkingLot: true,
        imageUrl: "./images/r.png",
      },
      {
        restaurantID: 28,
        restaurantName: "Pizza Napoli",
        address: "12 Via Roma",
        type: "Italien",
        parkingLot: false,
        imageUrl: "./images/res.png",
      },
      {
        restaurantID: 29,
        restaurantName: "Café Marrakech",
        address: "Boulevard Mohammed V",
        type: "Marocain",
        parkingLot: true,
        imageUrl: "./images/ress.png",
      },
    ];

    setRestaurants(data);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🏠 Restaurants</h1>

      {/* Container en Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {restaurants.map((r) => (
          <div
            key={r.restaurantID}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              borderRadius: 10,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              background: "#aa4c0aff",
            }}
          >
            <img
              src={r.imageUrl}
              alt={r.restaurantName}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h2>{r.restaurantName}</h2>
            <p>📍 <strong>Adresse :</strong> {r.address}</p>
            <p>🍽 <strong>Type :</strong> {r.type}</p>
            <p>🅿️ <strong>Parking :</strong> {r.parkingLot ? "Oui" : "Non"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
