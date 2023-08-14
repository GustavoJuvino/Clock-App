'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { useGlobalContext } from '../context/store'
import Button from './Button'

interface locationProps {
  city: string
  countryCode: string
}

const Location = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState<locationProps>()
  const { infosContainer, setInfosContainer } = useGlobalContext()

  const getCurrentLocation = useCallback(() => {
    const success = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

      const fetchData = async () => {
        setLoading(true)

        try {
          const response = await fetch(geoApiUrl)
          const data = await response.json()
          setLocation(data)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => getCurrentLocation(), [getCurrentLocation])

  return (
    <div className="flex w-full justify-between max-md:flex-col max-md:gap-y-20 md:items-center">
      <h3
        className="
            text-[15px]
            uppercase
            max-md:tracking-[3.6px]
            max-sm:mt-4
            sm:text-lg
            md:text-2xl
        "
      >
        {loading && 'loading...'}
        {location && `in ${location.city}, ${location.countryCode}`}
      </h3>

      <Button onClick={() => setInfosContainer(!infosContainer)} />
    </div>
  )
}

export default Location
