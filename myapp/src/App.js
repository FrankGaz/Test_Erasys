import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ProfileCardGrid from "./Components/ProfileCardGrid";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        
          <ProfileCardGrid />
       
      </div>
    </Container>
  );
}

export default App;
