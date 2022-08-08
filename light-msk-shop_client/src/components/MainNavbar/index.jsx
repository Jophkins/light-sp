import React from 'react';
import {Link} from "react-router-dom";
import instagram from "../../assets/img/instagram.svg";
import whatsapp from "../../assets/img/whatsapp.svg";

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light clear">
      <div className="container">
        <div className="navbar-brand">
          <Link to='/light-sp'>ЛОГОТИП</Link>
        </div>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/shops'>Магазины</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/about'>О Нас</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/contacts'>Контакты</Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/delivery'>Доставка и оплата</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <b>+7 (999) 999-99-99</b>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <img width={25} src={instagram} alt=""/>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <img width={25} src={whatsapp} alt=""/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
