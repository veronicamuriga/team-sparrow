import React from 'react';
import NavBar from '../components/navBar';
import LandingpageTile from '../components/LandingpageTile';
//import SideBar from '../components/sidebar';


class LandingPage extends React.Component{
    render(){
        return(
            <div className="LandingPage">        
                <LandingpageTile/>
            </div>
        );
    }

}




export default LandingPage;