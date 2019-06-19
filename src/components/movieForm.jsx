import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie } from "../services/fakeMovieService";
class MovieForm extends Form {
  state = {
    data: { title: "", numberInStock: "", dailyRentalRate: "" },
    // data: {},
    errors: {}
  };

  componentDidMount() {
    // const data = { ...data };
    const { match, history } = this.props;
    const { liked, _id, genre, ...data } = getMovie(match.params.id);
    if (!data === null) this.setState({ data });

    // this.setState({ data });
  }

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Rate")
  };

  doSubmit = () => {
    // call the server
    // console.log(this.state.data);
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {/* <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select className="form-control">
              {this.state.genres.map(genre => (
                <option key={genre._id}>{genre.name}</option>
              ))}
            </select>
          </div> */}
          {/* {this.renderInput("genre", "Genre")} */}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
