import React from 'react';
import '../styling/dashboard.css';
import NavBar from '../components/navBar';
import GameTile from '../components/GameTile';
import SideBar from '../components/sidebar';


class DashBoard extends React.Component{
    render(){
        return(
            <div className="Dashboard">
                <NavBar/>
                <GameTile/>
                <SideBar/>
            </div>
        );
    }


}




export default DashBoard;