'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Quotes from './Quotes'
import Image from 'next/image'
import Location from './Location'
import CurrentTime from './CurrentTime'
import CurrentWeather from './CurrentWeather'
import { useGlobalContext } from '../context/store'
import useGetLocation from '../hooks/useGetLocation'
import { motion } from 'framer-motion'
import { Moon, Sun } from '../../../public/assets/svgs'

interface WeatherProps {
  condition: { text: string; icon: string }
  temp_c: number
  temp_f: number
}

const today = new Date()
const formatToday = new Intl.DateTimeFormat('en-us', {
  dayPeriod: 'short',
})
const dayPeriod = formatToday.format(today)

const DisplayTime = () => {
  const [weather, setWeather] = useState<WeatherProps>()
  const { latitude, longitude } = useGetLocation()
  const { infosContainer, message, setMessage } = useGlobalContext()

  const fetchWeather = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${latitude},${longitude}`,
      )
      const data = await response.json()
      setWeather(data.current)
    } catch (error) {
      throw new Error('Network response was not ok')
    }
  }, [latitude, longitude])

  useEffect(() => {
    if (latitude && longitude) fetchWeather()

    switch (dayPeriod) {
      case 'at night':
      case 'in the evening':
        setMessage('Evening')
        break
      case 'in the afternoon':
      case 'noon':
        setMessage('Afternoon')
        break
      case 'in the morning':
        setMessage('Morning')
        break
    }
  }, [setMessage, fetchWeather, latitude, longitude])

  const variants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 1, y: -400 },
  }

  return (
    <section
      className="
          relative
          flex
          h-[100vh]
          w-auto
          flex-col
          max-md:ml-[26px]
          md:mx-16
          xl:mx-[165px]
        "
    >
      <Quotes />

      <section
        id="display_clock"
        data-infos-actived={infosContainer}
        className="
          absolute
          bottom-10
          z-50
          w-full
          sm:bottom-16
          md:bottom-[98px]
        "
      >
        <motion.section
          variants={variants}
          animate={infosContainer ? 'open' : 'closed'}
          transition={{ ease: 'circOut', duration: 0.5 }}
        >
          <motion.div
            className="
              flex
              items-center
              gap-x-2
              sm:gap-x-4
            "
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeOut', duration: 0.9 }}
          >
            {weather?.condition.icon ? (
              <Image
                width={50}
                height={50}
                alt="condition-icon"
                src={`https:${weather.condition.icon}`}
              />
            ) : message === 'Evening' ? (
              <Moon />
            ) : (
              <Sun />
            )}

            <h4 className="flex text-[12px] uppercase max-md:tracking-[3.6px] max-mobile:hidden sm:text-base md:text-xl">
              {`Good ${message}, it's currently`}
            </h4>

            <h4 className="text-[12px] uppercase mobile:hidden">{`Good ${message}`}</h4>
          </motion.div>

          <CurrentTime />
          {weather && (
            <CurrentWeather
              condition={weather.condition.text}
              celsius={weather.temp_c}
              fahrenheit={weather.temp_f}
            />
          )}
          <Location />
        </motion.section>
      </section>
    </section>
  )
}

export default DisplayTime
