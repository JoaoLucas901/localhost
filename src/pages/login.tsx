import { Flex, Image, VStack, Heading, Text, Input, Stack, Button, Link as ChakraLink, HStack } from "@chakra-ui/react";
import loginImage from "../../public/assets/login-image.gif";
import { Checkbox } from "@/components/ui/checkbox";
import NextLink from "next/link";

export default function Login() {
    return (
        <Flex w="100vw" h="100vh">
          <Flex w="50%" bg="#2C73EB" align="center" justify="center">

            <Image w={500} h={500} src={loginImage.src}/>

          </Flex>
           <VStack w="50%" justify="center">
            <Stack>
            <Heading as="h1" fontSize="3xl" fontWeight="bold" color="black">Login</Heading>
            <Text as="h1" fontSize="lg" fontWeight="normal" color="gray.400">Se você já for um membro, já pode ir logando com seu e-mail e senha.</Text>

            <VStack align="flex-start" gap={6}>

              <Input />

              <Input />

              <Checkbox colorPalette="blue" color="gray.500" fontSize="md" fontWeight="medium">
                Lembrar meu login
              </Checkbox>

              <Button w="full" h={16} colorPalette="blue" borderRadius="md" fontSize="md" fontWeight="medium">
                Entrar
              </Button>
              </VStack>

              <HStack justify="center" gap={2} mt={10}>
                <Text fontSize="md" fontWeight="medium" color="black">Não possui uma conta?</Text>
                  <ChakraLink color="blue.500" asChild>
                   <NextLink href="/sign-up">Crie sua conta aqui!</NextLink>
                  </ChakraLink>
              </HStack>

            </Stack>
          </VStack>

        </Flex>


    )
}