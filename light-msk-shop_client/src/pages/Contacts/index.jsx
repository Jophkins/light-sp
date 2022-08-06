import React from 'react';
import MainNavbar from "../../components/MainNavbar";
import Footer from "../../components/Footer";

const Contacts = () => {
  return (
    <div>
      <MainNavbar />
      <div className="contactsWrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              <div className="title text-center"><b>Наш адресс</b></div>
              <div className="address text-center">
                Lorem ipsum dolor sit.
                Ленинская ул., 11, Покровское,
                Московская обл., 143411
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
