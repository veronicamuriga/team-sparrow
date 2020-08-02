import React from 'react';
import '../styling/DailyGameCard.css';

class DailyGameCard extends React.Component{
    render(){
        return(
            <div className="DailyGameCard">
                <div className="DailyCards">
                    <div className="card-cover" id="who-said"></div>
                    <div className="card-text"><p className="daily-accent">#WhoSaidThat?</p></div>
                </div>
                <div className="DailyCards">
                    <div className="card-cover" id="who-liked"></div>
                    <div className="card-text"><p className="daily-accent">#WhoHasMoreFollowers?</p></div>
                </div>
                <div className="DailyCards">
                    <div className="card-cover" id="who-follows"></div>
                    <div className="card-text"><p className="daily-accent">#WhoLikedIt?</p></div>
                </div>
            </div>
        );
    }


}




export default DailyGameCard;
