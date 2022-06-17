import React from 'react'

import {
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
  Text
} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  title: string
  icon: React.ElementType
}

const NavLink: React.FC<NavLinkProps> = ({ title, icon, ...props }) => {
  return (
    <Link display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize="xl" />
      <Text marginLeft="16px" fontWeight="medium">{title}</Text>
    </Link>
  )
}

export { NavLink }