'use client'
import Image from 'next/image'
import React from 'react'
import Infos from './Infos'
import DisplayTime from './DisplayTime'

const Main = () => {
  return (
    <section className="text-white">
      <div className="absolute z-40 h-full w-full bg-black opacity-40" />
      <Image
        width={1440}
        height={800}
        alt="background-image"
        src={`/assets/desktop/bg-image-daytime.jpg`}
        className="absolute z-30 h-full w-full object-cover"
        priority={true}
      />

      <DisplayTime />

      <Infos />
    </section>
  )
}

export default Main
