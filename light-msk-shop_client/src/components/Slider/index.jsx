import React from 'react';

const Slider = () => {
  return (
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
  );
};

export default Slider;
