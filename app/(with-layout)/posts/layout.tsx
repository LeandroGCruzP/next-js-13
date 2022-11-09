import { ReactNode } from 'react'
import { Counter } from './components/Counter'

interface PostsLayoutProps {
  children: ReactNode
}

export default function PostsLayout ({ children }: PostsLayoutProps) {
  return (
    <div>
      <Counter />

      {children}
    </div>
  )
}
