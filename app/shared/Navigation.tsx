import Link from 'next/link'

const links = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' }
]

export function Navigation () {
  return (
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
  )
}
