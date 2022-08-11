import React from 'react';

import cross from '../../assets/img/cross.svg';

import styles from './CartPage.module.scss';

const CartPage = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className="container">

          <div className={styles.cartEmpty}>
            <div className="row">
              <div className="col-12">
                <div className={`${styles.title} text-center`}>
                  Корзина пуста. Добавьте хотя бы один товар.
                </div>
                <div className={`${styles.desc} text-center`}>
                  Вы не приобрели ни одного товара. Пожалуйста вернитесь на главную страницу или в тематический раздел и
                  добавьте что нибудь.
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.checkout} mt-5`}>
            <div className="row">
              <div className="col-12">
                <div className={styles.title}>
                  Оформление заказа
                </div>

                <div className="productsWrapper mt-5">

                  <div className={styles.product}>
                    <div className="row align-items-center justify-content-between text-center">
                      <div className="col-3">
                        <img width={180} className='img-thumbnail'
                          src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                          alt=""/>
                      </div>
                      <div className="col-3">
                        <span className='productTitle'>Люстра 8106/10 Nickel</span>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-center">
                        <input type="number" defaultValue={1} min={1}/>
                        <span>72 555 руб.</span>
                      </div>
                      <div className="col-3">
                        <div className={styles.removeBtn}>
                          <img src={cross} alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className={`${styles.total} m-5`}>
                  <div className="row">
                    <div className="col-3 offset-9">
                      <span className={styles.totalPrice}>111 111 руб.</span>
                      <button>Оформить заказ</button>
                    </div>
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

export default CartPage;
