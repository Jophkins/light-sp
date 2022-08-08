import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from "./components/MainNavbar";
import SecondNavbar from "./components/SecondNavbar";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Shops from "./pages/Shops";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import React from "react";


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
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
