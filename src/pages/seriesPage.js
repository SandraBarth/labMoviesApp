import React from "react";
import PageTemplate from "../components/templateSerieListPage";
import { getSeries } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

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
      title="Discover TV Shows"
      series={series}
    />
  );
};
export default SeriesPage;