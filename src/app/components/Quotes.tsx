'use client'

import React from 'react'
import { Refresh } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'
import { useQuery } from '@tanstack/react-query'

const Quotes = () => {
  const { infosContainer } = useGlobalContext()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['quotes'],
    queryFn: async () => {
      const response = await fetch('https://api.quotable.io/quotes/random')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

  if (isLoading) return <h1 className="z-50">Loading Quotes...</h1>
  else
    return (
      <div
        data-infos-actived={infosContainer}
        className="
            z-50
            mt-14
            h-auto
            w-auto
            data-[infos-actived=true]:hidden
            mobile:w-[324px]
            md:w-[573px]
        "
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
      </div>
    )
}

export default Quotes
