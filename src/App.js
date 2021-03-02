import { Route, Switch } from 'wouter';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

//css
import './App.css';
// import { BackGround } from './styles';

//components
import Header from './header/Header';
import About from './components/About';
import Safety from './components/Safety';
import BloodHound from './components/BloodHound';
import SoldierRadio from './components/SoldierRadio';
import Home from './components/Home';

//Scenes

import MajorComps from './scenes/MajComp';

Amplify.configure(awsconfig);

function App() {
	return (
		<>
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/About" component={About} />
				<Route path="/Safety" component={Safety} />
				<Route path="/BloodHound" component={BloodHound} />
				<Route path="/SoldierRadio" component={SoldierRadio} />
				<Route path="/MajorComps" component={MajorComps} />
			</Switch>
		</>
	);
}

export default withAuthenticator(App);
