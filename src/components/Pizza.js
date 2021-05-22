import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Pizza1 from "../images/pizza1.png";
import Pizza2 from "../images/pizza2.png";
import Pizza3 from "../images/pizza3.png";

const CardExampleGroups = () => (
  <div className="pizza">
    <h1>Pizza</h1>
    <Card.Group className="cards">
      <Card>
        <Card.Content>
          <Image
            centered
            size="large"
            src={Pizza1}
            style={{ margin: "0px 0" }}
          />

          <Card.Header>Cheesy Meat Pizza</Card.Header>
          <Card.Meta> $3.00</Card.Meta>
          <Card.Description>
            <li>Italian Sausage</li>
            <li>Mozarella Cheese</li>
            <li>Sliced Ham</li>
            <li>Ground Beef</li>
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
            src={Pizza2}
            style={{ margin: "33px 0" }}
          />
          <Card.Header>Pepperoni Pizza</Card.Header>
          <Card.Meta>$1.50</Card.Meta>
          <Card.Description>
            <li>Freshly Baked</li>
            <li>Bacon</li>
            <li>Pepperoni</li>
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
            src={Pizza3}
            style={{ margin: "56px 0" }}
          />
          <Card.Header>New York Style Pizza</Card.Header>
          <Card.Meta>$2.00</Card.Meta>
          <Card.Description>
            <li>Freshly Made Dough</li>
            <li>Cheese</li>
            <li>Pepperoni</li>
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
