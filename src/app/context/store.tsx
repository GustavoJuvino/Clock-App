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

  message: string
  setMessage: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
  infosContainer: false,
  setInfosContainer: (): boolean => true,

  message: '',
  setMessage: (): string => '',
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const GlobalContextProvider = ({ children }) => {
  const [infosContainer, setInfosContainer] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <GlobalContext.Provider
      value={{ infosContainer, setInfosContainer, message, setMessage }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
