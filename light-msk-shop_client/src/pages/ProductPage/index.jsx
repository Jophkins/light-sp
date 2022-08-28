import React from 'react';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const product = {
    id: 1,
    name: 'Бра 1113/11 White',
    price: 27856,
    img: 'https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A1292AP-1AB.jpg'
  }
  const description = [
    {id:1, title: 'Диаметр см (D)', description: ''},
    {id:2, title: 'Цоколь (E)', description: 'E14'},
    {id:3, title: 'Место применения', description: 'коридор, гостиная, холл, кухня, спальня, ванная'},
    {id:4, title: 'Тип крепления', description: 'потолочное'}
  ]
  return (
    <div>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className={styles.leftSide}>
                <img className='img-fluid'
                     src={product.img}
                     alt=""/>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.rightSide}>
                <div className={styles.rightSideTitle}>
                  {product.name}
                  <hr/>
                </div>
                <div className={styles.rightSidePrice}>
                  <span className='price'>{(product.price).toLocaleString('ru')} руб.</span>
                  <div className={styles.rightSidePriceBtn}>
                    <input type="number" defaultValue={1} min={1}/>
                    <button>Добавить в корзину</button>
                    <button>Купить в один клик</button>
                  </div>
                  <hr/>
                  <div className="descTable">
                    <table>
                      <tbody>
                      {description.map(info =>
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
