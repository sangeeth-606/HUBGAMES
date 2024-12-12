// import React from 'react'
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./Platformiconlist";

interface Props {
    game: Game

}

const GameBox = ( {game}:Props ) => {
  return (
    <Card>
        <Image src={game.background_image} borderRadius='10px 10px 0 0'></Image>
        <CardBody>
            <Heading fontSize="2xl" > {game.name} </Heading>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
    </Card>
  )
}

export default GameBox