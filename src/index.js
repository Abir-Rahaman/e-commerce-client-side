import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";
import "./Componenets/HeroSection/HeroSection.css";
import { AppProvider } from "./Componenets/Conterxt/ProductContext";
import { FilterContextProvider } from "./Componenets/Conterxt/FilterContext";
import { CartProvider } from "./Componenets/Conterxt/CartContext";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
