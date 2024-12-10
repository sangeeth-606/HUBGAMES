import { HStack, Image } from "@chakra-ui/react"
import logo from "../asset/logo.webp"
import { ThemeToggle } from "./ThemeToggle"


const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        
        <ThemeToggle />
    </HStack>
  )
}

export default Navbar