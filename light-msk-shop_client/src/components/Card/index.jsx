import React from 'react';
import styles from './Card.module.scss';
import { useNavigate } from "react-router-dom";

const Card = ({id, title, price, imageUrl}) => {
  const navigate = useNavigate();
  return (
    <div className="col-6 col-md-3 mt-4" onClick={() => navigate('/light-sp/product/' + id)}>
      <div className={styles.cardItem}>
        <img className="img-fluid"
             src={process.env.REACT_APP_API_URL + imageUrl}
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
