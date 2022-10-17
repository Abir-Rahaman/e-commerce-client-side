
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Componenets/Shared/Header';
import Home from './Componenets/Home/Home';
import Footer from './Componenets/Shared/Footer';
import NotFound from './Componenets/Shared/NotFound';
import SingleProduct from './Componenets/SingleProduct/SingleProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
