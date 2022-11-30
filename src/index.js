import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import MoviesContextProvider from "./contexts/moviesContext";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
// import { Link } from 'react-router-dom';
import SiteHeader from './components/siteHeader'; 
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorsPage from "./pages/actorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import SeriesPage from "./pages/seriesPage";
import NowPlayingMoviesPage from "./pages/nowplayingMoviesPage";
import SerieDetailsPage from "./pages/serieDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <SiteHeader />      {/* New Header  */}
      <MoviesContextProvider>
      <Routes>
        <Route direct path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/reviews/:id" element={<MovieReviewPage />} />
        <Route path = "/movies/upcoming" element = {<UpcomingMoviesPage /> } /> 
        <Route path = "/movies/playing" element = {<NowPlayingMoviesPage /> } /> 
        <Route path = "/reviews/forms" element = {<AddMovieReviewPage/>} />
        <Route path = "/actors" element = {<ActorsPage />} /> 
        <Route path="/actors/:id" element={<ActorDetailsPage />} />
        <Route path="/series" element = {<SeriesPage /> } /> 
        <Route path="/series/:id" element={<SerieDetailsPage />} />


      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);