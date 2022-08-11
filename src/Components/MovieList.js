
import React from 'react';
import  MovieCard  from './MovieCard';
import "./Movie.css";
const MovieList = ({movieName,titleSearch,ratingSearch}) => {
    
    return (
        <>
            <div  style={{display: 'flex',flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
            {movieName
               .filter ((film) =>
               ratingSearch === 0 ?
                film.title.toLowerCase().includes(titleSearch.toLowerCase()):
                Number(film.rating) === ratingSearch && film.title.toLowerCase().includes(titleSearch.toLowerCase())

                     
                      
                        )
                    .map((movie) => (
                        <div className="card"  >
                        <MovieCard movieName={movieName}            movie={movie} key={movie.id}   />
                        </div>
                        
                        ))}
            </div>
            
        </>
    )
    };

export default MovieList;