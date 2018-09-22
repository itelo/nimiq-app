import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  container: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
    color: "white",
    padding: "96px 0 56px 0"
  },
  nimiqAccountAddress: {
    fontSize: "0.5em"
  },
  display2: {
    ...theme.typography.display2,
    color: theme.palette.common.white,
    fontWeight: 300,
    margin: 0
  },
  display2Sub: {
    ...theme.typography.display2,
    fontSize: theme.typography.pxToRem(32),
    color: theme.palette.common.white,
    fontWeight: 300
  },
  cardContainer: {
    padding: 12
  },
  buttonRoot: {
    background: "#dd33fa",
    border: 0,
    color: "white",
    boxShadow: "0 3px 5px 2px rgba(221, 51, 250, .3)"
  },
  buttonLabel: {
    letterSpacing: 2
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <Grid
        className={classes.container}
        container
        direction="column"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <h1 className={classes.display2}>
            NIMIQ
            <span className={classes.display2Sub}>POS</span>
          </h1>
        </Grid>

        <Grid item>
          <Grid container direction="column" alignItems="center" spacing={16}>
            <Grid item>
              <Typography variant="title" color="inherit">
                Select your account
              </Typography>
            </Grid>
            <Grid item>
              <Paper className={classes.cardContainer}>
                <Grid container direction="row" spacing={8}>
                  {/* <Grid item>
                <IconButton>
                  <FaceIcon />
                </IconButton>
              </Grid> */}
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="body2">
                          Lucas Vanconcelos
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="caption"
                          className={classes.nimiqAccountAddress}
                        >
                          NQ98-AVNE-NKDT-YSKL-T8PE-EKQK-KU2E-RH6L-LC6Q
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="large"
            classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
          >
            START
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
