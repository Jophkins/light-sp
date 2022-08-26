import React, {useEffect, useState} from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from "./components/MainNavbar";
import SecondNavbar from "./components/SecondNavbar";
import Footer from "./components/Footer";
import axios from "axios";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const productsResponse = await axios.get('https://62d66e3751e6e8f06f096028.mockapi.io/favorites');
      setIsLoading(false);
      setProducts(productsResponse.data);
    }
    fetchData();
  }, []);

  return (

    <BrowserRouter>
      <div className="wrapper">
        <MainNavbar/>
        <SecondNavbar/>

        <AppRouter products={products} />

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
