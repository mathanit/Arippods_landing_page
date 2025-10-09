import React from "react";
import './Home.css'
import man from '../assets/img/manbackgroundjpg.png'
import leftaripods from '../assets/img/aripod-left.png'
import rightaripods from '../assets/img/aripod-right.png'
import { motion,AnimatePresence } from "framer-motion";
import { div, image } from "framer-motion/client";
function Home() {
  return (
    <div className="homesection">

    <div className="Home" id="home">
      <div className="man">
      <img src={man} alt="" />
      </div>
      <div className="aripods">
     <img className="left" src={leftaripods} alt="" />
     <div className="logo-name">
      <span>ARIPODS</span>
      </div>
     <img className="right" src={rightaripods} alt="" /> 
      </div>
    </div>
    </div>
  );
}

export default Home;