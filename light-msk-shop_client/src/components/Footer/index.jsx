import React from 'react';
import styles from './Footer.module.scss';
import visaLogo from "../../assets/img/visa.jpg";
import mcLogo from "../../assets/img/mastercard.png";

const Footer = () => {
  return (
    <footer className={`${styles.footer} clear`}>
      <div className="container footerContainer">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className={styles.title}>
              Наш магазин
            </div>
            <ul className={styles.footerDesc}>
              <li>Доставка и оплата</li>
              <li>О нас</li>
              <li>Магазины</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className={styles.title}>
              Каталог
            </div>
            <ul className={styles.footerDesc}>
              <li>Все люстры</li>
              <li>Бра</li>
              <li>Настольные Лампы</li>
              <li>Торшеры</li>
              <li>Другие светильники</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className={styles.title}>
              Способ оплаты
            </div>
            <div className={styles.footerDesc}>
              <div className="paidServices">
                <img src={visaLogo} alt="Visa"/>
                <img src={mcLogo} alt="MasterCard"/>
              </div>
              <div className={styles.lowDesc}>
                Вы можете оплатить покупки наличными при получении, либо выбрать другой способ оплаты.
              </div>
              <div className={styles.license}>
                Пользовательское соглашение
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-4">
            <div className={styles.title}>
              Контакты
            </div>
            <div className={styles.footerDesc}>
              <div className="footerDescPhone">
                +9 (999) 999-99-99
              </div>
              <div className="footerDescEmail">
                light@gmail.com
              </div>
              <div className="footerDescSocials">
                Instagram
                WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
