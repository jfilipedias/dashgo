import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeFill, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

const Sidebar: React.FC = () => {
  return (
    <Box as="aside" width="256px" marginRight="32px" >
      <Stack spacing="48px" alignItems="flex-start">
        <Box>
          <Text fontSize="small" fontWeight="bold" color="gray.400">
            GENERAL
          </Text>

          <Stack spacing="16px" marginTop="32px" alignItems="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="xl" />
              <Text marginLeft="16px" fontWeight="medium">Dashboard</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="xl" />
              <Text marginLeft="16px" fontWeight="medium">Users</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontSize="small" fontWeight="bold" color="gray.400">
            AUTOMATION
          </Text>

          <Stack spacing="16px" marginTop="32px" alignItems="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="xl" />
              <Text marginLeft="16px" fontWeight="medium">Forms</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="xl" />
              <Text marginLeft="16px" fontWeight="medium">Automation</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box >
  )
}

export { Sidebar }