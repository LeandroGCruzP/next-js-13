import { ReactNode } from 'react'
import { Navigation } from './shared/Navigation'

import '../styles/globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <title>My app with NextJS 13</title>
      </head>

      <body>
        <Navigation />

        {children}
      </body>
    </html>
  )
}
