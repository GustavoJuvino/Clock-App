'use client'

import React from 'react'
import { motion } from 'framer-motion'

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
    <motion.div
      className="my-2 flex items-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, type: 'spring' }}
      transition={{ ease: 'circOut', duration: 0.5 }}
    >
      <h2 className="text-lg">{`${celsius}°C ,`}</h2>
      <h2 className="hidden text-lg">{`${fahrenheit}°F ,`}</h2>
      <span className="ml-1">{condition}</span>
    </motion.div>
  )
}

export default CurrentWeather
