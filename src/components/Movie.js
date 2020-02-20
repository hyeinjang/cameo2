import React from 'react';
import Proptypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom';

function Movie({id, title, summary, poster, year, genres, posterLarge}){
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                id,
                title,
                summary,
                poster,
                year,
                genres,
                posterLarge
            }
        }}>
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
                    <p className="movie__summary">{summary.slice(0,200)}...</p>
                </div>
            </div>
        </Link>
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