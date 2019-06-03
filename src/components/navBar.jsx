import React, { Component } from 'react';
import Movies from './movies';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Vidly</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
        <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
        <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
      </div>
  </div>
</nav>
     );
}
 
export default NavBar;