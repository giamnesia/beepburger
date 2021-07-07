import "./App.css";
import Main from "./components/Main";
import Pizza from "./components/Pizza";
import Burger from "./components/Burger";
import Fries from "./components/Fries";
import Chicken from "./components/Chicken";
import Combo from "./components/Combo";
import Navbar from "./components/Navbar";
import "./styles/styles.css";
import { FaArrowCircleUp } from "react-icons/fa";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/beepburger">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/pizza" exact component={Pizza} />
          <Route path="/burger" exact component={Burger} />
          <Route path="/fries" exact component={Fries} />
          <Route path="/chicken" exact component={Chicken} />
          <Route path="/combo" exact component={Combo} />
        </Switch>
      </Router>

      <a href="#nav">
        <FaArrowCircleUp className="arrow" />
      </a>
    </div>
  );
}

export default App;
