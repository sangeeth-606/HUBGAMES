import {  ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import theme from "./theme/theme";
import GameCards from "./components/GameCards";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {

  const [selectedGenre ,setSelectedGenre] = useState<Genre | null >(null);
  return (
    <ChakraProvider theme={theme}>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area="nav" >
          {" "}
          <Navbar />
          
        </GridItem>
        <GridItem area="aside" paddingX={5} display={{ base: 'none', lg: 'block' }}>
          {" "}
          <GenreList  onSelectGenre={(genre)=>setSelectedGenre(genre)} />
        </GridItem>
        <GridItem area="main" >
          {" "}
          <GameCards/>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
