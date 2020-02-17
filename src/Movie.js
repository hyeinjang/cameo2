import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css';

function Movie({id, title, summary, poster, year, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    year: Proptypes.number.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
}

export default Movie;