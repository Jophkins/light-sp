import React from 'react';
import {Link} from "react-router-dom";

const SecondNavbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-black clear">
      <div className="container">

        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="navbar-collapse collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp'>Главная</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/chandeliers'>Люстры</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/sconce'>Бра</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/lamps'>Настольные лампы</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/floor-lamps'>Напольные лампы</Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
            </li>
          </ul>
          <ul className="navbar-nav me-0">
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/cart'>Корзина</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
