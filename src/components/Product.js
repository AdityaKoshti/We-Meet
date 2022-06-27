import React from "react";

function Product() {
  return (
    <div>
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center justify-content-center">
          <div className="col">
            <img
              src={require("../assets/images/product feature.png")}
              alt="meeting"
              className="img-fluid"
            />
          </div>
          <div className="col">
            <img
              src={require("../assets/images/amico.png")}
              alt="meeting"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
