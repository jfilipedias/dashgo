import React from 'react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

import { HStack, Icon } from '@chakra-ui/react'

const NotificationsNav: React.FC = () => {
  return (
    <HStack
      spacing={['24px', '32px']}
      marginX={['24px', '32px']}
      paddingRight={['24px', '32px']}
      paddingY="4px"
      color="gray.300"
      borderRightWidth="1px"
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="xl" />
      <Icon as={RiUserAddLine} fontSize="xl" />
    </HStack>
  )
}

export { NotificationsNav }