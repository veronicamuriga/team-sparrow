import React from 'react';
import {Link} from "@reach/router";
import '../styling/sidebar.css';
import '../styling/setup.css';

import logo from '../img/logo.png';
import leaderboard from '../img/leaderboard.png';
import party from '../img/party.png';
import logout from '../img/logout.png';
import DashBoard from '../pages/dashboard';

class SideBar extends React.Component{
    render(){
        return(
    
            
            <div className="sidebar">
            <Link to="/dashboard" className="menuSelect"><img src={logo} alt="Twivia logo"></img><span class="menu-text">Dashboard</span></Link>
            <Link to="/leaderboard" className="menuSelect"><img src={leaderboard} alt="Leaderboard icon"></img><span class="menu-text">Leaderboard</span></Link>
            <Link to="/partyplay" className="menuSelect"><img src={party} alt="Party icon"></img><span class="menu-text">Party</span></Link>
            <Link to="" className="menuSelect"><img src={logout} alt="Logout icon"></img><span class="menu-text">Logout</span></Link>
                
            </div>
        );
    }

}




export default SideBar;