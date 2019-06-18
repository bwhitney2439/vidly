import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", numInStock: "", rate: "" },
    genres: [],
    errors: {}
  };

  componentDidMount() {
    this.setState({ genres: getGenres() });
  }

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    // genre: Joi.string()
    //   .required()
    //   .label("Genre"),
    numInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Rate")
  };

  doSubmit = () => {
    // call the server
    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select className="form-control">
              {this.state.genres.map(genre => (
                <option key={genre._id}>{genre.name}</option>
              ))}
            </select>
          </div>
          {/* {this.renderInput("genre", "Genre")} */}
          {this.renderInput("numInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
