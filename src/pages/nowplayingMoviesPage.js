import React  from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPlayingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const NowPlayingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('playing', getPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  // Redundant, but necessary to avoid app crashing.
 
  return (
    <PageTemplate
      title="Now playing Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default NowPlayingMoviesPage;