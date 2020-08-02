import React from 'react';
import '../styling/InfoGameCard.css';

class InfoGameCard extends React.Component{
    render(){
        return(
            <div className="InfoGameCard">
                <div className="InfoCards">#WhoSaidThat?</div>
                <div className="InfoCards">#WhoLikedIt?</div>
                <div className="InfoCards">#WhoHasMoreFollowers?</div>
            </div>
        );
    }


}




export default InfoGameCard;