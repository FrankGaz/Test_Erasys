import React from "react";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "./ProfileCard";
import "../App.css";


function ProfileCardGrid() {
  

  return (
    <Grid container spacing={3}>
      <ProfileCard/>
    </Grid>
  );
}

export default ProfileCardGrid;
