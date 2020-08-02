import React, {useContext} from 'react';
import { Router } from "@reach/router";
import '../App.css';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/dashboard';
import PartyPage from '../pages/partyPage';
import GameDisplayPage from '../pages/gameDisplayPage';
import LeaderboardPage from '../pages/LeaderboardPage';
import { UserContext } from '../contexts/UserContext';
import Loading from './Loading'

export default function Application() {

	const {loading} = useContext(UserContext)

	const getApplication = () => {
		return  (
			<div className= "App"> 
				<Router>
					<LandingPage path="/" />
					<Dashboard path="/dashboard" />
					<LeaderboardPage path="/leaderboard"/>
					<GameDisplayPage path="/gamepage" />
					<PartyPage path="/partyplay" />
				</Router>
			</div>
		)
	}

	const getLoading = () => {
		return (<Loading/>)
	}
	return (
		loading.size == 0 ? getApplication() : getLoading()
	);
}

