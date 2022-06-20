import React from 'react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

import { Stack } from '@chakra-ui/react'

import { NavLink } from '../NavLink'
import { NavSection } from '../NavSection'

const SidebarNav: React.FC = () => {
  return (
    <Stack spacing="48px" alignItems="flex-start">
      <NavSection title="GENERAL">
        <NavLink href="/dashboard" title="Dashboard" icon={RiDashboardLine} />
        <NavLink href="/users" title="Users" icon={RiContactsLine} />
      </NavSection>

      <NavSection title="AUTOMATION">
        <NavLink href="/forms" title="Forms" icon={RiInputMethodLine} />
        <NavLink href="/automation" title="Automation" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  )
}

export { SidebarNav }