import React from 'react';
import Card from "../../../components/Card";

import styles from './Chandeliers.module.scss';

const Chandeliers = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title text-center">Потолочные Люстры</h2>
            <div className="row">
              <Card
                imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'/>
              <Card
                imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'/>
              <Card
                imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chandeliers;