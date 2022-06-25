import React from 'react'

function Navbar() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      {/* <!-- We-Meet text to right 2 buttons - Start meet , join meet at right --> */}

        <nav className="navbar navbar-expand-lg my-2 py-2">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h1 className="display-5 fw-bold text-black">
                <img src="/assets/images/logo.svg" alt='We-Meet' />
                We-Meet
              </h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-primary text-white fw-bold mx-2 ">Start Meet</button>
                <button className="btn btn-secondary text-white fw-bold mx-2">Join Meet</button>

              </form>
            </div>
          </div>
        </nav>

    </div>
  )
}

export default Navbar