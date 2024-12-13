import {  ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import theme from "./theme/theme";
import GameCards from "./components/GameCards";
// import { ThemeToggle } from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid templateAreas={`"nav nav" "aside main"`}>
        <GridItem area="nav" >
          {" "}
          <Navbar />
          
        </GridItem>
        <GridItem area="aside" bg="blue.500">
          {" "}
          <GenreList/>
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
