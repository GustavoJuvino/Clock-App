'use client'
import { ComponentProps } from 'react'
import { ArrowDown } from '../../../public/assets/svgs'
import { useGlobalContext } from '../context/store'

export type ButtonProps = ComponentProps<'button'>

const Button = ({ ...props }: ButtonProps) => {
  const { infosContainer } = useGlobalContext()

  return (
    <button
      className={`
        flex
        h-[39px]
        w-[115px]
        items-center
        justify-center
        gap-x-1
        rounded-[28px]
        bg-white
        pl-5
        text-[12px]
        font-bold
        uppercase
        leading-[28px]
        tracking-[5px]
        text-black
        text-opacity-50
        duration-300
        hover:text-[#999999]
        sm:h-14
        sm:w-[146px]
        sm:text-[16px]
        ${infosContainer ? 'mb-20' : 'mb-0'}
      `}
      {...props}
    >
      {infosContainer ? 'Less' : 'More'}
      <div
        className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-darker-gunpowder-gray
            duration-300
            hover:bg-[#999999]
            sm:h-10
            sm:w-10
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
