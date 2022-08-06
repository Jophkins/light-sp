import React from 'react';
import styles from './Card.module.scss';

const Card = ({imgUrl}) => {
  return (
    <div className="col-12 col-md-4 mt-4">
      <div className={styles.cardItem}>
        <img className="img-fluid"
             src={imgUrl}
             alt=""/>
        <h5>Люстра 1111/11 White</h5>
        <div className={styles.cardItemBottom}>
          <div>
            <b>12 999 руб.</b>
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
