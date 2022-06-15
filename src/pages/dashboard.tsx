import { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Dashboard: NextPage = () => {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        width="100%"
        maxWidth="1480px"
        marginX="auto"
        marginY="24px"
        paddingX="24px"
      >
        <Sidebar />
      </Flex>

    </Flex>
  )
}

export default Dashboard