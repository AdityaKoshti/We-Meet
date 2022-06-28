import './App.css';
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>

  );
}

export default App;
