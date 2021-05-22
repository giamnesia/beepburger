import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Combo1 from "../images/combo1.png";
import Combo2 from "../images/combo2.png";
import Combo3 from "../images/combo3.png";

const CardExampleGroups = () => (
  <div className="combo">
    <h1>Combos</h1>
    <Card.Group className="cards">
      <Card>
        <Card.Content>
          <Image
            centered
            size="large"
            src={Combo1}
            style={{ margin: "30px 0" }}
          />

          <Card.Header>Twister Box</Card.Header>
          <Card.Meta> $3.00</Card.Meta>
          <Card.Description>
            <li>1-pc Chicken</li>
            <li>Original Kentucky Mayo</li>
            <li>Chicken Fillet</li>
            <li>Regular Side, Fries, Drink</li>
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
            src={Combo2}
            style={{ margin: "30px 0" }}
          />
          <Card.Header>Signature Box</Card.Header>
          <Card.Meta>$2.50</Card.Meta>
          <Card.Description>
            <li>Cheese BUrger</li>
            <li>1-pc Chicken</li>
            <li>Rice</li>
            <li>Regular Side, Fries, Drink</li>
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
            src={Combo3}
            style={{ margin: "30px 0" }}
          />
          <Card.Header>Roller Box</Card.Header>
          <Card.Meta>$3.00</Card.Meta>
          <Card.Description>
            <li>Chicken Wrap</li>
            <li>1-pc Chicken</li>
            <li>Tortilla Wrap with Mayo</li>
            <li>Regular Side, Fries, Drink</li>
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
