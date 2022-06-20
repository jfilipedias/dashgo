import React from 'react'

import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text
} from '@chakra-ui/react'

import { ActiveLink } from '../../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  href: string
  title: string
  icon: React.ElementType
}

const NavLink: React.FC<NavLinkProps> = ({ title, icon, href, ...props }) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="xl" />
        <Text marginLeft="16px" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}

export { NavLink }