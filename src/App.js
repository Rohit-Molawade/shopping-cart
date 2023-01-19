import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const location = useLocation();
  const [itemArray, setItemArray] = useState([]);

  function addItem(item) {
    setItemArray([...itemArray, item]);
  }

  return (
    <div className={`App ${location.pathname === '/shop' ? 'App-dark' : 'App-normal'}`}>
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Shop itemArray = {itemArray} addItem = {addItem} />} path="/Shop" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
