import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className = 'add-button' onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
