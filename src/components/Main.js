import React from "react";
import Social from './Social'
import About from './About'
import Resto from './Resto'
import Burger from '../images/burger3.png'
import Cola from '../images/cola.png'
import {Link} from 'react-router-dom'

import { FaPizzaSlice, FaHamburger} from "react-icons/fa";
import { GiFrenchFries, GiChickenOven } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";

const Main = () => {
 
  return (
    
    <div className='main'>
         <div className="hero">
        
        <div className="text" data-aos="fade-up" data-aos-duration="800">
          <h4>GET YOUR BELLY FULL THS WEEKEND</h4>
          <h3 >THE BEEP</h3>
          <h1>BURGER</h1>
          
        </div>
        <div className="image" data-aos="fade-up" data-aos-duration="800">
          
          <img src={Burger}  className='burger' alt="" style={{ width: '200px' }} />
          <img src= {Cola}  style={{ width: '150px' }} className='cola'></img>
          
        </div>
        
      </div>
      <br></br>
      <About />
      <br></br>
      <Resto/>
      <br />
    
      <div className="icons">
              
              <h1 data-aos="fade-up" data-aos-duration="800">Best Seller</h1>
                  <ul>
                      <Link to='/pizza' >
                          <li data-aos="fade-up" data-aos-duration="800" ><FaPizzaSlice size={30} /> <br></br>Pizza </li>
                      </Link>
                      <Link to='/burger'>  <li data-aos="fade-up" data-aos-duration="800"> <FaHamburger size={30 } /><br></br>Burger</li>
                      </Link>
                <Link to='/fries'>
                  <li data-aos="fade-up" data-aos-duration="800"><GiFrenchFries  size={30 } /><br></br>Fries</li>
            </Link>
            <Link to='/chicken'>  <li data-aos="fade-up" data-aos-duration="800">  <GiChickenOven size={30 }/><br></br>Chicken</li>
            </Link>
            
            <Link to='/combo'>  <li data-aos="fade-up" data-aos-duration="800">  <IoFastFoodSharp size={30 }/><br></br>Combo</li>
            </Link>


              
              </ul>
          </div>
        
      <br></br>

      <Social/>
    </div>
  );
};

export default Main;
