// import React from 'react'

import useGames from "../hooks/useGames";

const GameCards = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameCards;
