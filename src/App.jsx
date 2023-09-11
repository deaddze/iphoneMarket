import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
import EmptyBag from './pages/EmptyBag/EmptyBag'
import {Routes, Route} from 'react-router-dom'

export const SearchContext = React.createContext('')
function App() {
  const [inputValue, setInputValue] = React.useState('')
  return (
    <>
    <SearchContext.Provider value={{inputValue, setInputValue}}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/empty-cart" element={<EmptyBag/>}/>
      </Routes>
    </SearchContext.Provider>
    </>
  );
}

export default App;
