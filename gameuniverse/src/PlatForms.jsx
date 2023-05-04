import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import GameList from "./GameList";


function PlatForms(){
    const [platformGames, setPlatformGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


 useEffect(() => {
   
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3cac3fbcefmsh285e5c6ca28a87ap1dc0d3jsn0513bb7ace9c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
  .then(response => response.json())
  .then(data => setPlatformGames(data))
     }, []);

     const handleSearchTermChange = (e) => {
      setSearchTerm(e.target.value);
    }
  
    const filteredGames = platformGames.filter(
      (game) => game.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

     return (
        <>
        <NavBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
        <GameList games={filteredGames} setPlatformGames={setPlatformGames}/>
        <div> 
          <div>
            {platformGames.map(game => (
              <div key={game.id}>
                <img src={game.thumbnail} alt={game.title} />
              </div>
            ))}
          </div>
        </div>
        </>
      );
      

}
export default PlatForms;
