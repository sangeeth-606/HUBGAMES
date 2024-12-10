import {  ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import theme from "./theme/theme";
// import { ThemeToggle } from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
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
          Aside
        </GridItem>
        <GridItem area="main" bg="green.500">
          {" "}
          Main
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
