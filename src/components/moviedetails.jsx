import React, { Component } from 'react';

class MovieDetails extends Component {
    handleSave = () => {
        this.props.history.replace("/movies")
      };

    render() {
        return (
        <div>
        <h1>Movie Form {this.props.match.params.id} </h1>
        <button class="btn btn-primary" onClick={this.handleSave}>Save</button>
      </div>
     );
    } 
        
}
 
export default MovieDetails;