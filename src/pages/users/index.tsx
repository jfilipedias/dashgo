import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { NextPage } from "next";
import Link from "next/link";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table as ChakraTable,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { useUsers } from "../../services/hooks/useUsers";

const UsersList: NextPage = () => {
  const { data, isLoading, isFetching, error } = useUsers();

  const handleTable = () => {
    if (isLoading) return <Spinner />;
    if (error) return <Text>Was not possible to load the user data</Text>;

    return <Table data={data} />;
  };

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
            <Heading size="lg" fontWeight="normal">
              Users
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" marginLeft="16px" />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="xl" />}
              >
                Create new
              </Button>
            </Link>
          </Flex>

          <Divider marginY="24px" borderColor="gray.700" />

          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            {handleTable()}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const Table = ({ data }) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <ChakraTable colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th
              width="32px"
              paddingX={["16px", "16px", "24px"]}
              color="gray.300"
            >
              <Checkbox colorScheme="pink"></Checkbox>
            </Th>

            <Th>User</Th>

            {isWideVersion && <Th>Register Date</Th>}

            <Th width="24"></Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((user) => {
            return (
              <Tr key={user.id}>
                <Td paddingX={["16px", "16px", "24px"]}>
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">{user.name}</Text>
                    <Text fontSize="sm" color="gray.300">
                      {user.email}
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>{user.createdAt}</Td>}

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
            );
          })}
        </Tbody>
      </ChakraTable>

      <Pagination />
    </>
  );
};

export default UsersList;
