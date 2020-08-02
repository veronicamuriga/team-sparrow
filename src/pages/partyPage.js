import React from 'react';
import '../styling/partypage.css';
import NavBar from '../components/navBar';
import GameTile from '../components/IndividualGameTile';
import SideBar from '../components/sidebar';


class PartyPage extends React.Component{
    render(){
        return(
            <div className="PartyPage">
                <NavBar/>
                <GameTile/>
                <SideBar/>
            </div>
        );
    }


}




export default PartyPage;