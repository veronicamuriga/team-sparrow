import React from 'react';
import {Link} from "react-router-dom";
import '../styling/sidebar.css';
import '../styling/setup.css';

import logo from '../img/logo.png';
import leaderboard from '../img/leaderboard.png';
import party from '../img/party.png';
import logout from '../img/logout.png';

import {signOut} from './firebase'
// import DashBoard from '../pages/dashboard';

class SideBar extends React.Component{

	signOutNow = (event) => {
		event.preventDefault();
		signOut();
	}

    render(){
        return(
    
            
            <div className="sidebar">
            <Link to="/dashboard" className="menuSelect"><img src={logo} alt="Twivia logo"></img><span className="menu-text">Dashboard</span></Link>
            <Link to="/leaderboard" className="menuSelect"><img src={leaderboard} alt="Leaderboard icon"></img><span className="menu-text">Leaderboard</span></Link>
            <Link to="/partyplay" className="menuSelect"><img src={party} alt="Party icon"></img><span className="menu-text">Party</span></Link>
            <button onClick = {this.signOutNow}className="menuSelect"><img src={logout} alt="Logout icon"></img><span className="menu-text">Logout</span></button>
                
            </div>
        );
    }

}




export default SideBar;