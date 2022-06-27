import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <Content />
      <Carousel />
    </div>
  );
}

export default App;
