import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Shop from './Components/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Shop />} path="/Shop" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
