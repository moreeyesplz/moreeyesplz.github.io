import React from 'react';
import { Button } from '@material-ui/core';
import NavBar from './components/nav-bar';

export default function Login() {

  return (
    <div>
      <NavBar isUserActive={false} />
      <Button variant="contained" color="primary" size="large" onClick={() => window.location.href="https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c"}>Sign Up with GitHub</Button>
    </div>

  );
}