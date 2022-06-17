import React from 'react'

import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

const Profile: React.FC = () => {
  return (
    <Flex alignItems="center">
      <Box marginRight="16px" textAlign="right">
        <Text>Filipe Dias</Text>
        <Text color="gray.300" fontSize="small">contact@filipedias.dev</Text>
      </Box>

      <Avatar size="md" name="Filipe Dias" src="https://github.com/jfilipedias.png" />
    </Flex>
  )
}

export { Profile }