import React from 'react'

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from '@chakra-ui/react'

import { SidebarNav } from './SidebarNav'
import { useSidebarDrawer } from '../../contexts/sidebarDrawerContext'

const Sidebar: React.FC = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  const { isOpen, onClose } = useSidebarDrawer()

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent background="gray.800" padding="16px">
            <DrawerCloseButton marginTop="24px" />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" width="256px" marginRight="32px" >
      <SidebarNav />
    </Box>
  )
}

export { Sidebar }