import React from 'react'
import { Grid } from'@mui/material';
import useStyle from './style'
import {Movie} from '..'

const MovieList = ({movies, numberOfMovies}) => {

    const classes = useStyle()
  return (
    <Grid container className={classes.movieContainer}>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
       <Movie key={i} movie ={movie} i = {i} />
      ))}  
    </Grid>
    
  )
}

export default MovieList