// import React from 'react'
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
    game: Game

}

const GameBox = ( {game}:Props ) => {
  return (
    <Card>
        <Image src={game.background_image} ></Image>
        <CardBody>
            <Heading fontSize="2xl" > {game.name} </Heading>
        </CardBody>
    </Card>
  )
}

export default GameBox