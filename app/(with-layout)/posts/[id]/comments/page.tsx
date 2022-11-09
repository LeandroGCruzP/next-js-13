import Image from 'next/image'
import { ListComments } from '../../../../../interfaces/CommentData'

interface CommentProps {
  params: {
    id: string
  }
}

async function getComments (id: string): Promise<ListComments[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

  return res.json()
}

export default async function Comment ({ params }: CommentProps) {
  const { id } = params

  const comments = await getComments(id)

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Image
            width={50}
            height={50}
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`}
          />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
