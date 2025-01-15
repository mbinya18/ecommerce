import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Allproducts from './components/Allproducts.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Contact from './components/contact.jsx';
import Cart from './components/Cart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      <Footer />
    </Router>
  </StrictMode>
);
