import { Route, Switch } from 'wouter';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

//css
import './App.css';
// import { BackGround } from './styles';

//components

import About from './components/About';
import Safety from './components/Safety';
import RatHound from './components/RatHound';
import SoldierRadio from './components/SoldierRadio';
import Home from './components/Home';

import SideBar from './header/Sidebar';

//Scenes

import MajorComps from './scenes/MajComp';

Amplify.configure(awsconfig);

function App() {
	return (
		<>
			<SideBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/About" component={About} />
				<Route path="/Safety" component={Safety} />
				<Route path="/RatHound" component={RatHound} />
				<Route path="/SoldierRadio" component={SoldierRadio} />
				<Route path="/MajorComps" component={MajorComps} />
			</Switch>
		</>
	);
}

export default withAuthenticator(App);
