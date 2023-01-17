import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Shop from './Components/Shop';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Shop />} path="/Shop" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
