import React from 'react';
import './App.css';
// import PropTypes from 'prop-types';

<<<<<<< HEAD
// class App extends Component {
//   render(){
//     return(
//       <h3>hello world!</h3>
//     )
//   }
// }

const foodArray = [
  {
    name: "item1",
    image: "https://www.placehold.it/300x300/aed",
    id: 0,
    rating: 5
  },
  {
    name: "item2",
    image: "https://www.placehold.it/300x300/eee",
    id: 1,
    rating: 3.2
  },
  {
    name: "item3",
    image: "https://www.placehold.it/300x300/fdd",
    id: 2,
    rating: 4.3
  },
  {
    name: "item4",
    image: "https://www.placehold.it/300x300/bcd",
    id: 3,
    rating: 3.5
=======
class App extends Component {
  render(){
    return(
      <h3>hello world! from notebook</h3>
    )
>>>>>>> 77d452af56c79a3ffad2e7ffa61692706c8facb8
  }
]


function Food({fav, src, rating}){
  return (
    <div className="food">
      <h3>I like {fav}</h3>
      <h4>{rating} / 5.0</h4>
      <img src={src} alt={fav}></img>
    </div>
    
  )
}
function renderFood(dish){
  return(
    <Food 
      fav={dish.name}
      key={dish.id}
      src={dish.image}
      alt={dish.name}
      rating={dish.rating} />
  )
}

function App(){
  return(
    <article>
      <h2>new contents!</h2>
      {foodArray.map(renderFood)}
    </article>
    
  )
} 

export default App;
