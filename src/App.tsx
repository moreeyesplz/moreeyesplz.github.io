import React, { useEffect, useState } from 'react'; import { Container, Grid, makeStyles } from '@material-ui/core';
import NavBar from './components/nav-bar';
import Logo from './components/Logo/logo';
import ListCard from './components/list-card';
import Leaderboard from './components/leaderboard';
import Filters from './components/filters';
import Messages from './components/message-feed';
import Conduct from './components/code-of-conduct';
import SignUpCard from './components/sign-up-card';
import Issues from './models/issues';

const useStyles = makeStyles((theme) => ({
  'center-container': {
    margin: theme.spacing(15, 'auto', 0, 'auto'),
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const issues = new Issues;

function App() {
  const classes = useStyles();
  const [labels, setLabels] = useState<string[]>([]);
  const [issueIds, setIssueIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const ids = await issues.fetch(labels);
      setIssueIds(ids);
    };

    fetchIssues();
  }, [labels]);

  const cards: JSX.Element[] = [];
  for (let i = 0; i !== issueIds.length; ++i) {
    const issue = issues.get(issueIds[i]);
    console.log(issue);
    cards.push(
      <Grid item key={i}>
        <ListCard />
      </Grid>
    );
  }

  return (
    <div>
      <NavBar />
      <Container className={classes['center-container']} maxWidth='lg'>
        <Grid direction="row" spacing={3} container>


          <Grid item direction="column" xs={3} spacing={2} container>
            <Grid item>
              <div className={classes.logo}>
                <Logo />
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
            <Grid item xs={12}>
              <SignUpCard />
            </Grid>

            <Grid item xs={12} spacing={0} justify="space-between" container>
              <Grid item direction="row" xs={8} spacing={1} alignContent="flex-start" container>
                {cards}
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