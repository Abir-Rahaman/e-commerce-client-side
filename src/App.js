import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Componenets/Shared/Header";
import Home from "./Componenets/Home/Home";
import Footer from "./Componenets/Shared/Footer";
import NotFound from "./Componenets/Shared/NotFound";
import SingleProduct from "./Componenets/SingleProduct/SingleProduct";
import Products from './Componenets/Products/Products';
import Cart from './Componenets/Cart/Cart';
import LogIn from './Componenets/Authentication/LogIn';
import SignUp from './Componenets/Authentication/SignUp';
import RequireAuth from "./Componenets/Shared/RequireAuth";
import DashBoard from './Componenets/DashBoard/DashBoard';
import ManageAccount from "./Componenets/DashBoard/ManageAccount";
import MyOrder from "./Componenets/DashBoard/MyOrder";
import AllUsers from "./Componenets/DashBoard/AllUsers";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route  path="/dashboard" element={<RequireAuth><DashBoard /></RequireAuth>}>
            <Route index element={<ManageAccount></ManageAccount>}></Route>
            <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
            <Route path='allUsers' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/signIn" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
