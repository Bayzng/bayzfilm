import React, {useState, useEffect}from 'react'
import { TextField, InputAdornment } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { searchMovie } from '../../Features/CurrentGenreOrCategory'

import useStyle from './styles'

const Search = () => {
  const classes = useStyle()
  const dispatch = useDispatch();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query))
    }
  }

  if (location.pathname !== '/') return null;
  return (
    <div className={classes.searchContainer}>
      <TextField
      onKeyPress={handleKeyPress}
      onChange={(e) => setQuery (e.target.value)}
      value={query} 
      variant='standard'
      InputProps={{
        className: classes.input,
        startAdornment:(
          <InputAdornment position='start'>
            <SearchIcon /> 
          </InputAdornment>
        )
      }}/>
    </div>
  )
}

export default Search