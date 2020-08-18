import React, { useEffect, useState, useMemo } from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import NavBar from './components/nav-bar';
import Logo from './components/Logo/logo';
import ListCard from './components/list-card';
// import Leaderboard from './components/leaderboard';
import Filters from './components/filters';
// import Messages from './components/message-feed';
import Conduct from './components/code-of-conduct';
import WelcomeCard from './components/welcome-card';
import Footer from './components/footer';
import Issues from './models/issues';
import NoResults from './assets/undraw_not_found_60pq.svg';
import { Octokit } from '@octokit/rest';

const useStyles = makeStyles((theme) => ({
  'center-container': {
    margin: theme.spacing(15, 'auto', 0, 'auto'),
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
  },
  noResultsContainer: {
    opacity: ".3",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%"
  },
  noResultsImg: {
    width: "80%"
  }
}));


export default function Main(props: {octokit: Octokit}) {
  const classes = useStyles();
  const [labels, setLabels] = useState<string[]>([]);
  const [issueIds, setIssueIds] = useState<number[]>([]);
  const [username, setUsername] = useState("Anonymous");
  const [avatarURL, setAvatarURL] = useState("");
  const [userURL, setUserURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  const issues = useMemo(() =>{
      return new Issues(props.octokit);
    }, [props.octokit]);

  useEffect(() => {
    const fetchIssues = async () => {
      const ids = await issues.fetch(labels);
      setIssueIds(ids);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetchIssues();
  }, [labels, issues]);

  useEffect(() => {
    if(props.octokit){
      props.octokit.users.getAuthenticated().then((value) => {
        setUsername(value.data.login);
        setAvatarURL(value.data.avatar_url);
        setUserURL(value.data.html_url);
      });
    };
  }, [props.octokit]);

  const cards: JSX.Element[] = [];
  for (let i = 0; i !== issueIds.length; ++i) {
    const issue = issues.get(issueIds[i]);
    if (!issue) {
      continue;
    }
    cards.push(
      <Grid item key={i}>
        <ListCard
          title={issue?.commit_message}
          url={issue.commit_url}
          tags={issue.labels}
          user={{
            avatar: issue.avatar,
            name: issue.user,
            url: issue.user_url
          }}
          createdAt={issue.created_at}
        />
      </Grid>
    );
  }

  const displayResults = cards.length === 0 && !isLoading ? 
    <div className={classes.noResultsContainer}>
      <img className={classes.noResultsImg} src={NoResults} alt="no results found"></img>
      <Typography variant="h4">No Results Found</Typography>
    </div> 
    : cards

  return (
    <div>
      <NavBar isUserActive={true} username={username} avatarURL={avatarURL} userURL={userURL}/>
      <Container className={classes['center-container']} maxWidth='lg'>
        <Grid wrap="nowrap" alignItems="flex-start" spacing={3} container>
          <Grid item direction="column" xs={3} spacing={2} container>
            <Grid item>
              <div className={classes.logo}>
                <Logo />
              </div>
            </Grid>
            {/* <Grid item>
              <Filters setLabels={setLabels}/>
            </Grid> */}
            <Grid item>
              <Conduct />
            </Grid>
          </Grid>

          <Grid item xs={9} spacing={2} direction="column" wrap="nowrap" container>
            <Grid item xs={12}>
              <WelcomeCard />
            </Grid>

            <Grid item xs={12} justify="space-between" spacing={0} container>
              <Grid item direction="row" xs={8} spacing={1} alignContent="flex-start" container>
                {displayResults}
              </Grid>

              <Grid item direction="column" xs={4} spacing={2} container>
                {/* <Grid item>
                  <Leaderboard />
                </Grid>
                <Grid item>
                  <Messages />
                </Grid> */}
                <Grid item>
                  <Filters setLabels={setLabels} labels={labels} />
                </Grid>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer isUserActive={true}/>
    </div>
  );
}
