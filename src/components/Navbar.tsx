import { HStack, Image } from "@chakra-ui/react"
import logo from "../asset/logo.webp"


const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize="60px" />
        <h3>NavBar</h3>
    </HStack>
  )
}

export default Navbar