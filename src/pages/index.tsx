import type { NextPage } from "next";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Flex, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn: NextPage = () => {
  const signInFormSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<FieldValues> = (value) => {
    console.log(value);
  };

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        flexDirection="column"
        width="100%"
        maxWidth="360px"
        background="gray.800"
        padding="32px"
        borderRadius="8px"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="16px">
          <Input
            label="E-mail"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            error={errors.password}
            {...register("passwod")}
          />
        </Stack>

        <Button
          type="submit"
          marginTop="24px"
          size="lg"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          SignIn
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
