import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

import Header from './components/Header';

Amplify.configure(awsconfig);

function App() {
	return (
		<div className="App">
			<Header />

			<h1>App</h1>
		</div>
	);
}

export default withAuthenticator(App);
