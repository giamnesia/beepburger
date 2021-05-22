import "./App.css";
import Main from "./components/Main";
import Pizza from "./components/Pizza";
import Burger from "./components/Burger";
import Fries from "./components/Fries";
import Chicken from "./components/Chicken";
import Combo from "./components/Combo";
import Navbar from "./components/Navbar";
import "./styles/styles.css";
import { Link } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/pizza" component={Pizza} />
          <Route path="/burger" component={Burger} />
          <Route path="/fries" component={Fries} />
          <Route path="/chicken" component={Chicken} />
          <Route path="/combo" component={Combo} />
        </Switch>
      </Router>

      <a href="#nav">
        <FaArrowCircleUp className="arrow" />
      </a>
    </div>
  );
}

export default App;
