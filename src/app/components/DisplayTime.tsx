'use client'

import React, { useEffect, useState } from 'react'
import Quotes from './Quotes'
import CurrentTime from './CurrentTime'
import Location from './Location'
import CurrentWeather from './CurrentWeather'
import { useGlobalContext } from '../context/store'
import Image from 'next/image'

const today = new Date()
const formatToday = new Intl.DateTimeFormat('en-us', {
  dayPeriod: 'short',
})
export const dayPeriod = formatToday.format(today)

interface WeatherProps {
  condition: { text: string; icon: string }
  temp_c: number
  temp_f: number
}

const DisplayTime = () => {
  const [weather, setWeather] = useState<WeatherProps>()
  const { location, infosContainer, message, setMessage } = useGlobalContext()

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location.latitude},${location.longitude}`,
        )
        const data = await response.json()
        setWeather(data.current)
      } catch (error) {
        console.log(error)
      }
    }

    if (location.latitude && location.longitude) {
      fetchWeather()
    }

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
  }, [setMessage, location.latitude, location.longitude])

  console.log(weather)

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
                width={40}
                height={40}
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
