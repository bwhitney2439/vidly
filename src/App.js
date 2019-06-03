import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import MovieDetails from './components/moviedetails';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavBar />
      <div className="container" >
      <Switch>
      <Route exact path="/" component={Movies} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route 
      path="/movies" 
      render={props => <Movies sortBy="newest" {...props} />}
      />
      <Route path="/customers" component={Customers} />
      <Route path="/rentals" component={Rentals} />
      </Switch>
      </div>
      </div>
    </Router>
    );
  }
}

export default App;
