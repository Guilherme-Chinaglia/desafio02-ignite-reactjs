import React from "react"
import { MovieCard } from "./MovieCard"

interface ContentProps {
  movies: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[],
  genreResponseProps: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[],
  selectedGenreId: number
}

export function Content(props :ContentProps) {
  // Complete aqui
  return (
      <div className="container">
        <header>
          <span className="category">Categoria: 
            <span> 
              {
                props.genreResponseProps.map(titleCategory => (
                  titleCategory.id === props.selectedGenreId && titleCategory.title  
                ))
              }
            </span>
          </span>
        </header>

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
      )
}