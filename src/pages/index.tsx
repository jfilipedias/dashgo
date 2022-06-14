import type { NextPage } from 'next'
import { Button, Flex, Stack } from '@chakra-ui/react'

import { Input } from '../components/Form/Input'

const SignIn: NextPage = () => {
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
          <Input name="email" label="E-mail" type="email" />

          <Input name="password" label="Password" type="password" />
        </Stack>

        <Button
          type="submit"
          marginTop="24px"
          size="lg"
          colorScheme="pink"
        >
          SignIn
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
