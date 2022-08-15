import React from 'react';
import {Link} from "react-router-dom";
import bagDash from '../../assets/img/bag-dash.svg';

const SecondNavbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md bg-light clear m-2 p-2">
      <div className="container">
        <div className="navbar-collapse collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
            </li>
          </ul>
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
          <ul className="navbar-nav me-0">
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/light-sp/cart'>
                  <img width={25} src={bagDash} alt=""/>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
