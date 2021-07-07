import React from "react";
import { Card } from "semantic-ui-react";

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
  return <Card.Group items={items} />;
};

export default About;
