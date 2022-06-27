import React from "react";
import logo from "../assets/images/logo.svg";
function Footer() {
  return (
    <div>
      <>
        {/* Footer */}
        <footer>
          <h1 className="display-5 fw-bold text-black m-5">
            <img src={logo} alt="logo" className="img-fluid" />
            We-Meet
          </h1>
          <div
            className="container-fluid bg-primary text-white text-center"
            data-aos="zoom-in"
          >
            <div className="row bg-primary d-flex align-items-center justify-content-center">
              <div className="col m-2 p-5">
                <h1 className="text-white">Experience more together</h1>
              </div>
              <div className="col text-white m-2 p-5 ">
                Stay connected with reliable HD meetings and unlimited
                one-on-one and group video sessions.
              </div>
              <div className="col m-2 p-5">
                <button className="btn btn-secondary text-white fw-bold mx-2 ">
                  Start Meet
                </button>
                <button className="btn btn-secondary text-white fw-bold mx-2">
                  Join Meet
                </button>
              </div>
              <h6 className="fw-bold text-white text-center">
                Created with ♥ by - Adarsh , Pranav, Aditya Koshti , Aniket
              </h6>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}

export default Footer;
