import React from 'react'
import Link from 'next/link'

import { Text } from '@chakra-ui/react'

const Logo: React.FC = () => {
  return (
    <Link href="/dashboard" passHref>
      <Text
        as="a"
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        width="256px"
      >
        dashgo
        <Text as="span" marginLeft="4px" color="pink.500">.</Text>
      </Text>
    </Link>
  )
}

export { Logo }