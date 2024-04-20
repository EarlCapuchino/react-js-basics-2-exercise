import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const products = [
  { 
    id: 1, 
    name: 'Laptop', 
    price: 999, 
    image: 'https://i5.walmartimages.com/seo/Lenovo-IdeaPad-3i-14-Laptop-Intel-Core-i5-1235U-8GB-RAM-512GB-SSD-Windows-11-Home-Arctic-Grey-82RJ0007US_2636a308-dc1c-4235-a1f3-cc826ed59556.6790f1aa7755583035b970d4f8ea4526.jpeg' 
  },
  { 
    id: 2, 
    name: 'Phone', 
    price: 299, 
    image: 'https://www.compex.com.ph/cdn/shop/products/REALME-R6_4GB_8GB_CometBlue_26243e61-1726-4532-9bec-23295bc971b4_1200x1200.jpg?v=1597041228' 
  },
  { 
    id: 3, 
    name: 'iPhone', 
    price: 1099, 
    image: 'https://powermaccenter.com/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US_3295c924-7c21-417d-870c-32bee7f1e310_1445x.jpg?v=1695861436' 
  },
];

const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Groceries", url: "#", id: 2 },
  { name: "Gadgets", url: "#", id: 3 },
  { name: "Clothing", url: "#", id: 4 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <header>
        <h1>Lazado</h1>
        <Menu menus={menus} />
      </header>
      <main className="main-content">
        <section className="products">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
        <aside className="cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} x {item.quantity}
                <button className="delete-button" onClick={() => removeFromCart(item.id)}>X</button>
              </li>
            ))}
          </ul>
          <p>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
        </aside>
      </main>
      <Footer />
    </div>
  );
}


export default App;
