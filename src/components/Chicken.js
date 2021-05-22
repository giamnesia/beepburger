import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Chicken1 from "../images/chicken1.png";
import Chicken2 from "../images/chicken2.png";
import Chicken3 from "../images/chicken3.png";

const CardExampleGroups = () => (
  <div className="chicken">
    <h1>Chicken</h1>
    <Card.Group className="cards">
      <Card>
        <Card.Content>
          <Image
            centered
            size="large"
            src={Chicken1}
            style={{ margin: "50px 0" }}
          />

          <Card.Header>Fried Chicken</Card.Header>
          <Card.Meta> $3.00</Card.Meta>
          <Card.Description>
            <li>8-pc Chicken</li>
            <li>Dip-Sauce</li>
            <li>Free Rice</li>
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
            src={Chicken2}
            style={{ margin: "28px 0" }}
          />
          <Card.Header>Spicy Wings</Card.Header>
          <Card.Meta>$4.50</Card.Meta>
          <Card.Description>
            <li>Spicy garlic wings</li>
            <li>10-pc</li>
            <li>Dip-Sauce</li>
            <li>Rice</li>
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
            src={Chicken3}
            style={{ margin: "10px 0" }}
          />
          <Card.Header>Chicken Bucket</Card.Header>
          <Card.Meta>$5.00</Card.Meta>
          <Card.Description>
            <li>8-pc.Chicken</li>
            <li>Sauce</li>
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
