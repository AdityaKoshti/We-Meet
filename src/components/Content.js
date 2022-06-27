import React from 'react'

function Content() {
  return (
    <div>
      <>
        {/* Video calling easier than ever */}
        <div className="container m-4 p-2" data-aos="fade-up">
          <div className="row align-items-center justify-content-center">
            <div className="col">
              <img
                src="/assets/images/meeting.png"
                alt="meeting"
                className="img-fluid"
              />
            </div>
            <div className="col" data-aos="fade-up">
              <p className="text-center display-4 fw-bold">
                Video Calling easier than ever!
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Content