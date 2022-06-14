import { Button, Flex, Input, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
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
      >
        <Stack spacing="16px">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>

            <Input
              id="email"
              name="email"
              type="email"
              size="lg"
              variant="filled"
              background="gray.900"
              focusBorderColor="pink.500"
              _hover={{
                bg: 'gray.900',
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>

            <Input
              id="password"
              name="password"
              type="password"
              size="lg"
              variant="filled"
              background="gray.900"
              focusBorderColor="pink.500"
              _hover={{
                bg: 'gray.900',
              }}
            />
          </FormControl>
        </Stack>

        <Button
          type="submit"
          marginTop="24px"
          size="lg"
          colorScheme="pink"
        >
          Login
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
