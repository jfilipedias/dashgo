import React from 'react'

import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Search } from './Search'

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth="1480px"
      height="80px"
      marginX="auto"
      marginTop="16px"
      paddingX="24px"
      alignItems="center"
    >
      <Logo />
      <Search />

      <Flex alignItems="center" marginLeft="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}

export { Header }