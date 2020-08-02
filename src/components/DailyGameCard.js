import React from 'react';
import '../styling/DailyGameCard.css';

class DailyGameCard extends React.Component{
    render(){
        return(
            <div className="DailyGameCard">
                <div className="DailyCards">
                    <div className="card-cover" id="who"></div>
                    <div className="card-text"></div><p>#WhoSaidThat?</p></div>
                <div className="DailyCards">#WhoLikedIt?</div>
                <div className="DailyCards">#WhoHasMoreFollowers?</div>
            </div>
        );
    }


}




export default DailyGameCard;
