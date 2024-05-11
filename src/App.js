import React from 'react';
 import { CssBaseline } from '@mui/material';
import {Routes, Route } from 'react-router-dom'
import useStyles from './components/styles'
import {Actors, Movies, MovieInfo, NavBar, Profile} from './components/index'

const App = () => {

  const classes = useStyles()
  
  return (
    <div className={classes.root}>
    <CssBaseline/>
    <NavBar />
    <main className={classes.content}>
      <div className={classes.toolbar}/>
    <Routes>
    
     <Route exact path='/' element ={<Movies />} />   
      <Route exact path='/actors/:id' element={<Actors />} />
      <Route exact path='/profile/:id' element={<Profile />} />
      <Route exact path='/movie/:id' element={<MovieInfo />}  />
    </Routes>
    </main>
    
    </div>
  )
   
  
}

export default App
