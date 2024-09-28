"use client";

import { useState } from "react";
import Product from "../components/Product";
import Cart from "../components/Cart";
import Discounts from "../components/Discount";
import Checkout from "../components/Checkout";

export default function Store() {
  // Product catalog for sale
  const products = [
    { id: "P001", title: "Laptop", cost: 1000.00, group: "Electronics" },
    { id: "P002", title: "Phone", cost: 500.00, group: "Electronics" },
    { id: "P003", title: "T-Shirt", cost: 20.00, group: "Fashion" },
  ];

  const [cart, setCart] = useState([]);
  const [discounts] = useState([
    { title: "Buy 1 Get 1 Free", group: "Fashion", type: "BOGO" },
    { title: "10% Off on Electronics", group: "Electronics", type: "percentage", value: 10 },
  ]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(cartItem => cartItem.product.id === product.id);
      if (existingProduct) {
        return prevCart.map(cartItem =>
          cartItem.product.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  const removeFromCart = (productId, quantity) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(cartItem => cartItem.product.id === productId);
      if (productInCart.quantity > quantity) {
        return prevCart.map(cartItem =>
          cartItem.product.id === productId
            ? { ...cartItem, quantity: cartItem.quantity - quantity }
            : cartItem
        );
      } else {
        return prevCart.filter(cartItem => cartItem.product.id !== productId);
      }
    });
  };

  return (
    <div className="store">
      <div className="header">
        <h1>E-Commerce Store</h1>
      </div>

      <h2>Product Catalog</h2>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      <Discounts discounts={discounts} />
      <Checkout cartItems={cart} discounts={discounts} />

      <style jsx>{`
        .store {
          background-color: #f0f0f0;
          padding: 25px;
          font-family: 'Segoe UI', sans-serif;
        }

        .header {
          background-color: #3a8d44;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 10px;
          margin-bottom: 25px;
        }

        h1 {
          margin: 0;
          font-size: 26px;
          font-weight: 700;
        }

        h2 {
          font-size: 22px;
          margin-bottom: 15px;
        }

        .products {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .products > div {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 210px;
        }

        .products > div:hover {
          transform: scale(1.07);
          transition: transform 0.3s;
        }

        .shopping-cart, .discounts, .checkout {
          margin-top: 25px;
          padding: 20px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
