import React, { useState, useEffect } from "react";
import "../App.css";
import GameCard from './GameCard'

export default function Library(props) {
     return (
          <div className="allGames">
               {props.games && props.games.map(
                    game => <GameCard game={game}/>
               )}
          </div>
     );
}
