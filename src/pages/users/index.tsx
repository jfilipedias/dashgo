import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { NextPage } from "next";
import NextLink from "next/link";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
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
import { GetUsersResponse, useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

interface TableProps {
  data: GetUsersResponse;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MILLISECONDS_TO_SECONDS = 1000;
const SECONDS_TO_MINUTES = 60;

const UsersList: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(currentPage);

  const handleTable = () => {
    if (isLoading) return <Spinner />;

    if (error) return <Text>Was not possible to load the user data</Text>;

    return (
      <Table
        data={data}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    );
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

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="xl" />}
              >
                Create new
              </Button>
            </NextLink>
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

const Table: React.FC<TableProps> = ({ data, currentPage, onPageChange }) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(
      ["users", userId],
      async () => {
        const response = await api.get(`/users/${userId}`);

        return response.data;
      },
      {
        staleTime: MILLISECONDS_TO_SECONDS * SECONDS_TO_MINUTES * 1,
      }
    );
  };

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
          {data.users.map((user) => {
            return (
              <Tr key={user.id}>
                <Td paddingX={["16px", "16px", "24px"]}>
                  <Checkbox colorScheme="pink"></Checkbox>
                </Td>

                <Td>
                  <Box>
                    <Link
                      color="purple.400"
                      onMouseEnter={() => handlePrefetchUser(user.id)}
                    >
                      <Text fontWeight="bold">{user.name}</Text>
                    </Link>
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

      <Pagination
        totalCountOfRegisters={data.totalCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default UsersList;
