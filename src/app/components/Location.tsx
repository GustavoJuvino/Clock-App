'use client'

import React from 'react'
import Button from './Button'
import { useGlobalContext } from '../context/store'
import useGetLocation from '../hooks/useGetLocation'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

const Location = () => {
  const { infosContainer, setInfosContainer } = useGlobalContext()
  const { latitude, longitude } = useGetLocation()

  const { data } = useQuery({
    queryKey: ['location', latitude, longitude],
    queryFn: async () => {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

  return (
    <motion.div
      className="
        flex
        w-full
        justify-between
        max-md:flex-col
        max-md:gap-y-20
        md:items-center
      "
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: 'circOut', duration: 0.5 }}
    >
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
        {`in ${data?.city}, ${data?.countryCode}`}
      </h3>

      <Button onClick={() => setInfosContainer(!infosContainer)} />
    </motion.div>
  )
}

export default Location
