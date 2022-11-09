import Link from 'next/link'
import { ReactNode } from 'react'
import { ListPosts } from '../../../../interfaces/PostData'

interface SpecificPostsProps {
  params: {
    id: string
  }
  children: ReactNode
}

async function getPost (id: string): Promise<ListPosts> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return res.json()
}

export default async function LayoutPost ({ params, children }: SpecificPostsProps) {
  const { id } = params

  const post = await getPost(id)

  return (
    <article>
      <small>Layout Post</small>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <Link href={`/posts/${id}/comments`}>
        Show comments
      </Link>

      {children}
    </article>
  )
}
