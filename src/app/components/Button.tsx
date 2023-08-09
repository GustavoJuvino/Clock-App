import { ComponentProps } from 'react'
import { ArrowDown } from '../../../public/assets/svgs'

export type ButtonProps = ComponentProps<'button'>

const Button = ({ ...props }: ButtonProps) => {
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
      More
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
        <ArrowDown />
      </div>
    </button>
  )
}

export default Button
