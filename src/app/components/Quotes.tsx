'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Refresh } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'

interface quotesProps {
  content: string
  author: string
}

const Quotes = () => {
  const [loading, setLoading] = useState<boolean>()
  const [quote, setQuote] = useState<quotesProps[]>()
  const { infosContainer } = useGlobalContext()

  const getQuotes = useCallback(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await fetch('https://api.quotable.io/quotes/random')
        const data = await response.json()
        setQuote(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    getQuotes()
  }, [getQuotes])

  if (loading) return <h1>Loading Quotes...</h1>
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
            {quote && quote[0].content}
          </p>
          <Refresh
            onClick={() => getQuotes()}
            className="mt-2 cursor-pointer max-sm:ml-1 sm:mt-4"
          />
        </div>
        <h5 className="mt-[13px] text-[12px] sm:text-lg">
          {quote && quote[0].author}
        </h5>
      </div>
    )
}

export default Quotes
