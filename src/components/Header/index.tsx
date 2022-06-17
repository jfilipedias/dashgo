import React from 'react'

import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Search } from './Search'
import { useSidebarDrawer } from '../../contexts/sidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

const Header: React.FC = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { onOpen } = useSidebarDrawer()

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="lg"
          variant="unstyled"
          onClick={onOpen}
          marginRight="8px"
        >

        </IconButton>
      )}

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