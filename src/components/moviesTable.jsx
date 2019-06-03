import React, { Component } from 'react';
import Table from './common/table';
import Liked from "./liked";
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
    { path: 'genre.name', label: 'Genre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},
    { key: 'like', content: movie => <Liked liked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
    { key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} type="button" className="btn btn-danger" >Delete</button>},
  ];
  
  render() { 
      const {movies, onSort, sortColumn} = this.props;

    return (  
      <Table 
        columns={this.columns} 
        data={movies} 
        onSort={onSort} 
        sortColumn={sortColumn} 
       />
    
  );
  }
}

export default MoviesTable;