import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html>
      <head />

      <body>{children}</body>
    </html>
  )
}
