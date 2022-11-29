import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateSerieListPage";
import { getSeries } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const SeriesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('series', getSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const series = data.results;
  // Redundant, but necessary to avoid app crashing.
 
  return (
    <PageTemplate
      title="TV Shows"
      series={series}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default SeriesPage;