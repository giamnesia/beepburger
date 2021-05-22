import React from "react";
import { Divider, Image, Card, Icon } from "semantic-ui-react";
import { GoLocation } from "react-icons/go";
import Model1 from "../images/model1.jpg";
import Model2 from "../images/model2.jpg";
import Model3 from "../images/model3.jpg";
import Model4 from "../images/model4.jpg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Location = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="location">
      <h1>
        Location <GoLocation />
      </h1>
      <Card
        data-aos="fade-up"
        data-aos-duration="800"
        className="cardloc"
        href=""
        header="BEEP BURGER"
        meta="BGC"
        description="Located in BGC Taguig, Metro Manila "
        style={{ width: "400px" }}
        color="yellow"
      />
      <Image.Group
        size="small"
        className="images"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Image src={Model1} data-aos="fade-up" data-aos-duration="800" />
        <Image src={Model2} data-aos="fade-up" data-aos-duration="800" />
        <Image src={Model3} data-aos="fade-up" data-aos-duration="800" />
        <Image src={Model4} data-aos="fade-up" data-aos-duration="800" />
      </Image.Group>
    </div>
  );
};

export default Location;
