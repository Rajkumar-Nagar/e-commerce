"use client"
export default function Item({ product, addToCart }) {
    const addProductToCart = () => {
        const quantity = parseInt(prompt(`How many units of ${product.name} would you like?`), 10);
        if (quantity > 0) {
            addToCart(product, quantity);
        }
    };

    return (
        <div className="product-card">
            <h3>{product?.title}</h3>
            <p>Cost: ${product?.cost} USD</p>
            <p>Category: {product?.group}</p>
            <button onClick={addProductToCart}>Add to Cart</button>

            <style jsx>{`
        .product-card {
          width: 150px;
          height: 200px;
          background-color: #1e293b; /* Slate-900 */
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          padding: 15px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card h3 {
          margin-bottom: 5px;
          font-size: 1.2rem;
          text-align: center;
        }

        .product-card p {
          margin: 3px 0;
          font-size: 0.9rem;
        }

        .product-card button {
          margin-top: 10px;
          padding: 5px 10px;
          background-color: #4caf50; /* Green */
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .product-card button:hover {
          background-color: #388e3c; /* Darker green */
        }

        .product-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
        </div>
    );
}
