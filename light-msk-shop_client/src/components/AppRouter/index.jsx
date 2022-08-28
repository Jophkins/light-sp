import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Shops from "../../pages/Shops";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";
import Delivery from "../../pages/Delivery";
import Chandeliers from "../../pages/products/Chandeliers";
import Sconce from "../../pages/products/Sconce";
import Lamps from "../../pages/products/Lamps";
import FloorLamps from "../../pages/products/FloorLamps";
import CartPage from "../../pages/CartPage";
import ProductPage from "../../pages/ProductPage";
import Auth from "../../pages/Auth";

const AppRouter = ({products}) => {

  return (

    <Routes>
      <Route path='/light-sp' element={<MainPage products={products}/>} exact/>

      <Route path='/light-sp/login' element={<Auth/>} exact/>

      <Route path='/light-sp/shops' element={<Shops/>} exact/>
      <Route path='/light-sp/about' element={<About/>} exact/>
      <Route path='/light-sp/contacts' element={<Contacts/>} exact/>
      <Route path='/light-sp/delivery' element={<Delivery/>} exact/>

      <Route path='/light-sp/chandeliers' element={<Chandeliers products={products}/>} exact/>
      <Route path='/light-sp/sconce' element={<Sconce products={products}/>} exact/>
      <Route path='/light-sp/lamps' element={<Lamps products={products}/>} exact/>
      <Route path='/light-sp/floor-lamps' element={<FloorLamps products={products}/>} exact/>

      <Route path='/light-sp/cart' element={<CartPage/>} exact/>

      <Route path='/light-sp/product/:id' element={<ProductPage/>} exact/>

      <Route path="*" element={<MainPage products={products}/>}/>
    </Routes>
  );
};

export default AppRouter;
