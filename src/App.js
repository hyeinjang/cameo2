import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie'





function Food({fav, src, rating}){
  return (
    <div className="food">
      <h3>I like {fav}</h3>
      <h4>{rating} / 5.0</h4>
      <img src={src} alt={fav}></img>
    </div>
    
  )
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
    console.log(movies);
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ) : ( movies.map(movie => {
             console.log(movie)
            return(
              <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              year={movie.year}
              genres={movie.genres}
              ></Movie>
             )
           })
          )
        }        
      </section>
    )
  }
}

export default App;
