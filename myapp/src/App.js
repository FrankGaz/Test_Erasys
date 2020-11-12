import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppHeaderBar from "./Components/AppHeaderBar";
import ProfileList from "./Components/ProfileList";
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
    <React.Fragment>
      <AppHeaderBar />
      <Container className="myContainer" maxWidth="lg">
        <div className={classes.root}>
          <ProfileList />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
