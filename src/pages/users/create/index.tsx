import { NextPage } from 'next'

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack
} from '@chakra-ui/react'

import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';
import { Input } from '../../../components/Form/Input';

const CreateUser: NextPage = () => {
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

        <Box flex="1" borderRadius="8px" background="gray.800" padding="32px">
          <Heading size="lg" fontWeight="normal">Create user</Heading>

          <Divider marginY="24px" borderColor="gray.700" />

          <Stack spacing="32px">
            <SimpleGrid spacing="32px" width="100%" minChildWidth="240px">
              <Input name="name" label="Full name" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid spacing="32px" width="100%" minChildWidth="240px">
              <Input name="password" label="Password" type="password" />
              <Input name="passwordConfirmation" label="Password confirmation" type="password" />
            </SimpleGrid>
          </Stack>

          <Flex marginTop="32px" justifyContent="flex-end">
            <HStack spacing="16px">
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex >
    </Box >
  )
}

export default CreateUser;