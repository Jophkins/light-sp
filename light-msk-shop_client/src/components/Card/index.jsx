import React from 'react';
import styles from './Card.module.scss';

const Card = ({title, price, imageUrl}) => {
  return (
    <div className="col-6 col-md-3 mt-4">
      <div className={styles.cardItem}>
        <img className="img-fluid"
             src={imageUrl}
             alt=""/>
        <h5>{title}</h5>
        <div className={styles.cardItemBottom}>
          <div>
            <b>{price} руб.</b>
          </div>
          <div className={styles.cardItemBottomBtn}>
            <button>
              Добавить в Корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
