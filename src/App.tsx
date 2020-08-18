import React from 'react';
import Main from "./Main";
import Login from "./Login";
import { Octokit } from '@octokit/rest';

function App(props: {octokit: Octokit | null}) {

  const displayPage = props.octokit ? <Main octokit={props.octokit} /> : <Login />;

  return (
    <div>
      {displayPage}
    </div>

  );
}

export default App;
