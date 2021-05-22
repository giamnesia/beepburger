import React from "react";
import { Dropdown, Breadcrumb } from "semantic-ui-react";
import Logo from "../images/burgerlogo.png";
import { Link } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";

const DropdownExampleClearable = () => (
  <div className="navbar">
    <nav id="nav">
      <ul>
        <Link to="/">
          <li className="logo">
            <img src={Logo}></img>
          </li>
        </Link>
        <Link to="/">
          <Breadcrumb className="home">
            <Breadcrumb.Section>HOME</Breadcrumb.Section>
            <Breadcrumb.Divider />
          </Breadcrumb>
        </Link>
        <Dropdown
          placeholder="Select"
          selection
          className="dropdown"
          style={{ width: "25px" }}
        >
          <Dropdown.Menu>
            <Link to="pizza">
              <Dropdown.Item>Pizza</Dropdown.Item>
            </Link>
            <Link to="burger">
              <Dropdown.Item>Burger</Dropdown.Item>
            </Link>
            <Link to="fries">
              <Dropdown.Item>Fries</Dropdown.Item>
            </Link>

            <Link to="chicken">
              <Dropdown.Item>Chicken</Dropdown.Item>
            </Link>
            <Link to="combo">
              <Dropdown.Item>Combo</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </nav>
  </div>
);

export default DropdownExampleClearable;
