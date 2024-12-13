// import React from 'react'

import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameBox from "./GameBox";
import GameSkeletos from "./GameSkeletos";

const GameCards = () => {
  const { data, error, isLoading } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={ { sm:1 , md:2 , lg:3 , xl:4 } } padding={10} spacing={10} overflow="hidden" >
        {isLoading && data.map((game) => (
          <GameSkeletos key={game.id}/>
        ))} 
        {data.map((game) => (
          <GameBox key={game.id} game={game}/>
        ))} 
      </SimpleGrid >
    </>
  );
};

export default GameCards;
