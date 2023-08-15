'use client'

import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/store'
import Image from 'next/image'

const CurrentBackground = () => {
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

  if (!backgroundURL) return <h1 className="absolute z-50">Loading Image...</h1>
  else
    return (
      <Image
        width={1440}
        height={800}
        alt="background-image"
        src={`/assets/desktop/bg-image-${backgroundURL}.jpg`}
        className="absolute z-30 h-full w-full object-cover"
        priority={true}
      />
    )
}

export default CurrentBackground
