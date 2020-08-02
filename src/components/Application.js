import React from 'react';
import { Router } from "@reach/router";
import '../App.css';
import LandingPage from '../pages/landingPage';
import Dashboard from '../pages/dashboard';
import PartyPage from '../pages/partyPage';
import FollowersGameDisplayPage from '../pages/FollowersGameDisplayPage';
import LeaderboardPage from '../pages/LeaderboardPage';
import WhoSaidDisplayPage from '../pages/WhoSaidDisplayPage';


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
        <FollowersGameDisplayPage path="/gameplay/followersgame" />
        <WhoSaidDisplayPage path="gameplay/whosaid"/>
        <PartyPage path="/partyplay" />
      </Router>
    </div>
   );
  }
}

