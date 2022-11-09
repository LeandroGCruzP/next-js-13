import { type ListPosts } from '../../../interfaces/PostData'
import { Post } from './components/Post'

async function getPosts (): Promise<ListPosts[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  return res.json()
}

export default async function Posts () {
  const posts = await getPosts()

  return (
    <section>
      {posts.slice(0, 5).map(post => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </section>
  )
}
