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
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Navbar} />
        <Route path="/beepburger" exact component={Main} />
        <Route path="/pizza" component={Pizza} />
        <Route path="/burger" component={Burger} />
        <Route path="/fries" component={Fries} />
        <Route path="/chicken" component={Chicken} />
        <Route path="/combo" component={Combo} />
      </Router>

      <a href="#nav">
        <FaArrowCircleUp className="arrow" />
      </a>
    </div>
  );
}

export default App;
