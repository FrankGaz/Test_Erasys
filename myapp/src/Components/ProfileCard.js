import React from "react";

import Grid from "@material-ui/core/Grid";
import "../App.css";
import avatarImg from "../images/avatar_pic.jpg"

function ProfileCard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <div className="profileCard">
            <img className="profileCard_img" alt="profile pic" src={avatarImg}/>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className="profileCard"></div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className="profileCard"></div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className="profileCard"></div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className="profileCard"></div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div className="profileCard"></div>
      </Grid>
    </Grid>
  );
}

export default ProfileCard;
