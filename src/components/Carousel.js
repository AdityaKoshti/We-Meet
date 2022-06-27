import React from "react";

function Carousel() {
  return (
    <div>
      <>
        {/* Multi Carousel */}
        <section id="Multi Carousel" data-aos="fade-down">
          {/* TODO - change images links here */}
          <div className="container-fluid text-center my-3">
            <div className="row mx-auto my-auto justify-content-center">
              <div
                id="recipeCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="col-md-3">
                      <div className="card-img">
                        <img
                          src="src/assets/images/card.png"
                          className="img-fluid custom-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                      <div className="card-img">
                        <img
                          src="src/assets/images/card.png"
                          className="img-fluid custom-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Carousel;
