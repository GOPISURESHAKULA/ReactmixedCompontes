import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import LifeCycle from "./Lifecycle/LifeCycle";
import Routing from "./Routing/Rounting";
import REFANDDOM from "./ReactRefandpurecomponent/REFANDDOM";
import Searchkeyword from "./SearchwordModel/Searchkeyword";
import TourList from "./ReactDeleteComponest/TourList";
import Reactcsstyling from "./ReactCssModel/Reactcsstyling";
import ReactCRUDModel from "./ReactCRUDModel/ReactCRUDModel";
import ReactAPIModel from "./ReactAPIModel/ReactAPIModel";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <header>
            <NavLink to="/" >LifeCycle</NavLink>
            <NavLink to="/Routing">Routing</NavLink> 
            <NavLink to="/REFANDDOM">REFANDDOM</NavLink>
            <NavLink to="/Searchkeyword">Searchkeyword</NavLink>
            <NavLink to="/TourList">TourList</NavLink>
            <NavLink to="/Reactcsstyling">Reactcsstyling</NavLink>
            <NavLink to="/ReactCRUDModel">ReactCRUDModel</NavLink>
            <NavLink to="/ReactAPIModel">ReactAPIModel</NavLink>
          </header>
          <hr />
          <Switch>
            <Route path="/" exact component={LifeCycle} />        
             <Route path="/Routing"  component={Routing} />         
            <Route path="/REFANDDOM"  component={REFANDDOM} />
            <Route path="/Searchkeyword"  component={Searchkeyword} />
            <Route path="/TourList"  component={TourList} />
            <Route path="/Reactcsstyling"  component={Reactcsstyling} />
            <Route path="/ReactAPIModel"  component={ReactAPIModel} />
            <Route render={() => <h3>notfound</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
