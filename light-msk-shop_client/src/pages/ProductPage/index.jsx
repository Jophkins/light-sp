import React, {useContext, useEffect, useState} from 'react';
import styles from './ProductPage.module.scss';
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../../http/productAPI";
import { useNavigate } from "react-router-dom";
import {Context} from "../../index";

const ProductPage = () => {
  const {basketProduct} = useContext(Context);
  const navigate = useNavigate();
  const [product, setProduct] = useState({info: []});
  const {id} = useParams();

  const addToBasket = () => {
    basketProduct.setBasketProducts([...basketProduct.basketProducts, id])
  }

  useEffect(() => {
    fetchOneProduct(id).then(data => setProduct(data));
  }, [])

  return (
    <div>
      <div className={styles.wrapper}>
        <div className="container">
          <button className="mb-2" onClick={() => navigate(-1)}>Вернуться назад</button>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className={styles.leftSide}>
                <img className='img-fluid'
                     src={process.env.REACT_APP_API_URL + product.img}
                     alt=""/>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.rightSide}>
                <div className={styles.rightSideTitle}>
                  {product.name} {product.article}
                  <hr/>
                </div>
                <div className={styles.rightSidePrice}>
                  <span className='price'>{product.price} руб.</span>
                  <div className={styles.rightSidePriceBtn}>
                    <input type="number" defaultValue={1} min={1}/>
                    <button onClick={() => addToBasket()}>Добавить в корзину</button>
                    <button>Купить в один клик</button>
                  </div>
                  <hr/>
                  <div className="descTable">
                    <table>
                      <tbody>
                      {product.info.map(info =>
                        <tr>
                          <td>{info.title}</td>
                          <td>{info.description ? info.description : '-'}</td>
                        </tr>
                      )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
