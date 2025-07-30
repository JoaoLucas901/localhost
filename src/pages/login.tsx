import { Flex, Image } from "@chakra-ui/react";
import loginImage from "../../public/assets/login-image.gif";

export default function Login() {
    return (
        <Flex w="100vw" h="100vh">
          <Flex w="50%" bg="blue.400" align="center" justify="center">

            <Image w={500} h={500} src={loginImage.src}/>

          </Flex>
            <Flex w="50%" bg="green.400">
            </Flex>

        </Flex>


    )
}