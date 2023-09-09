import React from 'react';
import './App.css';
import Header from './components/Header'
import axios from 'axios'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
