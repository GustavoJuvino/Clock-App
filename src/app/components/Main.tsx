'use client'
import Image from 'next/image'
import React from 'react'
import Infos from './Infos'
import Clock from './Clock'

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

      <Clock />

      <Infos />
    </section>
  )
}

export default Main
