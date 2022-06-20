import React from 'react'
import Link from 'next/link'

import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text
} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  href: string
  title: string
  icon: React.ElementType
}

const NavLink: React.FC<NavLinkProps> = ({ title, icon, href, ...props }) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="xl" />
        <Text marginLeft="16px" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </Link>
  )
}

export { NavLink }