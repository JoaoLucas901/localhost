import { Flex, Image, VStack, Heading, Text, Input, Stack, Button, Link as ChakraLink, HStack, Field } from "@chakra-ui/react";
import loginImage from "../../public/assets/login-image.gif";
import { useForm } from "react-hook-form";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import NextLink from "next/link";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import { useSession } from "@/contexts/SessionContext";
import { useEffect } from "react";

const signInFormSchema = z.object({
  email: z.email("Email é obrigatório").nonempty("Digite um email válido"),
  password: z.string().nonempty("Senha é obrigatória").min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type signInFormData = z.infer<typeof signInFormSchema>;

export default function Login() {
  const { user, updateUser } = useSession();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInFormSchema),
  });

  function handleSignIn(data: signInFormData) {
    console.log(data);
    updateUser({
      id: "teste",
      email: data.email,
      cpf: "12345678901",
      fullName: "João Lucas",
      avatarUrl: ""
    });

  }

  useEffect(() => {
    console.log(user);
  }, [user])

    return (
        <Flex w="100vw" h="100vh">
          <Flex w="50%" bg="#2C73EB" align="center" justify="center">

            <Image w={500} h={500} src={loginImage.src}/>

          </Flex>
           <VStack w="50%" justify="center">
            <Stack>
            <Heading as="h1" fontSize="3xl" fontWeight="bold" color="black">Login</Heading>
            <Text as="h1" fontSize="lg" fontWeight="normal" color="gray.400">Se você já for um membro, já pode ir logando com seu e-mail e senha.</Text>

            <VStack as="form" onSubmit={handleSubmit(handleSignIn)} align="flex-start" gap={6} mt={10}>
                  <Field.Root invalid={!!errors.email}>
                  <Field.Label color="gray.500" fontSize="md">
                  Email
                  </Field.Label>
                  <Input type="email" h={16} colorPalette="blue" borderRadius="md" color="black" {...register("email")} />
                  <Field.ErrorText>
                    {errors.email?.message}
                  </Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={!!errors.password}>
                  <Field.Label color="gray.500" fontSize="md">
                  Senha
                  </Field.Label>
                  <PasswordInput h={16} colorPalette="blue" borderRadius="md" color="black" {...register("password")} />
                  <Field.ErrorText>
                    {errors.password?.message}
                  </Field.ErrorText>
                  </Field.Root>

              <Checkbox colorPalette="blue" color="gray.500" fontSize="md" fontWeight="medium">
                Lembrar meu login
              </Checkbox>

              <Button type="submit" w="full" h={16} colorPalette="blue" borderRadius="md" fontSize="md" fontWeight="medium">
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