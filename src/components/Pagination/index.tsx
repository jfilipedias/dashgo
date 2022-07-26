import React from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number): number[] => {
  const positionsArray = [...new Array(to - from)];
  const pagesArray = positionsArray.map((_, index) => from + index + 1);

  return pagesArray.filter((page) => page > 0);
};

const Ellipsis: React.FC = () => {
  return (
    <Text color="gray.300" width="8" textAlign="center">
      ...
    </Text>
  );
};

export const Pagination: React.FC<PaginationProps> = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      spacing="24px"
      direction={["column", "row"]}
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      marginTop="32px"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>

      <Stack spacing="8px" direction="row">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem pageNumber={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && <Ellipsis />}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                pageNumber={page}
                onPageChange={onPageChange}
              />
            );
          })}

        <PaginationItem
          pageNumber={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                pageNumber={page}
                onPageChange={onPageChange}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + siblingsCount + 1 < lastPage && <Ellipsis />}
            <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Stack>
    </Stack>
  );
};
