import React from 'react';
import { Router } from "@reach/router";
import '../App.css';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/dashboard';
import PartyPage from '../pages/partyPage';
import GameDisplayPage from '../pages/gameDisplayPage';
import LeaderboardPage from '../pages/LeaderboardPage';


export default class Application extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
    <div className= "App"> 
      <Router>
        <LandingPage path="/" />
        <Dashboard path="/dashboard" />
		<LeaderboardPage path="/leaderboard"/>
        <GameDisplayPage path="/gamepage" />
        <PartyPage path="/partyplay" />
      </Router>
    </div>
   );
  }
}

