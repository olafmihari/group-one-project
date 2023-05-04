import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import "./GameList.css";
import NavBar from "./NavBar";

function Fighting() {
  const [FightingGames, setFightingGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      const url =
        "https://free-to-play-games-database.p.rapidapi.com/api/games?category=fighting";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "3cac3fbcefmsh285e5c6ca28a87ap1dc0d3jsn0513bb7ace9c",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setFightingGames(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGames();
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredGames = FightingGames.filter(
    (game) => game.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
    <NavBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
    <div className="music-list">
      <ol className="item-container">
        {filteredGames.map((data) => (
          <GameCard key={data.id} data={data} />
        ))}
      </ol>
    </div>
    </>
  );
}

export default Fighting;
