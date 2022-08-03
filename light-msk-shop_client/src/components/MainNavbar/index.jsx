import React from 'react';
import instagram from "../../assets/img/instagram.svg";
import whatsapp from "../../assets/img/whatsapp.svg";

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container">
        <div className="navbar-brand">ЛОГОТИП</div>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <div className="nav-link">Магазины</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">О нас</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Контакты</div>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <div className="nav-link">Доставка и оплата</div>
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
