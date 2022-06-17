import React from 'react'

import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  pageNumber: number
  isCurrent?: boolean
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  pageNumber,
  isCurrent = false
}) => {
  if (isCurrent) {
    return (
      <Button
        width="16px"
        size="sm"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{ background: 'pink.500', cursor: 'default' }}
      >
        {pageNumber}
      </Button>
    )
  }

  return (
    <Button
      width="16px"
      size="sm"
      fontSize="xs"
      background="gray.700"
      _hover={{ background: 'gray.500' }}
    >
      {pageNumber}
    </Button>
  )
}

export { PaginationItem }