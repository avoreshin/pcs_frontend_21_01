import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import CardsPage from './pages/CardsPage';
import BasketPage from './pages/BasketPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LoginPage/>} />
      <Route path={"/cards"} element={<CardsPage/>} />
      <Route path={"/basket"} element={<BasketPage/>} />
    </Routes>
  );
}

export default App;
