import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { FaArrowUp } from "react-icons/fa";
import Burger from "../images/burger3.png";
import Burger2 from "../images/burger2.png";

import Burger3 from "../images/burger4.png";
const CardExampleGroups = () => (
  <div className="burgers">
    <h1>Burgers</h1>

    <Card.Group className="cards">
      <Card>
        <Card.Content>
          <Image centered size="large" src={Burger} />

          <Card.Header>Cheese Burger </Card.Header>
          <Card.Meta> $3.00</Card.Meta>
          <Card.Description>
            <li>Double Patty</li>
            <li>Mozarella Cheese</li>
            <li>Bacon</li>
            <li>Egg</li>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button color="orange">Buy</Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image centered size="large" src={Burger2} />
          <Card.Header>Beef Burger</Card.Header>
          <Card.Meta>$5.00</Card.Meta>
          <Card.Description>
            <li>Angus Beef</li>
            <li>Bacon</li>
            <li>Double Egg</li>
            <li>Mozarella Cheese</li>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button color="orange">Buy</Button>
          </div>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image
            centered
            size="large"
            src={Burger3}
            style={{ margin: "35px 0" }}
          />
          <Card.Header>Veggie Burger</Card.Header>
          <Card.Meta>$2.50</Card.Meta>
          <Card.Description>
            <li>Veggie Patty</li>
            <li>Egg</li>
            <li>Cheese</li>
            <li>Mushroom</li>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button color="orange">Buy</Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
);

export default CardExampleGroups;
