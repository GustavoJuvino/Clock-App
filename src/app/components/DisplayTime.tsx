'use client'

import React, { useEffect, useState, useCallback } from 'react'
import Button from './Button'
import { Refresh, Sun } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'

interface locationProps {
  city: string
  countryCode: string
}

const DisplayTime = () => {
  const [time, setTime] = useState<string>()
  const [timeZone, setTimeZone] = useState<string>()
  const [message, setMessage] = useState<string>()
  const { infosContainer, setInfosContainer } = useGlobalContext()
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState<locationProps>()

  const testLocation = useCallback(() => {
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
      )
    }, 1000)

    if (new Date().getHours() <= 12) setMessage('Good Morning')
    if (new Date().getHours() > 12) setMessage('Good Afternoon')
    if (new Date().getHours() >= 18) setMessage('Good Evening')

    setTimeZone(
      new Date()
        .toLocaleDateString('en-US', {
          day: 'numeric',
          timeZoneName: 'short',
        })
        .slice(4),
    )

    testLocation()

    return () => {
      clearInterval(timer)
    }
  }, [testLocation])

  return (
    <section
      className="
          relative
          flex
          h-[100vh]
          w-auto
          flex-col
          max-sm:ml-[26px]
          sm:mx-16
          xl:mx-[165px]
        "
    >
      <div
        data-infos-actived={infosContainer}
        className="
            z-50
            mt-14
            h-auto
            w-auto
            data-[infos-actived=true]:hidden
            mobile:w-[324px]
            md:w-[573px]
          "
      >
        <div className="flex">
          <p className="w-[90%] text-[12px] leading-[22px] sm:w-full sm:text-base">
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <Refresh className="mt-2 sm:mt-4" />
        </div>
        <h5 className="mt-[13px] text-[12px] sm:text-lg">Ada Lovelace</h5>
      </div>

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
          <div className="flex gap-x-4">
            <Sun />
            <h4 className="flex text-[12px] uppercase max-md:tracking-[3.6px] max-mobile:hidden sm:text-base md:text-xl">
              {`${message}, it's currently`}
            </h4>

            <h4 className="text-[12px] uppercase mobile:hidden">{message}</h4>
          </div>

          <div className="max-sm:mt-4">
            <h1
              className="
                text-6xl
                font-bold
                max-md:leading-none
                max-md:tracking-[-4.38px]
                mobile:text-[95px]
                sm:text-[175px]
                md:text-10xl
              "
            >
              {time}

              <span
                className="
                ml-3
                text-[15px]
                font-light
                max-sm:tracking-tighter
                sm:text-[24px]
                md:text-[32px]
                xl:text-[40px]
              "
              >
                {timeZone}
              </span>
            </h1>
          </div>

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
        </section>
      </section>
    </section>
  )
}

export default DisplayTime
