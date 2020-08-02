import React from 'react';
import SideBar from '../components/sidebar';
import NavBar from '../components/navBar';
import Leaderboard from '../components/Leaderboard'


class LeaderboardPage extends React.Component{
    render(){
        return(
            <div className="Leaderboard">
                <NavBar/>
                <Leaderboard/>
                <SideBar/>
            </div>
        );
    }

}




export default LeaderboardPage;
