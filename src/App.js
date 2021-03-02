import { Route, Switch } from 'wouter';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

//css
import './App.css';

//components
import Header from './header/Header';
import About from './components/About';
import Safety from './components/Safety';
import BloodHound from './components/BloodHound';
import SoldierRadio from './components/SoldierRadio';
Amplify.configure(awsconfig);

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/About" component={About} />
				<Route path="/Safety" component={Safety} />
				<Route path="/BloodHound" component={BloodHound} />
				<Route path="/SoldierRadio" component={SoldierRadio} />
			</Switch>
		</div>
	);
}

export default withAuthenticator(App);
