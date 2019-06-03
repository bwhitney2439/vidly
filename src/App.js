
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/navBar";
import MovieDetails from './components/moviedetails';
import NoMatch from './components/nomatch';
import "./App.css";

class App extends Component {
  render() {
    return (
<Router>
  <React.Fragment>
  <NavBar />
  
  <main className="container">
  <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
            <Route 
            path="/movies" 
            render={props => <Movies sortBy="newest" {...props} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/nomatch" component={NoMatch} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/nomatch" />
          </Switch>
    
  </main>

  </React.Fragment>

  
      </Router>


    );
  }
}

export default App;
