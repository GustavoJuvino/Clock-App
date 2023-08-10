'use client'

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface ContextProps {
  infosContainer: boolean
  setInfosContainer: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
  infosContainer: false,
  setInfosContainer: (): boolean => true,
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const GlobalContextProvider = ({ children }) => {
  const [infosContainer, setInfosContainer] = useState(false)

  return (
    <GlobalContext.Provider value={{ infosContainer, setInfosContainer }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
