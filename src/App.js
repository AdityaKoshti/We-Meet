import './App.css';
import React,{useEffect} from 'react'
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration : 500
    });
  }, []);

  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>

  );
}

export default App;
