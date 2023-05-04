import React, {useEffect, useState} from "react";
import MusicList from "./GameList";
import "./GameList.css"
import NavBar from "./NavBar";

function Home(){
    const [games, setGames] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');


 useEffect(() => {
   
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3cac3fbcefmsh285e5c6ca28a87ap1dc0d3jsn0513bb7ace9c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
  .then(response => response.json())
  .then(data => setGames(data))
     }, []);

     const handleSearchTermChange = (e) => {
      setSearchTerm(e.target.value);
    }
  
    const filteredGames = games.filter(
      (game) => game.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


 return (
   <div>
  
    <NavBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
     <MusicList games={filteredGames} setGames={setGames}/>
        </div>
 );

    }

export default Home;