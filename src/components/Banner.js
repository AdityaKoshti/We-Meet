import React from 'react'

import bannerImg from "../assets/images/landing.png";
const Banner = () => {
  return (
    <div>
      <header className="header">
        <img src={bannerImg}></img>
      </header>
    </div>
  );
};

export default Banner;
