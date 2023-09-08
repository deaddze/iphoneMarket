import React from 'react';
import './App.css';
import Header from './components/Header'
import axios from 'axios'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Cart from './pages/Cart/Cart'
function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    axios.get('https://64f785679d7754084953ac39.mockapi.io/items')
    .then(res=> {setData(res.data); setIsLoading(false);})
  }, [])

  return (
    <>
    <Header/>
    {/* <Cart/> */}
    {/* <NotFound/> */}
    <Home data={data} isLoading={isLoading}/>
    </>
  );
}

export default App;
