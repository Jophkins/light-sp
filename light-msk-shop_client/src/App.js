import React from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";

import MainNavbar from "./components/MainNavbar";
import SecondNavbar from "./components/SecondNavbar";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer";
import Shops from "./pages/Shops";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Chandeliers from "./pages/products/Chandeliers";
import Sconce from "./pages/products/Sconce";
import Lamps from "./pages/products/Lamps";
import FloorLamps from "./pages/products/FloorLamps";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";


function App() {
  return (

    <div className="wrapper">
      <MainNavbar/>
      <SecondNavbar/>

      <Routes>
        <Route path='/light-sp' element={<MainPage />} />

        <Route path='/light-sp/shops' element={<Shops />} />
        <Route path='/light-sp/about' element={<About />} />
        <Route path='/light-sp/contacts' element={<Contacts />} />
        <Route path='/light-sp/delivery' element={<Delivery />} />

        <Route path='/light-sp/chandeliers' element={<Chandeliers />} />
        <Route path='/light-sp/sconce' element={<Sconce />} />
        <Route path='/light-sp/lamps' element={<Lamps />} />
        <Route path='/light-sp/floor-lamps' element={<FloorLamps />} />

        <Route path='/light-sp/cart' element={<CartPage />} />

        <Route path='/light-sp/product-ID' element={<ProductPage />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
