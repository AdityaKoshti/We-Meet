import React from "react";

function Features() {
  return (
    <div>
      <>
        {/* Product feature */}
        <div className="container m-5 p-5" data-aos="fade-right">
          <div className="row">
            <div className="col d-flex align-items-center">
              <img
                src={require("../assets/images/wireframe.png")}
                alt="meeting"
                className="img-fluid"
              />
            </div>
            <div className=" col d-flex flex-column">
              <div className="p-2">
                <h1 className="display-4 text-center fw-bold">
                  Meet from anywhere
                </h1>
              </div>
              <div className="p-2">
                <p className="text-muted h5">
                  We-Meet is a web-based video calling app that lets you meet
                  with anyone, anywhere. Get the whole crew together in We-Meet,
                  where you can present business proposals, collaborate on
                  chemistry assignments, or just catch up face to face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Features;
