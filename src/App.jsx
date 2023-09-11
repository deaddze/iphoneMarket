import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
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
      </Routes>
    </SearchContext.Provider>
    </>
  );
}

export default App;
