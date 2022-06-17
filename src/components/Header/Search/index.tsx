import { RiSearchLine } from 'react-icons/ri'

import { Flex, Icon, Input } from '@chakra-ui/react'

const Search: React.FC = () => {
  return (
    <Flex
      as="label"
      flex="1"
      padding="16px 32px"
      marginLeft="24px"
      maxWidth="400px"
      alignSelf="center"
      position="relative"
      color="gray.200"
      background="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        placeholder="Search on dashgo"
        _placeholder={{ color: 'gray.400' }}
        paddingX="16px"
        marginRight="16px"
      />
      <Icon as={RiSearchLine} fontSize="xl" />
    </Flex>
  )
}

export { Search }