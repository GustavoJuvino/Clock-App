'use client'

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface locationProps {
  city: string
  countryCode: string
  latitude?: number
  longitude?: number
}

interface ContextProps {
  location: locationProps
  setLocation: Dispatch<SetStateAction<locationProps>>

  infosContainer: boolean
  setInfosContainer: Dispatch<SetStateAction<boolean>>

  message: string
  setMessage: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
  location: { city: '', countryCode: '' },
  setLocation: (): locationProps => Object(),

  infosContainer: false,
  setInfosContainer: (): boolean => true,

  message: '',
  setMessage: (): string => '',
})

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState<locationProps>({
    city: '',
    countryCode: '',
  })
  const [infosContainer, setInfosContainer] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        location,
        setLocation,
        infosContainer,
        setInfosContainer,
        message,
        setMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
