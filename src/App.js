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
import RequireAdmin from "./Componenets/Shared/RequireAdmin";
import AddProduct from './Componenets/DashBoard/AddProduct';
import AddProductDetails from './Componenets/DashBoard/AddProductDetails';
import PostProducts from './Componenets/PostProducts/PostProducts';
import ShowOldProducts from './Componenets/PostProducts/ShowOldProducts';
import CheckOut from './Componenets/CheckOut/CheckOut';
import Payment from "./Componenets/DashBoard/Payment";
import About from './Componenets/About/About';
import Contact from './Componenets/Contact/Contact';
import Review from './Componenets/Review/Review';
import UserReview from './Componenets/DashBoard/UserReview';
import Blog from './Componenets/Shared/Blog';





function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="/post" element={<RequireAuth><PostProducts /></RequireAuth>} />
        <Route path="/cart/checkOut" element={<RequireAuth><CheckOut /></RequireAuth>} />
        <Route  path="/dashboard" element={<RequireAuth><DashBoard /></RequireAuth>}>
            <Route index element={<ManageAccount></ManageAccount>}></Route>
            <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
            <Route path='myReview' element={<UserReview></UserReview>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path='addProductDetails' element={<RequireAdmin><AddProductDetails></AddProductDetails></RequireAdmin>}></Route>
        </Route>
        <Route path="/oldProducts" element={<ShowOldProducts></ShowOldProducts>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/myReview" element={<Review></Review>} />
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/signIn" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
