import { tmdbApi } from "../components/Services/TMDB";
import { configureStore,  getDefaultMiddleware } from "@reduxjs/toolkit";
import genreOrCategoryReducer from '../Features/CurrentGenreOrCategory'
import userReducer from '../Features/auth'

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenresOrCategory :genreOrCategoryReducer,
    user: userReducer
  },
  middleware:(getDefaultMiddleware) =>
 getDefaultMiddleware().concat(tmdbApi.middleware)
});
