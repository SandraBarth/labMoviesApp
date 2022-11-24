import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

export default function ActorCard(props) {
  const actors = props.actors;
   return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {actors.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actors.profile_path 
          ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      <CardContent>
        <Typography variant="h5" component="p">
            {"Popularity: "} {actors.popularity}{" "}
          </Typography>
          </CardContent>
       <Link to={`/actors/${actors.id}`}>
     More Info ...
     </Link>      
    </Card>
  );
}

//movie={/movie/${movie.id}}
//stopped here The add to favourites feature is now working on the Home page; however, the Favorites page is broken (again!). To fix it, in pages/favouriteMoviesPage.js, update the code, as follows:

