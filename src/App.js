import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Componenets/Shared/Header";
import Home from "./Componenets/Home/Home";
import Footer from "./Componenets/Shared/Footer";
import NotFound from "./Componenets/Shared/NotFound";
import SingleProduct from "./Componenets/SingleProduct/SingleProduct";
import Products from './Componenets/Products/Products';
import Cart from './Componenets/Cart/Cart';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
