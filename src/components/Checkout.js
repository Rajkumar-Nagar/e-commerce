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
        if (offer.group === item.product.group) {
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
    <div className="payment-summary">
      <h2>Payment Summary</h2>
      <p>Total (USD): <span>${totalUSD.toFixed(2)}</span></p>
      <label>Convert currency: </label>
      <select value={currency} onChange={handleCurrencySwitch}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <p>Total in {currency}: <span>{totalInChosenCurrency.toFixed(2)} {currency}</span></p>

      <style jsx>{`
        .payment-summary {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          margin-top: 20px;
        }

        h2 {
          color: #4caf50;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          margin: 5px 0;
        }

        label {
          font-weight: bold;
          margin-right: 10px;
        }

        select {
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        span {
          font-weight: bold;
          color: #333;
        }
      `}</style>
    </div>
  );
}
