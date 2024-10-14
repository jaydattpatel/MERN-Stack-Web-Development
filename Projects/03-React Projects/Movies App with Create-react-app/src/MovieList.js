import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props){

    const {movies, onIncStars, onDecStars, onClickFav, onClickAddtocart} =  props;
        
    return(
        <div className="main">
            {movies.map((movie,index) => (
            <MovieCard movies = {movie}
                        key = {index}
                        onIncStars = {onIncStars}
                        onDecStars = {onDecStars}
                        onClickFav = {onClickFav}
                        onClickAddtocart = {onClickAddtocart}/>

        ))}              
        </div>
    )
}


export default MovieList;