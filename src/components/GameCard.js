import * as React from "react";
import '../App.css'
import ReactCardFlip from "react-card-flip";

class GameCard extends React.Component {
     constructor() {
          super();
          this.state = {
               isFlipped: false
          };
          this.handleClick = this.handleClick.bind(this);
     }

     handleClick(e) {
          e.preventDefault();
          this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
     }

     render(props) {
          console.log(this.props.games)
          return (
               <div onClick={this.handleClick}>
                    <ReactCardFlip
                         isFlipped={this.state.isFlipped}
                         flipDirection="horizontal"
                    >
                         <div className="gameCard">
                              <img src={this.props.game.boxArt} />
                              <br />
                              <h5>{this.props.game.name}</h5>
                         </div>

                         <div className="gameCard">
                              <h5>Players: {this.props.game.players}</h5>
                              <h6>{this.props.game.description}</h6>
                         </div>
                    </ReactCardFlip>
               </div>
          );
     }
}

export default GameCard;
