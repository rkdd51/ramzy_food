import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <button className="bg-red-400 p-2 m-2" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Cart;
