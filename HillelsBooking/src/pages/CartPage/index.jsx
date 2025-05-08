import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/actions";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveClick = (hotelId) => {
    dispatch(removeFromCart(hotelId));
  };

  return (
    <div>
      <h1>Кошик бронювання</h1>
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.location} - {item.price} грн/ніч
                </p>
              </div>
              <button
                onClick={() => handleRemoveClick(item.id)}
                style={{ backgroundColor: "#dc3545" }}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button style={{ marginTop: "20px" }}>Оформити бронювання</button>
      )}
    </div>
  );
}

export default CartPage;
