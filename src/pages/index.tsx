import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Flex, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

interface SignInFormInputs {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
  password: yup.string().required("Password is required"),
});

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormInputs>({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormInputs> = (value) => {
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
            {...register("password")}
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
