import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const signUp = (user) =>
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));

  const handleOnChange = (e) => {
    setError("");
    setSuccess("");
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { name, email, password };
    signUp(user).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(data.message);
        setError("");
        setName("");
        setEmail("");
        setPassword("");
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      {success}
    </div>
  );
  const showForm = () => (
    <div className="container-sm" data-aos="flip-right">
      <section className="vh-100 ">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100 bg-secondary m-5">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <div>
                    <h2 className="mt-5 mb-5 text-end p-2 text-white">
                      Sign Up
                    </h2>
                  </div>
                  <div>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i class="fa-brands fa-google"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-twitter" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-linkedin-in" />
                    </button>
                  </div>
                </div>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-white">Or</p>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label text-white" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label text-white" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label className="form-check-label text-white" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body text-white">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0 text-white">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger text-white">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
              {/* Copyright */}
              <div className="text-white m-0 p-0">
                Copyright © 2020. All rights reserved.
              </div>
              {/* Copyright */}
              {/* Right */}
              <div>
                {/* TODO - Changing links here */}
                <a href="#!" className="text-white me-4">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#!" className="text-white me-4">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#!" className="text-white me-4">
                  <i className="fa-brands fa-google"></i>
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              {/* Right */}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
  return (
    <div className="container-fluid m-0 p-0">
      {showError()}
      {showSuccess()}
      {showForm()}
    </div>
  );
};

export default SignUp;
