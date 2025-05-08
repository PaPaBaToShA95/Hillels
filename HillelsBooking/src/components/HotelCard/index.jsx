import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions";

function HotelCard({ hotel }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(hotel));
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        width: "300px",
      }}
    >
      <img
        src={hotel.image}
        alt={hotel.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <h3 style={{ margin: "10px 0" }}>{hotel.title}</h3>
      <p style={{ margin: "5px 0" }}>
        <strong>Місцезнаходження:</strong> {hotel.location}
      </p>
      <p style={{ margin: "5px 0" }}>
        <strong>Ціна за ніч:</strong> {hotel.price} грн
      </p>
      <p style={{ margin: "5px 0", fontSize: "0.9em", color: "#555" }}>
        {hotel.description}
      </p>
      <button onClick={handleAddToCart} style={{ marginTop: "10px" }}>
        Додати до кошика
      </button>
    </div>
  );
}

export default HotelCard;
