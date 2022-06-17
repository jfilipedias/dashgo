import React from 'react'

import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Search } from './Search'

const Header: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

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
      {isWideVersion && <Search />}

      <Flex alignItems="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}

export { Header }