import React, {useState} from 'react';
import cross from "../../assets/img/cross.svg";
import styles from "./BasketProducts.module.scss";

const BasketProducts = ({id, name, price, img, count, removeProduct}) => {
  const [numberVal, setNumberVal] = useState(count)

  const removeHandler = (id) => {
    removeProduct(id);
  }
  return (
    <div className="productsWrapper">

      <div className={styles.product}>
        <div className="row align-items-center justify-content-between text-center">
          <div className="col-3">
            <img width={180} className='img-thumbnail'
                 src={img}
                 alt=""/>
          </div>
          <div className="col-3">
            <span className={styles.productTitle}>{name}</span>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-center">
            <input onChange={e => setNumberVal(e.target.value)} type="number" value={numberVal} min={1}/>
            <span><b>{price * numberVal} руб.</b></span>
          </div>
          <div className="col-3">
            <div className={styles.removeBtn}>
              <img onClick={() => removeHandler(id)} src={cross} alt=""/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BasketProducts;
