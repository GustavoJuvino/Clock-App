'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Button from './Button'
import { Refresh, Sun } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'

const DisplayTime = () => {
  let currentMessage = ''
  const [time, setTime] = useState<string>()
  const [timeZone, setTimeZone] = useState<string>()
  const { infosContainer, setInfosContainer } = useGlobalContext()

  // 👇️ Jul 25, 2023, 16:34:06
  // console.log(
  //   date.toLocaleString('en-US', {
  //     dateStyle: 'medium',
  //     timeStyle: 'medium',
  //     hour12: false,
  //   }),
  // );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().getHours() +
          ':' +
          (new Date().getMinutes() < 10 ? '0' : '') +
          new Date().getMinutes(),
      )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useMemo(() => {
    setTimeZone(
      new Date()
        .toLocaleDateString('en-US', {
          day: 'numeric',
          timeZoneName: 'short',
        })
        .slice(4),
    )
  }, [])

  if (new Date().getHours() <= 12) currentMessage = 'Good Morning'
  else if (new Date().getHours() > 12) currentMessage = 'Good Afternoon'
  else currentMessage = 'Good Evening'

  return (
    <section
      className="
            flex
            w-full
            flex-col
            max-sm:pl-[26px]
            sm:px-16
            lg:px-[165px]
        "
    >
      <div
        data-infos-actived={infosContainer}
        className="z-50 mt-14 h-auto w-[324px] data-[infos-actived=true]:hidden md:w-[573px]"
      >
        <div className="flex justify-between">
          <p className="w-[50%] text-[12px] leading-[22px] sm:w-[88%] sm:text-base md:w-[100%]">
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <Refresh className="sm:mt-2" />
        </div>
        <h5 className="mt-[13px] text-[12px] sm:text-lg">Ada Lovelace</h5>
      </div>

      <section
        data-infos-actived={infosContainer}
        className="z-50 mt-[10rem] w-auto data-[infos-actived=true]:max-sm:mt-36 data-[infos-actived=true]:sm:my-14 md:mt-[22rem]"
      >
        <div className="flex gap-x-4">
          <Sun />
          <h4 className="flex text-[12px] uppercase max-md:tracking-[3.6px] max-mobile:hidden sm:text-base md:text-xl">
            {`${currentMessage}, it's currently`}
          </h4>

          <h4 className="text-[12px] uppercase mobile:hidden">
            {currentMessage}
          </h4>
        </div>

        <div className="max-sm:mt-4">
          <h1
            className="
                text-6xl
                font-bold
                max-md:leading-none
                max-md:tracking-[-4.38px]
                mobile:text-[100px]
                sm:text-[175px]
                md:text-10xl
              "
          >
            {time}
            <span
              className="
                text-[18px]
                font-light
                uppercase
                tracking-tighter
                max-sm:ml-1
                max-sm:pl-2
                md:text-[40px]
                lg:pl-5
              "
            >
              {timeZone}
            </span>
          </h1>
        </div>
      </section>

      <div
        className="
            z-50
            flex
            w-full
            justify-between
            gap-y-12
            max-md:flex-col
            sm:gap-y-20
            md:items-center
          "
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
          in london, uk
        </h3>
        <Button onClick={() => setInfosContainer(!infosContainer)} />
      </div>
    </section>
  )
}

export default DisplayTime
