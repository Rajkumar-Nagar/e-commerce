"use client"

import { useState } from "react";
import Item from "../components/Product";
import ShoppingCart from "../components/Cart";
import Offers from "../components/Discount";
import Payment from "../components/Checkout";

export default function Storefront() {
  // Product catalog available for purchase
  const catalog = [
    { id: "P001", title: "Laptop", cost: 1000.00, group: "Electronics" },
    { id: "P002", title: "Phone", cost: 500.00, group: "Electronics" },
    { id: "P003", title: "T-Shirt", cost: 20.00, group: "Fashion" },
  ];

  const [shoppingCart, setShoppingCart] = useState([]);
  const [availableDiscounts] = useState([
    { title: "Buy 1 Get 1 Free", group: "Fashion", dealType: "BOGO" },
    { title: "10% Off on Electronics", group: "Electronics", dealType: "percentage", discount: 10 },
  ]);

  const handleAddToCart = (item, quantity) => {
    setShoppingCart((previousCart) => {
      const existingItem = previousCart.find(cartItem => cartItem.product.id === item.id);
      if (existingItem) {
        return previousCart.map(cartItem =>
          cartItem.product.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        );
      }
      return [...previousCart, { product: item, quantity }];
    });
  };

  const handleRemoveFromCart = (itemId, quantity) => {
    setShoppingCart((previousCart) => {
      const itemInCart = previousCart.find(cartItem => cartItem.product.id === itemId);
      if (itemInCart.quantity > quantity) {
        return previousCart.map(cartItem =>
          cartItem.product.id === itemId ? { ...cartItem, quantity: cartItem.quantity - quantity } : cartItem
        );
      } else {
        return previousCart.filter(cartItem => cartItem.product.id !== itemId);
      }
    });
  };

  return (
    <div>
      <div className="navbar w-full">
        <h1>Simple E-Commerce Platform</h1>
      </div>

      <h2>Available Products</h2>
      {catalog.map((item) => (
        <Item key={item.id} product={item} addToCart={handleAddToCart} />
      ))}
      <ShoppingCart cartItems={shoppingCart} removeFromCart={handleRemoveFromCart} />
      <Offers discounts={availableDiscounts} />
      <Payment cartItems={shoppingCart} discounts={availableDiscounts} />
    </div>
  );
}
