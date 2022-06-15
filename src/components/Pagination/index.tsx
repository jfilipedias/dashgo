import { Box, Button, Stack } from '@chakra-ui/react'

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
        <Button
          width="16px"
          size="sm"
          fontSize="xs"
          colorScheme="pink"
          disabled
          _disabled={{ background: 'pink.500', cursor: 'default' }}
        >
          1
        </Button>

        <Button
          width="16px"
          size="sm"
          fontSize="xs"
          background="gray.700"
          _hover={{ background: 'gray.500' }}
        >
          2
        </Button>

        <Button
          width="16px"
          size="sm"
          fontSize="xs"
          background="gray.700"
          _hover={{ background: 'gray.500' }}
        >
          3
        </Button>

        <Button
          width="16px"
          size="sm"
          fontSize="xs"
          background="gray.700"
          _hover={{ background: 'gray.500' }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  )
} 