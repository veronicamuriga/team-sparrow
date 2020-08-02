import React from 'react';
import '../styling/DailyGameCard.css';

class DailyGameCard extends React.Component{
    render(){
        return(
            <div className="DailyGameCard">
                <div className="DailyCards">
                    <div className="card-cover" id="who-said"></div>
                    <div className="card-text"><button className="daily-accent">#WhoSaidThat?</button></div>
                </div>
                <div className="DailyCards">
                    <div className="card-cover" id="who-liked"></div>
                    <div className="card-text"><button className="daily-accent">#WhoHasMoreFollowers?</button></div>
                </div>
                <div className="DailyCards">
                    <div className="card-cover" id="who-follows"></div>
                    <div className="card-text"><button className="daily-accent">#WhoLikedIt?</button></div>
                </div>
            </div>
        );
    }


}




export default DailyGameCard;
