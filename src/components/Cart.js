"use client"
export default function ShoppingCart({ cartItems, removeFromCart }) {

  const handleItemRemoval = (productId) => {
    const quantity = parseInt(prompt("Enter the quantity you want to remove:"), 10);
    if (quantity > 0) {
      removeFromCart(productId, quantity);
    }
  };

  if (cartItems.length === 0) {
    return <p>Your shopping cart is currently empty.</p>;
  }

  const totalBeforeDiscounts = cartItems.reduce(
    (total, item) => total + item.product.cost * item.quantity, 0
  );

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.product.id}>
          <p>{item.product.name} - Quantity: {item.quantity}, Subtotal: ${(item.product.cost * item.quantity).toFixed(2)}</p>
          <button className="remove-button" onClick={() => handleItemRemoval(item.product.id)}>Remove Item</button>
        </div>
      ))}
      <p className="total">Total (before any discounts): ${totalBeforeDiscounts.toFixed(2)} USD</p>

      <style jsx>{`
        .shopping-cart {
          background-color: #f7f7f7;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }

        h2 {
          margin-bottom: 15px;
          font-size: 24px;
          font-weight: bold;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          border: 1px solid #ddd;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 10px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
        }

        .cart-item p {
          margin: 0;
          font-size: 16px;
        }

        .remove-button {
          background-color: #ff4d4d;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 8px 12px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .remove-button:hover {
          background-color: #ff3333;
        }

        .total {
          font-size: 18px;
          font-weight: bold;
          text-align: right;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
}
