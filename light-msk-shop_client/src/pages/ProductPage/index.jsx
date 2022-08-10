import React from 'react';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className={styles.leftSide}>
                <img className='img-fluid'
                     src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                     alt=""/>
                     <hr/>
                <div className="row">
                  <div className="col-4">
                    <img className='img-fluid'
                         src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                         alt=""/>
                  </div>
                  <div className="col-4"><img className='img-fluid'
                                              src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                                              alt=""/></div>
                  <div className="col-4">
                    <img className='img-fluid'
                         src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                         alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.rightSide}>
                <div className={styles.rightSideTitle}>
                  Люстра 8106/8 Nick
                  <hr/>
                </div>
                <div className={styles.rightSidePrice}>
                  <span className='price'>49 000 руб.</span>
                  <div className={styles.rightSidePriceBtn}>
                    <input type="number" defaultValue={1} min={1}/>
                    <button>Добавить в корзину</button>
                    <button>Купить в один клик</button>
                  </div>
                  <hr/>
                  <div className="descTable">
                    <table>
                      <tbody>
                      <tr>
                        <td>Димаетр см (D)</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Цоколь (E)</td>
                        <td>E14</td>
                      </tr>
                      <tr>
                        <td>Место применения</td>
                        <td>коридор, гостиная, холл, кухня, спальня, ванная</td>
                      </tr>
                      <tr>
                        <td>Димаетр см (D)</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Цоколь (E)</td>
                        <td>E14</td>
                      </tr>
                      <tr>
                        <td>Димаетр см (D)</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Цоколь (E)</td>
                        <td>E14</td>
                      </tr>
                      <tr>
                        <td>Димаетр см (D)</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Цоколь (E)</td>
                        <td>E14</td>
                      </tr>
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
