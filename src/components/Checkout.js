"use client"
import { useState } from "react";

export default function Payment({ cartItems, discounts }) {
  const [currency, setCurrency] = useState("USD");
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
  };

  const computeTotalWithDiscounts = () => {
    let totalCost = cartItems.reduce((sum, item) => sum + item.product.cost * item.quantity, 0);

    discounts.forEach((offer) => {
      cartItems.forEach((item) => {
        if (offer.category === item.product.category) {
          if (offer.dealType === "BOGO" && item.quantity >= 2) {
            totalCost -= Math.floor(item.quantity / 2) * item.product.cost;
          } else if (offer.dealType === "percentage") {
            totalCost -= (item.product.cost * offer.discount / 100) * item.quantity;
          }
        }
      });
    });

    return totalCost;
  };

  const handleCurrencySwitch = (e) => {
    setCurrency(e.target.value);
  };

  const totalUSD = computeTotalWithDiscounts();
  const totalInChosenCurrency = totalUSD * exchangeRates[currency];

  return (
    <div>
      <h2>Payment Summary</h2>
      <p>Total (USD): ${totalUSD.toFixed(2)}</p>
      <label>Convert currency: </label>
      <select value={currency} onChange={handleCurrencySwitch}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <p>Total in {currency}: {totalInChosenCurrency.toFixed(2)} {currency}</p>
    </div>
  );
}
