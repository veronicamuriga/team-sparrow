import React from 'react';
import SideBar from '../components/sidebar';
import NavBar from '../components/navBar';
import GameTile from '../components/IndividualGameTile';



class LeaderboardPage extends React.Component{
    render(){
        return(
            <div className="Leaderboard">
                <NavBar/>
                <GameTile/>
                <SideBar/>
            </div>
        );
    }

}




export default LeaderboardPage;
