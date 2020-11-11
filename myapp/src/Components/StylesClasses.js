import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function StylesClasses() {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },

    media: {
      height: 140,
    },
  });
  
  return (
    useStyles()
  );
}

export default StylesClasses;
