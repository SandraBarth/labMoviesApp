import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  

  return (
    <>
      <Typography variant="h5" component="h3">
        {actor.name}
      </Typography>

      <Typography variant="h6" component="p">
        Also known as: 
        {" "} {actor.also_known_as[0]}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Biography" sx={chip} color="primary" />
        </li>
        <li>{actor.biography} </li>
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Birthday" sx={chip} color="primary" /> 
        </li> 
        <li> {actor.birthday} </li>
          
    
      </Paper>
       
    </>
  );
};

export default  ActorDetails ;