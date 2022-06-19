import { NextPage } from 'next'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from '@chakra-ui/react'

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';

const UsersList: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        maxWidth="1480"
        marginX="auto"
        marginY="24px"
        paddingX="24px"
      >
        <Sidebar />

        <Box flex="1" borderRadius="8px" background="gray.800" padding="32px">
          <Flex
            marginBottom="32px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading size="lg" fontWeight="normal">Users</Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="xl" />}
            >
              Create new
            </Button>
          </Flex>

          <Divider marginY="24px" borderColor="gray.700" />

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th width="32px" paddingX={['16px', '16px', '24px']} color="gray.300" >
                  <Checkbox colorScheme="pink"></Checkbox>
                </Th>

                <Th>User</Th>

                {isWideVersion && <Th>Register Date</Th>}

                <Th width="24"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td paddingX={['16px', '16px', '24px']}>
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Filipe Dias</Text>
                    <Text fontSize="sm" color="gray.300">
                      contact@filipedias.dev
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>April 4, 2022</Td>}

                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                    >
                      Edit
                    </Button>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td paddingX={['16px', '16px', '24px']}>
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Filipe Dias</Text>
                    <Text fontSize="sm" color="gray.300">
                      contact@filipedias.dev
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>April 4, 2022</Td>}

                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                    >
                      Edit
                    </Button>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td paddingX={['16px', '16px', '24px']}>
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Filipe Dias</Text>
                    <Text fontSize="sm" color="gray.300">
                      contact@filipedias.dev
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>April 4, 2022</Td>}

                <Td>
                  {isWideVersion && (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="md" />}
                    >
                      Edit
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex >
    </Box >
  )
}

export default UsersList;