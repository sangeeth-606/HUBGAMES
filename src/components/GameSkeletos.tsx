// import React from 'react'
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameSkeletos() {
  return (
    <Card width='300px' borderRadius={10} overflow='hidden' >
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default GameSkeletos