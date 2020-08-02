import React from 'react'

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
