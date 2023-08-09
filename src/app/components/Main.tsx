import Image from 'next/image'
import React from 'react'
import { Refresh, Sun } from '../../../public/assets/svgs'

const Main = () => {
  return (
    <section className="text-white">
      <div className="absolute z-40 h-[100vh] w-full bg-black opacity-40" />
      <Image
        width={1440}
        height={800}
        alt="background-image"
        src={`/assets/desktop/bg-image-daytime.jpg`}
        className="absolute z-30 h-[100vh] w-full object-cover"
        priority={true}
      />

      <section className="flex w-full flex-col px-[165px]">
        <div className="z-50 mt-14 h-auto w-[573px]">
          <div className="flex justify-between">
            <p className="w-[100%] text-base">
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <Refresh className="mt-2" />
          </div>
          <h5 className="mt-[13px] text-lg">Ada Lovelace</h5>
        </div>

        <section className="z-50 mt-[300px] w-full">
          <div className="flex h-auto w-full justify-between">
            <div>
              <div className="flex gap-x-4">
                <Sun />
                <h4 className="text-xl">GOOD MORNING, IT’S CURRENTLY</h4>
              </div>

              <div className="flex items-center gap-x-[11px]">
                <h1 className="text-10xl">
                  11:37
                  <span className="text-[40px] font-light uppercase">bst</span>
                </h1>
              </div>

              <h3 className="text-2xl uppercase">in london, uk</h3>
            </div>

            <button>more</button>
          </div>
        </section>

        {/* <div className="z-50 mt-14 h-auto w-[573px]">
          <div className="flex justify-between">
            <p className="w-[100%] text-base">
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <Refresh className="mt-2" />
          </div>
          <h5 className="mt-[13px] text-lg">Ada Lovelace</h5>
        </div>

        <section className="z-50 mt-[233px] flex h-auto w-full justify-between">
          <div>
            <div className="flex gap-x-4">
              <Sun />
              <h4 className="text-xl">GOOD MORNING, IT’S CURRENTLY</h4>
            </div>

            <div className="flex items-center gap-x-[11px]">
              <h1 className="text-10xl">
                11:37
                <span className="text-[40px] font-light uppercase">bst</span>
              </h1>
            </div>

            <h3 className="text-2xl uppercase">in london, uk</h3>
          </div>

          <button>more</button>
        </section> */}
      </section>
    </section>
  )
}

export default Main
