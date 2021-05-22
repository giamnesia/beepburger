import React from "react";
import Social from './Social'
import About from './About'
import Location from './Location'
import Resto from './Resto'
import Burger from '../images/burger3.png'
import Cola from '../images/cola.png'
import {Link} from 'react-router-dom'
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import { FaPizzaSlice, FaHamburger} from "react-icons/fa";
import { GiFrenchFries, GiChickenOven } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    
    <div className='main'>
         <div className="hero">
        
        <div className="text" data-aos="fade-up">
          <h4>GET YOUR BELLY FULL THS WEEKEND</h4>
          <h3 >THE BEEP</h3>
          <h1>BURGER</h1>
          
        </div>
        <div className="image">
          
          <img src={Burger}  className='burger' alt="" style={{ width: '200px' }} />
          <img src= {Cola}  style={{ width: '150px' }} className='cola'></img>
          
        </div>
        
      </div>
      <br></br>
      <About />
      <div className="icons">
              
              <h1>Best Seller</h1>
                  <ul>
                      <Link to='pizza' >
                          <li ><FaPizzaSlice size={30} /> <br></br>Pizza </li>
                      </Link>
                      <Link to='burger'>  <li> <FaHamburger size={30 } /><br></br>Burger</li>
                      </Link>
                <Link to='fries'>
                  <li><GiFrenchFries  size={30 } /><br></br>Fries</li>
            </Link>
            <Link to='chicken'>  <li>  <GiChickenOven size={30 }/><br></br>Chicken</li>
            </Link>
            
            <Link to='combo'>  <li>  <IoFastFoodSharp size={30 }/><br></br>Combo</li>
            </Link>


              
              </ul>
          </div>
        
      <br></br>
      <Resto/>
      <br></br>
      <Location />
      <br></br>

      <Social/>
    </div>
  );
};

export default Main;
