import React from 'react';
import styles from './Card.module.scss';
import favoritePlus from "../../assets/img/favoritePlus.svg";
import favoriteAdded from "../../assets/img/favoriteChecked.svg";
import cartPlus from "../../assets/img/cartPlus.svg";
import cartAdded from "../../assets/img/cartAdded.svg";

const Card = ({imgUrl, isFavorite, isAddedToCart}) => {
  return (
    <div className="col-12 col-md-4 mt-4">
      <div className={styles.cardItem}>
        <div className={styles.cardItemFavorite}>
          <img width={50} src={isFavorite ? favoriteAdded : favoritePlus} alt="Favorite"/>
        </div>
        <img className="img-fluid"
             src={imgUrl}
             alt=""/>
        <h5>Люстра 1111/11 White</h5>
        <div className={styles.cardItemBottom}>
          <div>
            <b>12 999 руб.</b>
          </div>
          <button>
            <img src={isAddedToCart ? cartAdded : cartPlus} alt="Plus"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
