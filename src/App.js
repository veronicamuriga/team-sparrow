import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import LandingPage from './pages/landingPage';
import Dashboard from './pages/dashboard';
import PartyPage from './pages/partyPage';
import GameDisplayPage from './pages/gameDisplayPage';


export class App extends React.Component{
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
        <GameDisplayPage path="/gamepage" />
        <PartyPage path="/partyplay" />
      </Router>
    </div>
   );
  }
}
export default App;