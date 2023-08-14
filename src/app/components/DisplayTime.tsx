'use client'

import React, { useEffect, useState } from 'react'
import CurrentTime from './CurrentTime'
import { Refresh, Sun } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'
import Location from './Location'

const DisplayTime = () => {
  const [message, setMessage] = useState<string>()
  const { infosContainer } = useGlobalContext()

  const today = new Date()
  const formatToday = new Intl.DateTimeFormat('en-us', {
    dayPeriod: 'short',
  })
  const dayPeriod = formatToday.format(today)

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
  }, [dayPeriod])

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
