import React, { useState } from "react";
import Header from "../headerActorLsit";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ actors, title, action }) {
  
  let displayedActors = actors;


  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={14}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;