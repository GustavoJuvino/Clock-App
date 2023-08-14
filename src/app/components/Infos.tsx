'use client'

import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/store'

const Infos = () => {
  const { infosContainer, message } = useGlobalContext()
  const [timezoneArea, setTimezoneArea] = useState<string>()

  useEffect(() => {
    setTimezoneArea(Intl.DateTimeFormat().resolvedOptions().timeZone)
  }, [])

  const now = new Date()
  const currentDate = new Date().getTime()

  // Day of the year
  const start = Number(new Date(now.getFullYear(), 0, 0))
  const diff = Math.floor(currentDate - start)
  const oneDay = 1000 * 60 * 60 * 24
  const DayOfTheYear = Math.floor(diff / oneDay)

  // Day of the week
  const startDate = Number(new Date(now.getFullYear(), 0, 1))
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000))
  const weekNumber = Math.ceil(days / 7)

  if (infosContainer)
    return (
      <section
        data-dayperiod={message}
        id={message === 'Evening' ? 'evening' : 'day'}
        className="
          absolute
          bottom-0
          z-50
          h-[256px]
          w-full
          data-[dayPeriod='Afternoon']:text-darker-gunpowder-gray
          data-[dayPeriod='Evening']:text-white
          data-[dayPeriod='Morning']:text-darker-gunpowder-gray
          sm:h-[440px]
          md:h-[400px]
        "
      >
        <div
          className="
            flex
            justify-between
            max-sm:mx-[26px]
            max-sm:my-12
            max-sm:flex-col
            sm:ml-16
            sm:w-[538px] 
            max-md:sm:my-[120px]
            md:my-[74px]
            lg:ml-[165px]
            lg:w-[844px]
          "
        >
          <section className="flex flex-col gap-4 sm:gap-[42px]">
            <div className="max-sm:flex max-sm:justify-between">
              <span
                className="
                  text-[13px]
                  uppercase
                  leading-[28px]
                  tracking-[2.6px]
                  lg:text-[15px]
                  lg:tracking-[3px]
                "
              >
                current timezone
              </span>
              <h2 className="text-[20px] font-bold sm:text-[40px] lg:text-5xl">
                {timezoneArea}
              </h2>
            </div>

            <div className="max-sm:flex max-sm:justify-between">
              <span className=" text-[13px] uppercase leading-[28px] tracking-[2.6px] lg:text-[15px] lg:tracking-[3px]">
                day of the year
              </span>
              <h2 className="text-[20px] font-bold sm:text-[40px] lg:text-5xl">
                {DayOfTheYear}
              </h2>
            </div>
          </section>

          <hr className="h-[252px] w-[1px] bg-darker-gunpowder-gray opacity-25 max-sm:hidden" />

          <section className="flex flex-col gap-4 max-sm:mt-4 sm:gap-[42px]">
            <div className="max-sm:flex max-sm:justify-between">
              <span className="text-[13px] uppercase leading-[28px] tracking-[2.6px] lg:text-[15px] lg:tracking-[3px]">
                day of the week
              </span>
              <h2 className="text-[20px] font-bold sm:text-[40px] lg:text-5xl">
                {new Date().getDay()}
              </h2>
            </div>

            <div className="max-sm:flex max-sm:justify-between">
              <span className=" text-[13px] uppercase leading-[28px] tracking-[2.6px] lg:text-[15px] lg:tracking-[3px]">
                week number
              </span>
              <h2 className="text-[20px] font-bold sm:text-[40px] lg:text-5xl">
                {weekNumber}
              </h2>
            </div>
          </section>
        </div>
      </section>
    )
}

export default Infos
