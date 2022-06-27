import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
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
  );
}

export default App;
