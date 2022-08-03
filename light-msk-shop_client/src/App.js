import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from "./components/MainNavbar";
import SecondNavbar from "./components/SecondNavbar";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";


function App() {
  return (

    <div className="wrapper">

      <MainNavbar/>

      <SecondNavbar/>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Sidebar/>
            </div>
            <div className="col-12 col-lg-9">

              <div className="contentWrapper">

                <Slider/>

                <div className="banners">
                  <div className="row">
                    <div className="col-6">
                      <Banner imgUrl='https://sankt-peterburg.theretro.ru/upload/iblock/ca3/1920s-odeon-glass-fringe-chandelier-s-foto-6.jpg' />
                    </div>
                    <div className="col-6">
                      <Banner imgUrl='https://avatars.mds.yandex.net/i?id=2a00000179e760755e3a65d07d5b2f5ca9b4-4349183-images-thumbs&n=13&exp=1' />
                    </div>
                  </div>
                </div>

                <div className="cardWrapper">
                  <div className="cardTitle">
                    <h2>Новинки</h2>
                  </div>
                  <div className="row">
                    <Card imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'
                          isFavorite={false} isAddedToCart />
                    <Card imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'
                          isFavorite isAddedToCart={false} />
                    <Card imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'
                          isFavorite={false} isAddedToCart={false} />
                    <Card imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'
                          isFavorite isAddedToCart={false} />
                    <Card imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'
                          isFavorite={false} isAddedToCart />
                    <Card imgUrl='https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/638012308.jpg'
                          isFavorite={false} isAddedToCart={false} />
                  </div>
                </div>

                <div className="cardWrapper">
                  <div className="cardTitle">
                    <h2>Потолочные люстры</h2>
                  </div>
                  <div className="row">
                    <Card imgUrl='https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg'
                          isFavorite={false} isAddedToCart={false} />
                    <Card imgUrl='https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg'
                          isFavorite={false} isAddedToCart={false} />
                    <Card imgUrl='https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg'
                          isFavorite isAddedToCart={false} />
                    <Card imgUrl='https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg'
                          isFavorite={false} isAddedToCart={false} />
                    <Card imgUrl='https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg'
                          isFavorite isAddedToCart />
                    <Card imgUrl='https://colorsvet.ru/images/sale/product/8684_21365-consul-venge.jpg'
                          isFavorite={false} isAddedToCart />
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

      <Footer />

    </div>
  );
}

export default App;
