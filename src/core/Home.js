import React from "react";
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Product from '../components/Product';
import Footer from '../components/Footer';

const Home = () => (
    <div>
        <div className="App">
            <Navbar />
            <Banner />
            <Content />
            <Carousel />

            <Product />
            <Features />
            <Features />
            <Features />
            <Features />

            <Footer />
        </div>
    </div>
);

export default Home;