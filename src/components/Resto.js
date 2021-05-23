import React from "react";
import Resto1 from "../images/resto1.jpg";
import Resto2 from "../images/resto2.jpg";
import Resto3 from "../images/resto3.jpg";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Image } from "semantic-ui-react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Resto = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="resto">
      <Link to="/beepburger/burger">
        <div className="cardresto" data-aos="fade-up" data-aos-duration="800">
          <img src={Resto1} />
          <div className="overlay">
            <h2>Double Burger Patty</h2>
            <h3>5/5</h3>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </Link>
      <Link to="/beepburger/fries">
        <div className="cardresto" data-aos="fade-up" data-aos-duration="900">
          <img src={Resto2} />
          <div className="overlay">
            <h2>French Fries</h2>
            <h3>4/5</h3>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        </div>
      </Link>
      <Link to="/beepburger/pizza">
        <div className="cardresto" data-aos="fade-up" data-aos-duration="1000">
          <img src={Resto3} />
          <div className="overlay">
            <h2>Pepperoni Pizza</h2>
            <h3>4/5</h3>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Resto;
