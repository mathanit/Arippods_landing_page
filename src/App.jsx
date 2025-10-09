import React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/navbar/Navbar"
import PrandName from "./pages/prandname/PrandName.jsx";
import Product from "./pages/product/Product.jsx";
import Future from "./pages/future/Future.jsx";
import Contact from "./pages/contact/Contact.jsx";


const isLoggedIn = false;

function App() {
  return (
    <div className="app">
    <Navbar/>
    <main>
    <Home/>
    <PrandName/>
    <Product/>
    <Future/>
    <Contact/>
    </main>
    </div>
    
  );
}

export default App;