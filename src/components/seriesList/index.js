import React from "react";
import Serie from "../serieCard";
import Grid from "@mui/material/Grid";

const SerieList = ( {series, action }) => {
  let serieCard = series.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Serie key={m.id} series={m} action={action} />
    </Grid>
  ));
  return serieCard;
};

export default SerieList;