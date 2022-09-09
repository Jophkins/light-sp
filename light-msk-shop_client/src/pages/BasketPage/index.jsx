import React, {useContext, useEffect, useState} from 'react';


import styles from './BasketPage.module.scss';
import {Context} from "../../index";
import BasketProducts from "../../components/BasketProducts";

const BasketPage = () => {

  const {product, basketProduct} = useContext(Context);
  const [basket, setBasket] = useState([]);
  const [priceByProduct, setPriceByProduct] = useState([]);

  // получаем список айдишников для покупки и фильтруем массив с продуктами по этим айдишникам получая массив продуктов в корзине
  const orderIds = basketProduct.basketProducts.map(i => Number(i))
  const productsToCheckout = orderIds.map((i) => {
    return product.products.find((j) => {
      return j.id === i
    });
  });

  useEffect(() => {
    setBasket(productsToCheckout)
  }, []);

  //считаем общую сумму
  // const totalPrice = basket.map(i => i.price).reduce((prev, cur) => {
  //   return prev + cur;
  // }, 0);

  const removeProduct = (id) => {
    let newBasket = basket.filter(i => i.id !== id);
    setBasket(newBasket);
  }


  const basketProductsToRender = basket.map(i => {
    return <BasketProducts key={i.id}
                           id={i.id}
                           name={i.name}
                           price={i.price}
                           img={process.env.REACT_APP_API_URL + i.img}
                           removeProduct={removeProduct}
            />
  });


  return (
    <div>
      <div className={styles.wrapper}>
        <div className="container">

          {
            basket.length === 0
              ?
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
              :
              <div className={`${styles.checkout} mt-5`}>
                <div className="row">
                  <div className="col-12">
                    <div onClick={() => console.log(priceByProduct)} className={styles.title}>
                      Оформление заказа
                    </div>

                    {basketProductsToRender}

                    <div className={`${styles.total} m-5`}>
                      <div className="row">
                        <div className="col-3 offset-9">
                          <span className={styles.totalPrice}>{12} руб.</span>
                          <button>Оформить заказ</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }

        </div>
      </div>
    </div>
  );
};

export default BasketPage;
