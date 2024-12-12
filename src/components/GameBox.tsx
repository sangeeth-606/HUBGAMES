// import React from 'react'
import { Card, CardBody, Heading, Image, HStack} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./Platformiconlist";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-ulr";

interface Props {
    game: Game

}

const GameBox = ( {game}:Props ) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)} borderRadius='10px 10px 0 0'></Image>
        <CardBody>
            <Heading fontSize="2xl" > {game.name} </Heading>
            <HStack justifyContent='space-between'>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameBox