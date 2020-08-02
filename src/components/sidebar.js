import React from 'react';
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
            <a href={DashBoard} className="menuSelect"><img src={logo} alt="Twivia logo"></img></a>
            <a className="menuSelect"><img src={leaderboard} alt="Leaderboard icon"></img></a>
            <a className="menuSelect"><img src={party} alt="Party icon"></img></a>
            <a className="menuSelect"><img src={logout} alt="Logout icon"></img></a>
                
            </div>
        );
    }

}




export default SideBar;