import React, { Component } from "react";

const MovieDetails = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.id} </h1>

      <button class="btn btn-primary" onClick={() => history.push("/movies")}>
        Save
      </button>
    </div>
  );
};

export default MovieDetails;
