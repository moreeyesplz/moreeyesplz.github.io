import React, { useState } from 'react'; import { Container, Grid, makeStyles } from '@material-ui/core';
import Main from "./Main";
import Login from "./Login";

function App() {
  const [isUserOnline, setIsUserOnline] = useState(false);

  const displayPage =  isUserOnline ? <Main /> : <Login />;
  
  return (
    <div>
      {displayPage}
    </div>

  );
}

export default App;
