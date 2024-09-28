"use client"
export default function ShoppingCart({ cartItems, removeFromCart }) {

  console.log(cartItems)
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
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.product.id}>
          <p>{item.product.name} - Quantity: {item.quantity}, Subtotal: ${(item.product.cost * item.quantity).toFixed(2)}</p>
          <button onClick={() => handleItemRemoval(item.product.id)}>Remove Item</button>
        </div>
      ))}
      <p>Total (before any discounts): ${totalBeforeDiscounts.toFixed(2)} USD</p>
    </div>
  );
}
