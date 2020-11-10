import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";

import TimelineDot from "@material-ui/lab/TimelineDot";

import "../App.css";
import avatarImg from "../images/avatar_pic.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 140,
  },
});

function ProfileCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={12} sm={6} md={3} className="profileCard">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={avatarImg}
            title="Profile picture"
          />
          <CardContent className="profileCard_header">
            <CardActions className="profileCard_header-content">
              <Typography gutterBottom variant="h5" component="h2">
                35 {bull} Lizard
              </Typography>
              <TimelineDot color="primary" />
            </CardActions>
          </CardContent>
          <CardContent className="profileCard_location">
            <CardActions className="profileCard_location-container">
              <div className="profileCard_location-content">
                <LocationOnIcon style={{ color: "#fff" }} />
                <div className="profileCard_location-data">
                  <Typography gutterBottom variant="subtitle2" component="span">
                    100 m
                  </Typography>
                  <span>|</span>
                  <Typography gutterBottom variant="subtitle2" component="span">
                    Barcelona
                  </Typography>
                </div>
              </div>
            </CardActions>
          </CardContent>
          <CardContent className="profileCard_body">
            <Typography
              className="profileCard_body-head"
              variant="body2"
              color="inherit"
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ProfileCard;
