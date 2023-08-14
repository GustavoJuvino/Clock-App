'use client'

import React, { useEffect } from 'react'
import CurrentTime from './CurrentTime'
import { Moon, Sun } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'
import Location from './Location'
import Quotes from './Quotes'

const today = new Date()
const formatToday = new Intl.DateTimeFormat('en-us', {
  dayPeriod: 'short',
})
export const dayPeriod = formatToday.format(today)

const DisplayTime = () => {
  const { infosContainer, message, setMessage } = useGlobalContext()

  useEffect(() => {
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
  }, [setMessage])

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
            {message === 'Evening' ? <Moon /> : <Sun />}
            <h4 className="flex text-[12px] uppercase max-md:tracking-[3.6px] max-mobile:hidden sm:text-base md:text-xl">
              {`Good ${message}, it's currently`}
            </h4>

            <h4 className="text-[12px] uppercase mobile:hidden">{message}</h4>
          </div>

          <CurrentTime />
          <Location />
        </section>
      </section>
    </section>
  )
}

export default DisplayTime
