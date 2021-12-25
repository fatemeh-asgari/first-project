import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Cart from "./Cart";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
