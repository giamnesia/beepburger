import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Fries1 from "../images/nuggetfries.png";
import Fries2 from "../images/fries2.png";
import Fries3 from "../images/fries3.png";

const CardExampleGroups = () => (
  <div className="fries">
    <h1>Fries</h1>
    <Card.Group className="cards">
      <Card>
        <Card.Content>
          <Image centered size="large" src={Fries1} />

          <Card.Header>Nugget Fries</Card.Header>
          <Card.Meta> $3.00</Card.Meta>
          <Card.Description>
            <li>Chicken Nugget</li>
            <li>Mozarella Cheese</li>
            <li>Dip-Sauce</li>
            <li style={{ visibility: "hidden" }}></li>
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
            src={Fries2}
            style={{ margin: "55px 0" }}
          />
          <Card.Header>Fries</Card.Header>
          <Card.Meta>$1.50</Card.Meta>
          <Card.Description>
            <li>Potato Fries</li>
            <li>Dip-Sauce</li>
            <li>Mozarella Cheese</li>
            <li style={{ visibility: "hidden" }}></li>
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
            src={Fries3}
            style={{ margin: "25px 0" }}
          />
          <Card.Header>Salted Fries</Card.Header>
          <Card.Meta>$1.00</Card.Meta>
          <Card.Description>
            <li>Potato Fries</li>
            <li>Cheese</li>
            <li>Dip-Sauce</li>
            <li style={{ visibility: "hidden" }}></li>
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
