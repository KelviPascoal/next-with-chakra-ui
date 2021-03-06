import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

const SignIn: NextPage = () => {
  const { register, handleSubmit } = useForm();

  const handleSignIn: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input type="email" label="E-mail" {...register("email")} />
          <Input type="password" label="Password" {...register("password")} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
