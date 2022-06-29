import React from 'react'
import card from '../assets/images/card.png'


function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className="card-wrapper d-flex justify-content-center">
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
          <div className="card-wrapper d-flex justify-content-center">
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
            </div>
          </div>
          <div className="carousel-item  ">
          <div className="card-wrapper d-flex justify-content-center">
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
              <img src={card} className="d-block w-25 mx-4 px-4" alt="..." />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Carousel