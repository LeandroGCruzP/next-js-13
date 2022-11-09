import Link from 'next/link'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const links = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' }
]

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <title>My app with NextJS 13</title>
      </head>

      <body>
        <header>
          <nav>
            <ul>
              {links.map(link => (
                <li key={link.route}>
                  <Link href={link.route}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  )
}
