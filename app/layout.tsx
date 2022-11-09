import Link from 'next/link'
import { ReactNode } from 'react'
import { font } from '../services/font'
import '../styles/globals.css'
import styles from '../styles/Navigation.module.css'

const links = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Posts', route: '/posts' }
]

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <title>My app with NextJS 13</title>
      </head>

      <body className={font.className}>
        <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
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
