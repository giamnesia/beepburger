import React from "react";
import { Card } from "semantic-ui-react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const items = [
  {
    header: "Best Burger in 2020",
    description:
      "Dominated the Food Industry by being the Best Burger in Manila",
    meta: "Award",
  },
  {
    header: "Top Quality Ingredients ",
    description: "Bring to the table top ingredients from all-around the world",
    meta: "Quezon City",
  },
  {
    header: "Best Pizza Award",
    description: "Categorize as one of the Best Pizza in the Philippines",
    meta: "BGC",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return <Card.Group data-aos="fade-up" items={items} />;
};

export default About;
