import React from 'react';
import { Button, Paper, Card, CardContent, Typography, Link, makeStyles } from '@material-ui/core';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import Logo from './components/Logo/login-logo';
import GitHubIcon from '@material-ui/icons/GitHub';
import MeeperImg from './assets/more-eyes-plz-demo.jpg';
import HelpImg from './assets/undraw_online_test_gba7.svg';
import CollabImg from './assets/undraw_design_team_af2y.svg';

const useStyles = makeStyles((theme) => ({
  mainCard: {
    marginTop: "50px",
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: "space-evenly",
    height: "1200px"
  },
  headerText:{
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "left"
  },
  bodyText: {
    lineHeight: "2.5rem",
    fontSize: "1.4rem",
    paddingTop: "28px",
    fontWeight: 100
  },
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    "& > div:nth-child(odd)":{
      backgroundColor: "#f5f5f5",
    }
  },
  cardContainer: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    padding: "100px",
    maxWidth: "1280px",
  },
  cardText: {
    display: 'flex',
    flexFlow: 'column',
    width: "35%",
  },
  image:{
    width: "60%"
  },
  button: {
    padding: theme.spacing(3),
    fontSize: "1.25em",
  },
  buttonIcon: {
    paddingLeft: "10px",
  },
  logoText: {
    fontFamily: "'Jura', san-serif",
    display: "inline-block",
    lineHeight: "0em",
    paddingBottom: ".4em",
    marginRigh: "8px",
    fontWeight: "bold",
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: "turquoise"
    }
  },
  purple: {
    color: "#3f51b5",
    fontWeight: "bold"
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div>
      <NavBar isUserActive={false} />
      <Paper className={classes.mainCard} elevation={0}>
        <Logo />
        <Button variant="contained" color="primary" className={classes.button} href="https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c">Sign Up with GitHub <GitHubIcon className={classes.buttonIcon} fontSize="large" /></Button>
      </Paper>

      <div className={classes.container}>
        <Card className={classes.cardContainer} elevation={0}>
          <CardContent className={classes.cardText}>
            <Typography className={classes.headerText}>
              Get community feedback on your commits.
            </Typography>
            <Typography className={classes.bodyText}>
              Are you starting your coding journey? Experienced but venturing into unfamiliar territory?
            </Typography>
            <Typography className={classes.bodyText}>
              <Link href="https://moreeyesplz.com/"><mark className={classes.logoText}>more eyes, plz!</mark></Link> is a new service powered by <Link color="secondary" href="https://github.com/features/actions">Github Actions</Link> to crowdsource feedback, suggestions, and insight on your commits.
              </Typography>     
            </CardContent>
            <img className={classes.image} src={HelpImg} alt="More Eyes, Plz! eyes"></img>
        </Card>

        <Card className={classes.cardContainer} elevation={0}>
          <img className={classes.image} src={MeeperImg} alt="More Eyes, Plz! eyes"></img>
          <CardContent className={classes.cardText}>
            <Typography className={classes.headerText}>
              Get Started
            </Typography>
            <Typography className={classes.bodyText}>
              1. <Link color="secondary" href="https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c">Sign in with GitHub.</Link>
              <br/>
              2. Install the <Link color="secondary" href="https://github.com/marketplace/actions/meep-scanner">MEEP scanner action</Link> on a repo you want eyes on.
              <br/>
              3. Write "<span className={classes.purple}>[MEEP]</span>" in any commit message.
            </Typography>
            <Typography className={classes.bodyText}>
              The commit will show up as a post on this website, and <span className={classes.purple}>themeepbot</span> will comment to let you know eyes are coming.
            </Typography>
            <Typography className={classes.bodyText}>
              Don't forget to <span className={classes.purple}>say thanks!</span>
              </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cardContainer} elevation={0}>
          <CardContent className={classes.cardText}>
            <Typography className={classes.headerText}>Provide Feedback</Typography>
            <Typography className={classes.bodyText}>Filter by tags and click a post to go directly to the Github commit. Comment on specific lines of code, or comment in the general commit thread. Please be <span className={classes.purple}>courteous</span> in providing your feedback!</Typography>
          </CardContent>
          <img className={classes.image} src={CollabImg} alt="More Eyes, Plz! eyes"></img>          
        </Card>
      </div>
      <Footer isUserActive={false}/>
    </div>
  );
}