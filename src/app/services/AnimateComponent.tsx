'use client'

import { AnimatePresence } from 'framer-motion'

export const AnimateComponent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <AnimatePresence>{children}</AnimatePresence>
}
