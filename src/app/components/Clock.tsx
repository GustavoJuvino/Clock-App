import React from 'react'
import Button from './Button'
import { Refresh, Sun } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'

const Clock = () => {
  const { infosContainer, setInfosContainer } = useGlobalContext()

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
          <p className="w-full text-[12px] leading-[22px] sm:w-[88%] sm:text-base md:w-[100%]">
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
        className="z-50 mt-[22rem] w-auto data-[infos-actived=true]:max-sm:mt-36 data-[infos-actived=true]:sm:my-14"
      >
        <div className="flex gap-x-4">
          <Sun />
          <h4 className="text-[12px] max-md:tracking-[3.6px] sm:text-base md:text-xl">
            GOOD MORNING, IT’S CURRENTLY
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
            11:37
            <span className="text-[32px] font-light uppercase max-sm:ml-1 md:text-[40px]">
              bst
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

export default Clock
