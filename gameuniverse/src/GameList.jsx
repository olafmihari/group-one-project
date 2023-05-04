import React from "react";
import GameCard from "./GameCard";
import "./GameList.css";


function GameList({ games }) {
;

return (
<div className="Game-list">
<ol className="item-container">
{games.map((data) => (
<GameCard key={data.id} data={data}/>
))}
</ol>
</div>
);
}

export default GameList;
