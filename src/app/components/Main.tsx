'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Infos from './Infos'
import DisplayTime from './DisplayTime'
import { useGlobalContext } from '../context/store'

const Main = () => {
  const [backgroundURL, setBackgroundURL] = useState<string>()
  const { message } = useGlobalContext()

  useEffect(() => {
    switch (message) {
      case 'Morning':
      case 'Afternoon':
        setBackgroundURL('daytime')
        break
      case 'Evening':
        setBackgroundURL('nighttime')
        break
    }
  }, [message])

  return (
    <section className="text-white">
      <div className="absolute z-40 h-full w-full bg-black opacity-40" />

      {!backgroundURL ? (
        <h1 className=" absolute z-50">Loading Image...</h1>
      ) : (
        <Image
          width={1440}
          height={800}
          alt="background-image"
          src={`/assets/desktop/bg-image-${backgroundURL}.jpg`}
          className="absolute z-30 h-full w-full object-cover"
          priority={true}
        />
      )}

      <DisplayTime />

      <Infos />
    </section>
  )
}

export default Main
