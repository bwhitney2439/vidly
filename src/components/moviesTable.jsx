import React, { Component } from 'react';
import TableHeader from './common/tableHeader'
import TableBody from './common/tableBody'

import Liked from "./liked";


class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title'},
    { path: 'genre.name', label: 'Gentre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},
    { key: 'like', content: movie => <Liked liked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
    { key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} type="button" className="btn btn-danger" >Delete</button>},
  ];
  
  render() { 
      const {movies, onDelete, onLike, onSort, sortColumn} = this.props;

    return (  
      
    <table className="table">
      <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
      <TableBody columns={this.columns} data={movies} />
    </table> 
  );
  }
}

export default MoviesTable;