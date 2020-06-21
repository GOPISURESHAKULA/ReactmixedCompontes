import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import Posts from "./posts";
import Profiles from "./profiles";
import Postitem from "./postitem";
import HOME from "./HOME.JS";

class Routing extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <header>
            <NavLink to="/" activeStyle={{ color: "" }}>Home</NavLink>
            <br />
            <NavLink to="/Posts" activeStyle={{ color: "red" }}activeClassName="selected">Posts</NavLink><br />
            <Link
              to={{
                pathname: "/Profiles",
                hash: "#AGS",
                search: "?/Profiles==true",
              }}
            >
              
              Profiles
            </Link>
            <br />
          
          </header>
          <hr />
          <Switch>
            <Redirect from="/Profiles" to="/" />
            <Route path="/Profiles" component={Profiles} />
            <Route path="/Posts/:id/:username" component={Postitem} />
            <Route path="/Posts" component={Posts} />
            <Route path="/" exact component={HOME} />

            <Route render={() => <h3>notfound</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routing;
