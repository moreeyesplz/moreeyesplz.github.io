import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Octokit } from '@octokit/rest';

let urlParams = new URL(document.location.href).searchParams;
const accessTokenKey = 'GitHub Access Token';
let accessToken = urlParams.get('access_token');

if (accessToken) {
	localStorage.setItem(accessTokenKey, accessToken);
	window.history.replaceState(null, '', '/');
}

if (!accessToken) {
	accessToken = localStorage.getItem(accessTokenKey);
}

const octokit: Octokit | null = accessToken
	? new Octokit({ auth: accessToken })
	: null;

ReactDOM.render(
	<React.StrictMode>
		<App octokit={octokit} />
	</React.StrictMode>,
	document.getElementById('root')
);
