'use client'

import React from 'react'

interface CurrentWeatherProps {
  condition: string
  celsius: number
  fahrenheit: number
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  condition,
  celsius,
  fahrenheit,
}) => {
  return (
    <div className="my-2 flex items-center">
      <h2 className="text-lg">{`${celsius}°C ,`}</h2>
      <h2 className="hidden text-lg">{`${fahrenheit}°F ,`}</h2>
      <span className="ml-1">{condition}</span>
    </div>
  )
}

export default CurrentWeather
