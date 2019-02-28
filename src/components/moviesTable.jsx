import React, { Component } from 'react';
import TableHeader from './common/tableHeader'


import Liked from "./liked";


class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title'},
    { path: 'genre.name', label: 'Gentre'},
    { path: 'numberInStock', label: 'Stock'},
    { path: 'dailyRentalRate', label: 'Rate'},
    { key: 'like' },
    { key: 'delete'},
  ];
  
  render() { 
      const {movies, onDelete, onLike, onSort, sortColumn} = this.props;

    return (  
      
    <table className="table">
    <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort}/>
    <tbody>
      {movies.map(movie => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            {
              <Liked
                liked={movie.liked}
                onClick={() => onLike(movie)}
              />
            }
          </td>
          <td>
            {
              <button
                onClick={() => onDelete(movie)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            }
          </td>
        </tr>
      ))}
    </tbody>
  </table> 
  );
  }
}

export default MoviesTable;