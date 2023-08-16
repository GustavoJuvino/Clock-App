import { useState, useEffect } from 'react'

const useGetLocation = () => {
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return {
    latitude,
    longitude,
  }
}

export default useGetLocation
