import React from "react";
// import { Link } from "react-router-dom";
import './App.css';
import luxury from './img/icon-luxury.svg'
import suvs from './img/icon-suvs.svg'
import sedans from './img/icon-sedans.svg'

function App() {
  return (
  <>
   <div class="container">
        <div class="container-1">
            <div class="card-1">
                <div class="card-img"><img src={sedans} alt=""/></div>
                <h5 class="card-heading">SEDANS</h5>
                <p class="card-text">
                    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                   or on your next road trip.
                </p>
                
                <button class="card-btn">
                    Learn More
                </button>
                
            </div>
            <div class="card-2 ">
                <div class="card-img"><img src={suvs} alt=""/></div>
                <h5 class="card-heading">SUVS</h5>
                <p class="card-text">
                    Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                    and off-road adventures.
                </p>
                <button class="card-btn">
                    Learn More
                </button>
                
            </div>
            <div class="card-3">
                <div class="card-img"><img src={luxury} alt=""/></div>
                <h5 class="card-heading">LUXURY</h5>
                <p class="card-text">
                    Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                    rental and arrive in style.
                </p>
                <button class="card-btn">
                    Learn More
                </button>
                
            </div>
        </div>

    </div>
  </>
  );
}

export default App;
