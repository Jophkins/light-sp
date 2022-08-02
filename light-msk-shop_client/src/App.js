import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import instagram from './assets/img/instagram.svg';
import whatsapp from './assets/img/whatsapp.svg';
import cartPlus from './assets/img/cartPlus.svg';
import cartAdded from './assets/img/cartAdded.svg';
import favoritePlus from './assets/img/favoritePlus.svg';
import favoriteChecked from './assets/img/favoriteChecked.svg';
import visaLogo from './assets/img/visa.jpg';
import mcLogo from './assets/img/mastercard.png';


function App() {
  return (

    <div className="wrapper">

      <header className="mainHeader clear">
        <div className="container mainHeaderContainer">
          <ul className="mainHeaderTitles">
            <li>Доставка и оплата</li>
            <li>О нас</li>
            <li>Магазины</li>
            <li>Контакты</li>
          </ul>
          <ul className="mainHeaderTitles">
            <li>Избранное</li>
            <li>Корзина</li>
          </ul>
        </div>
      </header>

      <div className="secondHeader">
        <div className="container secondHeaderContainer">
          <div className="secondHeaderLogo">
            <img className="img-fluid"
                 src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfU37Tb+VNUx0jWq2c8MnRfqQ1hhnx00v9i9f08LRUF4lkdxkpWM4NohSV9VIkVhR1g...j2baNUcBTcjkW9HWug="
                 alt=""/>
          </div>
          <div className="secondHeaderContacts">
            <div className="socials">
              <img width={40} src={instagram} alt=""/>
              <img width={40} src={whatsapp} alt=""/>
            </div>
            <div className="phone">
              <b>+9 (999) 999-99-99</b>
              <p>Без выходных</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="sideWrapper clear">
                <input type="text" placeholder="Поиск"/>
                <ul className="lamps">
                  <li>Все люстры</li>
                  <li>Бра</li>
                  <li>Настольные Лампы</li>
                  <li>Торшеры</li>
                  <li>Другие светильники</li>
                </ul>
              </div>
            </div>
            <div className="col-9">

              <div className="contentWrapper">

                <div className="slider">

                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                              className="active" aria-current="true" aria-label="Slide 1"/>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                              aria-label="Slide 2"/>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                              aria-label="Slide 3"/>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="https://regionsveta.ru/website/img/new/magiya_sveta_2.jpg"
                          className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://stroom.ru/image/catalog/Blog-stati/new-stroom-blog/italianskie-lustry-iz-italii.jpg"
                          className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://www.boredpanda.com/blog/wp-content/uploads/2014/07/creative-lamps-chandeliers-fb.jpg"
                          className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"/>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"/>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

                </div>

                <div className="banners">
                  <div className="row">
                    <div className="col-6 bannersWrapper">
                      <img className="img-fluid"
                           src="https://sankt-peterburg.theretro.ru/upload/iblock/ca3/1920s-odeon-glass-fringe-chandelier-s-foto-6.jpg"
                           alt=""/>
                      <div className="bannerContent">
                        <div className="bannerContentTitle">
                          БАННЕР С ТЕКСТОМ
                        </div>
                      </div>
                    </div>
                    <div className="col-6 bannersWrapper">
                      <img className="img-fluid"
                           src="https://avatars.mds.yandex.net/i?id=2a00000179e760755e3a65d07d5b2f5ca9b4-4349183-images-thumbs&n=13&exp=1"
                           alt=""/>
                      <div className="bannerContent">
                        <div className="bannerContentTitle">
                          БАННЕР С ТЕКСТОМ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cardWrapper">
                  <div className="cardTitle">
                    <h2>Новинки</h2>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoriteChecked} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartAdded} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoriteChecked} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartAdded} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cardWrapper">
                  <div className="cardTitle">
                    <h2>Потолочные люстры</h2>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoriteChecked} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartAdded} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                      <div className="cardItem">
                        <div className="cartItemFavorite">
                          <img width={50} src={favoritePlus} alt="Favorite"/>
                        </div>
                        <img className="img-fluid"
                             src="https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg"
                             alt=""/>
                        <h5>Люстра 1111/11 White</h5>
                        <div className="cardItemBottom">
                          <div>
                            <b>12 999 руб.</b>
                          </div>
                          <button>
                            <img src={cartPlus} alt="Plus"/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contentDescription">
                  <div className="row">
                    <div className="col-12">
                      <div className="contentDescriptionBanner">
                        <img className="img-fluid" src="https://butterflylc.store/image/cache/catalog/m6-1200x571.jpg"
                             alt=""/>
                      </div>
                      <div className="contentDescriptionText">
                        <p>
                          Вы задумываетесь о том, где купить люстру, настенный или потолочный светильник? Посетите наш
                          интернет-магазин, выбирайте красивые люстры для любых интерьеров. Каталог наполнен изысканными
                          и современными светильниками, а весь предложенный товар есть в наличии.
                        </p>
                        <b>Ассортимент товара</b>
                        <p>
                          Наш интернет-магазин люстр предлагает широкий ассортимент осветительных приборов. В каталоге
                          есть светильники, оформленные в классическом стиле. Прекрасным выбором станут модели в стиле
                          арт-деко. Можно отдать предпочтение люстрам, оформленным в стиле американской классики.
                        </p>
                        <b>Широкий ассортимент товара включает:</b>
                        <ul>
                          <li>стеклянные, хрустальные и другие люстры;</li>
                          <li>бра разных цветов;</li>
                          <li>настольные лампы;</li>
                          <li>торшеры;</li>
                          <li>элегантные светильники с абажурами.</li>
                        </ul>
                        <p>
                          Распродажа светильников позволяет покупателям выгодно приобретать модели из лучших коллекций
                          российских и европейских брендов. Интернет-магазин люстр - подходящее место для покупки
                          осветительной техники.
                        </p>
                        <b>Наши преимущества</b>
                        <p>
                          Мы закупаем качественные запчасти из Италии, собираем люстры в Москве. Любая люстра может быть
                          собрана по индивидуальному размеру, на этот процесс уходит максимум 3 дня.
                          <br/><br/>

                          Одно из наших преимуществ - бесплатная доставка люстр и светильников по Москве.
                          Транспортировка осветительной техники в пределах 30 км от МКАД тоже может быть бесплатной.
                          Доставка люстр выполняется бесплатно при условии заказа на сумму от 50000 рублей.
                        </p>
                        <b>Покупка товаров в нашем интернет-магазина дает клиентам такие выгоды:</b>
                        <ul>
                          <li>широкий ассортимент осветительной техники;</li>
                          <li>возможность приобрести изделия лучших европейских брендов;</li>
                          <li>разные способы оплаты заказа;</li>
                          <li>услуги сборки светильников по индивидуальным размерам;</li>
                          <li>высокое качество предложенной продукции.</li>
                        </ul>
                        <p>
                          Если вам сложно определиться с моделью осветительной техники, то это не проблема. Опытные
                          специалисты дадут советы по выбору светильников, предложат вам оптимальный вариант.
                          <br/><br/>

                          В нашем онлайн-магазине вы найдете светильники всех стилей, форм. Для заказа товара достаточно
                          заполнить простую онлайн-форму, связаться с менеджером. Желаем вам выгодных покупок!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer clear">
        <div className="container footerContainer">
          <div className="row">
            <div className="col-3">
              <div className="title">
                Наш магазин
              </div>
              <ul className="footerDesc">
                <li>Доставка и оплата</li>
                <li>О нас</li>
                <li>Магазины</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div className="col-3">
              <div className="title">
                Каталог
              </div>
              <ul className="footerDesc">
                <li>Все люстры</li>
                <li>Бра</li>
                <li>Настольные Лампы</li>
                <li>Торшеры</li>
                <li>Другие светильники</li>
              </ul>
            </div>
            <div className="col-3">
              <div className="title">
                Способ оплаты
              </div>
              <div className="footerDesc">
                <div className="paidServices">
                  <img src={visaLogo} alt="Visa"/>
                  <img src={mcLogo} alt="MasterCard"/>
                </div>
                <div className="lowDesc">
                  Вы можете оплатить покупки наличными при получении, либо выбрать другой способ оплаты.
                </div>
                <div className="license">
                  Пользовательское соглашение
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="title">
                Контакты
              </div>
              <div className="footerDesc">
                <div className="footerDescPhone">
                  +9 (999) 999-99-99
                </div>
                <div className="footerDescEmail">
                  light@gmail.com
                </div>
                <div className="footerDescSocials">
                  Instagram
                  WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
