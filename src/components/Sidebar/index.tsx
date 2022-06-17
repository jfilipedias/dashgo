import React from 'react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

import { Box, Stack } from '@chakra-ui/react'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

const Sidebar: React.FC = () => {
  return (
    <Box as="aside" width="256px" marginRight="32px" >
      <Stack spacing="48px" alignItems="flex-start">
        <NavSection title="GENERAL">
          <NavLink title="Dashboard" icon={RiDashboardLine} />
          <NavLink title="Users" icon={RiContactsLine} />
        </NavSection>

        <NavSection title="AUTOMATION">
          <NavLink title="Forms" icon={RiInputMethodLine} />
          <NavLink title="Automation" icon={RiGitMergeLine} />
        </NavSection>
      </Stack>
    </Box >
  )
}

export { Sidebar }