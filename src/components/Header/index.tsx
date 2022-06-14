import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

const Header: React.FC = () => {
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
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        width="256px"
      >
        dashgo
        <Text as="span" marginLeft="4px" color="pink.500">.</Text>
      </Text>

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

      <Flex
        alignItems="center"
        marginLeft="auto"
      >
        <HStack
          spacing="32px"
          marginX="32px"
          paddingRight="32px"
          paddingY="4px"
          color="gray.300"
          borderRightWidth="1px"
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="xl" />
          <Icon as={RiUserAddLine} fontSize="xl" />
        </HStack>

        <Flex alignItems="center">
          <Box marginRight="16px" textAlign="right">
            <Text>Filipe Dias</Text>
            <Text color="gray.300" fontSize="small">contact@filipedias.dev</Text>
          </Box>

          <Avatar size="md" name="Filipe Dias" src="https://github.com/jfilipedias.png" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export { Header }