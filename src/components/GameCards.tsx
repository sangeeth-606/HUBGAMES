// import React from 'react'

import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameBox from "./GameBox";

const GameCards = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={ { sm:1 , md:2 , lg:3 , xl:4 } } padding={10} spacing={10} overflow="hidden" >
        {games.map((game) => (
          <GameBox key={game.id} game={game}/>
        ))} 
      </SimpleGrid >
    </>
  );
};

export default GameCards;
