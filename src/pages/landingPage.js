import React from 'react';
// import {Link} from "@reach/router";
import NavBar from '../components/navBar';
import LandingpageTile from '../components/LandingpageTile';
import SideBar from '../components/sidebar';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="LandingPage">
                <NavBar/>
                <SideBar/>
                <LandingpageTile/>
            </div>
        );
    }

}




export default LandingPage;