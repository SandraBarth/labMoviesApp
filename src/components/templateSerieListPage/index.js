import React, { useState } from "react";
import Header from "../headerMovieList";
import SerieList from "../seriesList";
import Grid from "@mui/material/Grid";

function SerieListPageTemplate({ series, title, action }) {


  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
       
        <SerieList action={action} series={series}></SerieList>
      </Grid>
    </Grid>
  );
}
export default SerieListPageTemplate;