"use client"
export default function Item({ product, addToCart }) {
 
    const addProductToCart = () => {
        const quantity = parseInt(prompt(`How many units of ${product.name} would you like?`), 10);
        if (quantity > 0) {
            addToCart(product, quantity);
        }
    };

    return (
        <div className="w-24 h-40 bg-slate-900 rounded-md items-center justify-center">
            <h3>{product?.title}</h3>
            <p>Cost: ${product?.cost} USD</p>
            <p>Category: {product?.group}</p>
            <button onClick={addProductToCart}>Add to Cart</button>
        </div>
    );
}
