import Link from 'next/link'
import { LikeButton } from './components/LikeButton'

interface PostProps {
  id: string
  title: string
  body: string
}

export function Post ({ id, title, body }: PostProps) {
  return (
    <article>
      <Link href='/posts/[id]' as={`posts/${id}`}>
        <h2>{title}</h2>
        <p>{body}</p>
      </Link>

      <LikeButton />
    </article>
  )
}
