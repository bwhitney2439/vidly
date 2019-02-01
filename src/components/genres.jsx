import React from "react";

const Genres = props => {
  const { genres, valueProperty, textProperty } = props;
  const allGenres = "All Genres";
  return (
    <ul className="list-group">
           {genres.map(genre => (
        <li
          key={genre[valueProperty]}
          className={
            genre === props.currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onGenreChange(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
