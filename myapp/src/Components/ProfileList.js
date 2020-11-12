import React from "react";
import http from "../api/http.service";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";
import TimelineDot from "@material-ui/lab/TimelineDot";
import avatarImg from "../images/avatar_pic.jpg";
import "../App.css";

const apiProfiles = "/api/search?length=20&sorting=DISTANCE";
const apiPicture = "/api/search?length=20&sorting=DISTANCE";
const profilesAPI = http.get(apiProfiles);
const backgroundColor = "#0C4864";
const useStyles = (theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 330,
    backgroundColor: backgroundColor,
  },

  media: {
    height: 140,
  },
});
const maxLength = 70;

class ProfileList extends React.Component {
  state = {
    profiles: [],
  };

  componentDidMount() {
    profilesAPI.then((res) => {
      const profiles = res.data.items;
      this.setState({ profiles });
    });
    // profilesAPI.then((res) => {
    //     const pictures = res.data.items.picture;
    //     this.setState({ pictures });
    //     console.log(pictures);

    //   });
  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    // this.state.profiles.map((profile) => (
    //     this.state.profile.map((picture)=>(
    //         console.log(picture)
    //     ))
    // ))
    return (
      <Grid className="myGrid" container spacing={3}>
        {this.state.profiles.map((profile, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="profileCard"
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={avatarImg}
                  //title={profile.picture.comment}
                  //   title={this.state.images.map((profile, index) => (

                  //   )}
                />
                <CardContent className="profileCard_header">
                  <CardActions className="profileCard_header-content">
                    <Typography gutterBottom variant="h6" component="h2">
                      {profile.personal.age} {bull} {profile.name}
                    </Typography>
                    <TimelineDot className={profile.online_status} />
                  </CardActions>
                </CardContent>
                <CardContent className="profileCard_location">
                  <CardActions className="profileCard_location-container">
                    <div className="profileCard_location-content">
                      <LocationOnIcon width="10%" style={{ color: "#fff" }} />
                      <div className="profileCard_location-data">
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                          className="profileCard_location-distance"
                        >
                          {profile.location.distance}m
                        </Typography>
                        <span className="profileCard_location-bar">|</span>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                          className="profileCard_location-city"
                        >
                          {profile.location.city}
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
                    {`${profile.headline.substring(0, maxLength)}...`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default withStyles(useStyles)(ProfileList);
