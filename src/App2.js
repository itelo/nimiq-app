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
import BackspaceIcon from "@material-ui/icons/Backspace";
import IconButton from "@material-ui/core/IconButton";
import { ButtonBase } from "@material-ui/core";

const styles = theme => ({
  container: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(to bottom, #8e2de2, #4a00e0)"
    // color: "white"
    // padding: "96px 0 56px 0"
  },
  nimiqAccountAddress: {
    fontSize: "0.5em"
  },
  display2: {
    ...theme.typography.display2,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(56),
    fontWeight: 300,
    margin: 0
  },
  display2Sub: {
    ...theme.typography.display2,
    fontSize: theme.typography.pxToRem(36),
    color: theme.palette.common.white,
    fontWeight: 300
  },
  cardContainer: {
    padding: 12
  },
  containerValue: {
    paddingBottom: 12,
    paddingRight: 12
  },
  title: { ...theme.typography.title, color: theme.palette.common.white },
  display1: { ...theme.typography.display1, color: theme.palette.common.white },
  confirmContaner: {
    padding: "12px 0"
  },
  buttonRoot: {
    background: "#dd33fa",
    border: 0,
    color: "white",
    padding: "8px 24px",
    // borderRadius: 5,
    boxShadow: "0 3px 5px 2px rgba(221, 51, 250, .3)"
  },
  buttonLabel: {
    textTransform: "Capitalize"
    // letterSpacing: 2
  },

  key: {
    width: "33vw",
    height: 72,
    color: "#dd33fa"
  },
  inputContainer: {
    padding: 12
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(classes);
    const allKeys = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      [null, "0", "backspace"]
    ];
    return (
      <Grid
        className={classes.container}
        container
        direction="column"
        justify="space-between"
      >
        <Grid item xs>
          <Grid container direction="column" className={classes.inputContainer}>
            <Grid item>
              <Grid container direction="row" justify="space-between">
                <Grid item>
                  <Typography className={classes.title}>
                    Select Value
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.display1}>NIM</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.containerValue}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            alignContent="flex-end"
          >
            <Grid item>
              <h1 className={classes.display2}>
                350
                <span className={classes.display2Sub}>,00</span>
              </h1>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper square>
            <Grid container direction="column">
              {allKeys.map(rowKeys => (
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      {rowKeys.map(key => {
                        console.log(key);

                        let content;
                        if (key === null) {
                          content = "";
                        } else if (key === "backspace") {
                          console.log(key);
                          content = <BackspaceIcon />;
                        } else {
                          content = (
                            <Typography variant="title" color="inherit">
                              {key}
                            </Typography>
                          );
                        }
                        return (
                          <ButtonBase
                            className={classes.key}
                            onClick={e => console.log(key)}
                          >
                            {content}
                          </ButtonBase>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              ))}
              <Grid item>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  className={classes.confirmContaner}
                >
                  <Button
                    classes={{
                      root: classes.buttonRoot,
                      label: classes.buttonLabel
                    }}
                    size="large"
                    variant="contained"
                  >
                    Confirm
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
