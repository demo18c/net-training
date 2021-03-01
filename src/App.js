import { Router, Route, Switch } from 'wouter';

import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

import Header from './header/Header';
import About from './components/About';
Amplify.configure(awsconfig);

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/About" component={About} />
			</Switch>
		</div>
	);
}

export default withAuthenticator(App);
