import React from 'react'

import { Text } from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      width="256px"
    >
      dashgo
      <Text as="span" marginLeft="4px" color="pink.500">.</Text>
    </Text>
  )
}

export { Logo }