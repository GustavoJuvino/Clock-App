'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Quotes from './Quotes'
import Image from 'next/image'
import Location from './Location'
import CurrentTime from './CurrentTime'
import CurrentWeather from './CurrentWeather'
import { useGlobalContext } from '../context/store'
import useGetLocation from '../hooks/useGetLocation'

interface WeatherProps {
  condition: { text: string; icon: string }
  temp_c: number
  temp_f: number
}

const DisplayTime = () => {
  const [weather, setWeather] = useState<WeatherProps>()
  const { latitude, longitude } = useGetLocation()
  const { infosContainer, message, setMessage } = useGlobalContext()

  const today = new Date()
  const formatToday = new Intl.DateTimeFormat('en-us', {
    dayPeriod: 'short',
  })
  const dayPeriod = formatToday.format(today)

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
        setMessage('Afternoon')
        break
      case 'in the morning':
        setMessage('Morning')
        break
    }
  }, [setMessage, dayPeriod, fetchWeather, latitude, longitude])

  return (
    <section
      className="
          relative
          flex
          h-[100vh]
          w-auto
          flex-col
          max-sm:ml-[26px]
          sm:ml-16
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
          data-[infos-actived=true]:top-24
          sm:bottom-16
          data-[infos-actived=true]:sm:top-14
          md:bottom-[98px]
          data-[infos-actived=true]:md:top-0
          data-[infos-actived=true]:md:mt-14
        "
      >
        <section>
          <div className="flex items-center gap-x-4">
            {weather && (
              <Image
                width={50}
                height={50}
                alt="condition-icon"
                src={`https://${weather.condition.icon}`}
              />
            )}

            <h4 className="flex text-[12px] uppercase max-md:tracking-[3.6px] max-mobile:hidden sm:text-base md:text-xl">
              {`Good ${message}, it's currently`}
            </h4>

            <h4 className="text-[12px] uppercase mobile:hidden">{message}</h4>
          </div>

          <CurrentTime />
          {weather && (
            <CurrentWeather
              condition={weather.condition.text}
              celsius={weather.temp_c}
              fahrenheit={weather.temp_f}
            />
          )}
          <Location />
        </section>
      </section>
    </section>
  )
}

export default DisplayTime
