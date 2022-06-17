import { createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

interface SidebarDrawerContextProps {
  children: React.ReactNode
}

type sidebarDrawerContextData = UseDisclosureReturn

const sidebarDrawerContex = createContext({} as sidebarDrawerContextData)

const SidebarDrawerProvider: React.FC<SidebarDrawerContextProps> = ({
  children
}) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <sidebarDrawerContex.Provider value={disclosure}>
      {children}
    </sidebarDrawerContex.Provider>
  )
}

const useSidebarDrawer = () => useContext(sidebarDrawerContex)

export { SidebarDrawerProvider, useSidebarDrawer }