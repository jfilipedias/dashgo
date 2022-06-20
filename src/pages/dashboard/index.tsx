import { useState } from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-06-15T00:00:00.000Z',
      '2022-06-16T00:00:00.000Z',
      '2022-06-17T00:00:00.000Z',
      '2022-06-18T00:00:00.000Z',
      '2022-06-19T00:00:00.000Z',
      '2022-06-20T00:00:00.000Z',
      '2022-06-21T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  { name: 'series1', data: [30, 55, 45, 80, 49, 60, 45] },
]

const Dashboard: NextPage = () => {
  const [showChart, setShowChart] = useState(false)

  setTimeout(() => {
    setShowChart(true)
  }, 1)

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
        {showChart && (
          <SimpleGrid
            flex="1"
            alignItems="flex-start"
            gap="16px"
            minChildWidth="320px"
          >
            <Box
              padding={["24px", "32px"]}
              paddingBottom="16px"
              background="gray.800"
              borderRadius="8px"
            >
              <Text fontSize="large" marginBottom="16px">Week subscribers</Text>
              <Chart options={options} series={series} type="area" height="160px" />
            </Box>

            <Box
              padding={["24px", "32px"]}
              paddingBottom="16px"
              background="gray.800"
              borderRadius="8px"
            >
              <Text fontSize="large" marginBottom="16px">Open rate</Text>
              <Chart options={options} series={series} type="area" height="160px" />
            </Box>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  )
}

export default Dashboard