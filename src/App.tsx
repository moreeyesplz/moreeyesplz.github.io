import React from 'react';import { Container, Grid,  makeStyles } from '@material-ui/core';
import NavBar from './components/nav-bar';
import Logo from './components/Logo/logo';
import ListCard from './components/list-card';
import Leaderboard from './components/leaderboard';
import Filters from './components/filters';
import Messages from './components/message-feed';
import Conduct from './components/code-of-conduct';
import SignUpCard from './components/sign-up-card';


const useStyles = makeStyles((theme) => ({
  'center-container': {
    margin: theme.spacing(15, 'auto', 0, 'auto'),
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Container className={classes['center-container']} maxWidth='lg'>
        <Grid direction="row" spacing={3} container>
          

          <Grid item direction="column" xs={3} spacing={2} container>
            <Grid item>
              <div className={classes.logo}>
                <Logo/>
              </div>
            </Grid>
            <Grid item>
              <Filters />
            </Grid>
            <Grid item>
              <Conduct />
            </Grid>
          </Grid>

          <Grid item xs={9} spacing={2} container>
            <Grid item xs={12} spacing={0}>
              <SignUpCard/>
            </Grid>

            <Grid item xs={12} spacing={0} justify="space-between" container>
              <Grid item direction="row" xs={8} spacing={1} alignContent="flex-start" container>
                <Grid item>
                  <ListCard />
                </Grid>
                <Grid item>
                  <ListCard />
                </Grid>
                <Grid item>
                  <ListCard />
                </Grid>
                <Grid item>
                  <ListCard />
                </Grid>
                <Grid item>
                  <ListCard />
                </Grid>
                <Grid item>
                <ListCard />
                </Grid>
                <Grid item>
                  <ListCard />
                </Grid>
              </Grid>

              <Grid item direction="column" xs={4} spacing={2} container>
                <Grid item>
                  <Leaderboard />
                </Grid>
                <Grid item>
                  <Messages />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          

        </Grid>
      </Container>
    </div>
    
  );
}

export default App;
