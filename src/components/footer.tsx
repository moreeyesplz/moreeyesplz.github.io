import React from 'react';
import { Fab, Button,Typography, IconButton, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: "10px",
    width: "100%",
    height: "250px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    position: "relative"
  },
  fab: {
    float:"right",
    position: "absolute",
    top: "-30px"
  },
  button: {
    padding: theme.spacing(3),
    margin: theme.spacing(6, 0, 2, 0),
    fontSize: "1.25em",
  },
  buttonIcon: {
    paddingLeft: "10px",
  },
  iconContainer: {
    display: "flex"
  },
  gitLinks: {
      "&:hover" : {
          color: "#f50057"
      }
  }
}));

export default function Footer(props: {isUserActive: boolean}) {
  const classes = useStyles();
  const footer = props.isUserActive ? 
    <div className={classes.footer} style={{height:"125px", marginTop:"100px"}}>
        <Fab 
            aria-label="Go To Top"
            className={classes.fab}
            color="secondary"
            onClick={() => window.scrollTo({top:0, left:0, behavior:"smooth"})}>
            <UpIcon />
        </Fab>
        <div className={classes.iconContainer}>
            <IconButton color="primary" aria-label="GitHub Marketplace" component="span" onClick={() => window.location.href="https://github.com/marketplace/actions/meep-scanner"}>
                <GitHubIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Twitter Profile" component="span" onClick={() => window.location.href="https://twitter.com/moreeyesplz"}>
                <TwitterIcon />
            </IconButton>
        </div>
        <Typography> <span className={classes.gitLinks} onClick={() => window.location.href="https://github.com/jeremyong"}>jeremyong</span> | <span className={classes.gitLinks} onClick={() => window.location.href="https://github.com/duchess-toffee"}>duchess-toffee</span> </Typography>
    </div>
    :
    <div className={classes.footer}>
        <Fab 
          aria-label="Go To Top"
          className={classes.fab}
          color="secondary"
          onClick={() => window.scrollTo({top:0, left:0, behavior:"smooth"})}>
          <UpIcon />
        </Fab>
        <Button variant="outlined" color="secondary" className={classes.button} href="https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c">Join with GitHub <GitHubIcon className={classes.buttonIcon} fontSize="large" /></Button>
        <div className={classes.iconContainer}>
            <IconButton color="primary" aria-label="GitHub Marketplace" component="span" onClick={() => window.location.href="https://github.com/marketplace/actions/meep-scanner"}>
                <GitHubIcon />
            </IconButton>
            <IconButton color="primary" aria-label="Twitter Profile" component="span" onClick={() => window.location.href="https://twitter.com/moreeyesplz"}>
                <TwitterIcon />
            </IconButton>
        </div>
        <Typography> <span className={classes.gitLinks} onClick={() => window.location.href="https://github.com/jeremyong"}>jeremyong</span> | <span className={classes.gitLinks} onClick={() => window.location.href="https://github.com/duchess-toffee"}>duchess-toffee</span> </Typography>
    </div>

  return (
    <div>
      {footer}
    </div>
  );
}