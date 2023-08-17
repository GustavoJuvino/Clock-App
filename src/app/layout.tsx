import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from './context/store'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/queryClient'
import { AnimateComponent } from './services/AnimateComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AnimateComponent>
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
        </GlobalContextProvider>
      </QueryClientProvider>
    </AnimateComponent>
  )
}
