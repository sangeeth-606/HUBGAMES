import {  ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import theme from "./theme/theme";
import GameCards from "./components/GameCards";
// import { ThemeToggle } from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";

function App() {
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
