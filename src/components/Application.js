import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import '../App.css';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/dashboard';
// import PartyPage from '../pages/partyPage';
import GameDisplayPage from '../pages/GameDisplayPage';
import LeaderboardPage from '../pages/LeaderboardPage';
import { UserContext } from '../contexts/UserContext';
import Loading from './Loading'

export default function Application() {

	const {loading, userAuth} = useContext(UserContext)

	const getPages = () => {
		const userPages = (
			<Switch>
				<Route exact path="/dashboard"><Dashboard/></Route>
				<Route exact path="/play"><GameDisplayPage/></Route>
				<Route exact path="/leaderboard"><LeaderboardPage/></Route>
				<Route path="/"><Redirect to="/dashboard"/></Route>
			</Switch>
		);
		// Pages that users can view when not logged in
		const publicPages = (
			<Switch>
				<Route path="/"><LandingPage/></Route>
			</Switch>
		);

		var content = publicPages;
		if(userAuth != null) {
			content = userPages;
		}
		return content
	}

	// The main application with its content
	const getApplication = () => {
		return  (
			<div className= "App"> 
				<Router>
					<Switch>
						{getPages()}
					</Switch>
				</Router>
			</div>
		)
	}

	// The loading screen
	const getLoading = () => {
		return (<Loading/>)
	}
	return (
		loading.size == 0 ? getApplication() : getLoading()
	);
}

