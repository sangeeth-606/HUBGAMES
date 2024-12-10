// import React from 'react'

import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameCards = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get<FetchGameResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(error => setError(error.message))
  }, []);

  return (
    <>
    {error && <p>{error}</p>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameCards;
