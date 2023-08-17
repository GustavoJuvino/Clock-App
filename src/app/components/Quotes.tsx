'use client'

import React from 'react'
import { Refresh } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { PuffLoader } from 'react-spinners'

const Quotes = () => {
  const { infosContainer } = useGlobalContext()

  const { data, refetch, isRefetching } = useQuery({
    queryKey: ['quotes'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.quotable.io/quotes/random?minLength=100?maxLength=150',
      )
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

  if (isRefetching)
    return (
      <PuffLoader
        size={60}
        color="#ada8a8"
        className=" z-50 mt-14"
        speedMultiplier={1}
      />
    )

  return (
    <motion.div
      data-infos-actived={infosContainer}
      className="
          z-50
          mt-14
          h-auto
          w-auto
          data-[infos-actived=true]:hidden
          mobile:w-[324px]
          md:w-[500px]
        "
      transition={{
        ease: 'backOut',
        duration: 0.8,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <div className="flex">
        <p className="w-[90%] text-[12px] leading-[22px] sm:w-full sm:text-base">
          {data && data[0].content}
        </p>
        <Refresh
          onClick={() => refetch()}
          className="mt-2 cursor-pointer max-sm:ml-1 sm:mt-4"
        />
      </div>
      <h5 className="mt-[13px] text-[12px] sm:text-lg">
        {data && data[0].author}
      </h5>
    </motion.div>
  )
}

export default Quotes
