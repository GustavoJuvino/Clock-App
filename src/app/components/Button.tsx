'use client'
import { ComponentProps } from 'react'
import { ArrowDown } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'

export type ButtonProps = ComponentProps<'button'>

const Button = ({ ...props }: ButtonProps) => {
  const { infosContainer } = useGlobalContext()

  return (
    <button
      className="
            flex
            h-14
            w-[146px]
            items-center
            justify-center
            gap-x-1
            rounded-[28px]
            bg-white
            pl-5
            font-bold
            uppercase
            leading-[28px]
            tracking-[5px]
            text-black
            text-opacity-50
            duration-300
            hover:text-[#999999]
            sm:text-[16px]
        "
      {...props}
    >
      {infosContainer ? 'Less' : 'More'}
      <div
        className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-darker-gunpowder-gray
            duration-300
            hover:bg-[#999999]
        "
      >
        <ArrowDown
          data-infos-actived={infosContainer}
          className=" duration-300 data-[infos-actived=true]:rotate-180"
        />
      </div>
    </button>
  )
}

export default Button
