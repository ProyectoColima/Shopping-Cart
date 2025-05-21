import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { useCart } from './context/CartContext';

function App() {
  const { cartCount } = useCart();

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div style={{ width: '100vw', minHeight: 'calc(100vh - 64px)', padding: 0, margin: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
