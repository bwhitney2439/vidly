import React, { Component } from 'react';
import Movies from './movies';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link className="nav-item nav-link" to="/movies">Movies</Link>
    </div>
  </div>
</nav>
     );
}
 
export default NavBar;