import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from "./moviesData"
import React from "react";

export default class App extends React.Component{
  constructor(){
    super();
    //Creating the state object 
    this.state = {
        movies : movies,
        cartCount: 0
    } 
  }

  handleAddStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars <5){
      movies[movieId].stars += 0.5
  }

  this.setState({
      movies
  });
  }

  handleDecStars = (movie)=>{
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  if(movies[movieId].stars > 0){
      movies[movieId].stars -= 0.5;
  }

  this.setState({
      movies
  })

  }

  handleToggleFav = (movie)=> {
  const {movies} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].fav = !movies[movieId].fav;

  this.setState({
      movies
  })
  }

  handleAddtocart = (movie)=> {
  let {movies,cartCount} = this.state;
  const movieId = movies.indexOf(movie);

  movies[movieId].isInCart = !movies[movieId].isInCart;

  if(movies[movieId].isInCart){
    cartCount =  cartCount+1;
   }
   else{
     cartCount =  cartCount-1;
   }
   
   this.setState({
     movies,
     cartCount
   })
  }

  render(){
    const {movies,cartCount} = this.state;
    return(
      <>
      <Navbar cartCount={cartCount}/>
      <MovieList movies ={movies}
                 onIncStars = {this.handleAddStars}
                 onDecStars = {this.handleDecStars}
                 onClickFav = {this.handleToggleFav}
                 onClickAddtocart = {this.handleAddtocart}/>
      </>

    )
  }
}