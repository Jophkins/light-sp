import React from 'react';

const SecondNavbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-secondary">
      <div className="container">
        <ul className="navbar-nav me-5 mb-2 mb-md-0">
          <li className="nav-item">
            <div className="nav-link">
              Избранное
            </div>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link">
              Корзина
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondNavbar;
