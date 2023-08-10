'use client'
import React from 'react'
import { useGlobalContext } from '../context/store'

const Infos = () => {
  const { infosContainer } = useGlobalContext()

  if (infosContainer)
    return (
      <section
        id="infos_container"
        className="
          absolute
          bottom-0
          z-50
          h-[256px]
          w-full
          text-darker-gunpowder-gray
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
                Europe/London
              </h2>
            </div>

            <div className="max-sm:flex max-sm:justify-between">
              <span className=" text-[13px] uppercase leading-[28px] tracking-[2.6px] lg:text-[15px] lg:tracking-[3px]">
                day of the year
              </span>
              <h2 className="text-[20px] font-bold sm:text-[40px] lg:text-5xl">
                295
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
                5
              </h2>
            </div>

            <div className="max-sm:flex max-sm:justify-between">
              <span className=" text-[13px] uppercase leading-[28px] tracking-[2.6px] lg:text-[15px] lg:tracking-[3px]">
                week number
              </span>
              <h2 className="text-[20px] font-bold sm:text-[40px] lg:text-5xl">
                42
              </h2>
            </div>
          </section>
        </div>
      </section>
    )
}

export default Infos
