import React from 'react'

import { Box, Stack, Text } from '@chakra-ui/react'

interface NavSectionProps {
  title: string
  children: React.ReactNode
}

const NavSection: React.FC<NavSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Text fontSize="small" fontWeight="bold" color="gray.400">
        {title}
      </Text>

      <Stack spacing="16px" marginTop="32px" alignItems="stretch">
        {children}
      </Stack>
    </Box>
  )
}

export { NavSection }