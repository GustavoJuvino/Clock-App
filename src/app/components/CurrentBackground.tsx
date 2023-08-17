'use client'

import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/store'
import Image from 'next/image'
import daytime from 'public/assets/desktop/bg-image-daytime.jpg'
import nightTime from 'public/assets/desktop/bg-image-nighttime.jpg'
import { Skeleton } from '@mui/material'

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

  if (!backgroundURL)
    return (
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        width={'100%'}
        height={'100%'}
        variant="rectangular"
        className="absolute z-50"
      />
    )
  else
    return (
      <Image
        width={1440}
        height={800}
        alt="background-image"
        src={backgroundURL === 'nighttime' ? nightTime : daytime}
        className="absolute z-30 h-full w-full object-cover"
        priority={true}
        placeholder="blur"
      />
    )
}

export default CurrentBackground
