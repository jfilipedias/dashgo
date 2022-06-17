import React from 'react'

import { Box, Stack } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

export const Pagination: React.FC = () => {
  return (
    <Stack
      spacing="24px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      marginTop="32px"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>

      <Stack spacing="8px" direction="row">
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
        <PaginationItem pageNumber={6} />
      </Stack>
    </Stack>
  )
} 