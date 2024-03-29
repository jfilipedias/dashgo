import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import * as yup from "yup";

import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Input } from "../../../components/Form/Input";
import { api } from "../../../services/api";
import { queryClient } from "../../../services/queryClient";

interface CreateUserFormInputs {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "The passwords must match"),
});

const postUsers = async (user: CreateUserFormInputs) => {
  const response = await api.post("users", {
    user: {
      ...user,
      created_at: new Date(),
    },
  });

  return response.data.user;
};

const CreateUser: NextPage = () => {
  const router = useRouter();

  const createUserMutation = useMutation(postUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const { register, handleSubmit, formState } = useForm<CreateUserFormInputs>({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormInputs> = async (
    values: CreateUserFormInputs
  ) => {
    await createUserMutation.mutateAsync(values);
    router.push("/users");
  };

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        maxWidth="1480"
        marginX="auto"
        marginY="24px"
        paddingX="24px"
      >
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius="8px"
          background="gray.800"
          padding={["24px", "32px"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>

          <Divider marginY="24px" borderColor="gray.700" />

          <Stack spacing="32px">
            <SimpleGrid
              spacing={["24px", "32px"]}
              width="100%"
              minChildWidth="240px"
            >
              <Input
                label="Full name"
                error={errors.name}
                {...register("name")}
              />
              <Input
                label="E-mail"
                type="email"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid
              spacing={["24px", "32px"]}
              width="100%"
              minChildWidth="240px"
            >
              <Input
                label="Password"
                type="password"
                error={errors.password}
                {...register("password")}
              />
              <Input
                label="Password confirmation"
                type="password"
                error={errors.passwordConfirmation}
                {...register("passwordConfirmation")}
              />
            </SimpleGrid>
          </Stack>

          <Flex marginTop="32px" justifyContent="flex-end">
            <HStack spacing="16px">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" colorScheme="pink">
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
