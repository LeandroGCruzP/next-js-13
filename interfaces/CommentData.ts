interface Comment {
  id: string
  name: string
  email: string
  body: string
}

type ListComments = Comment

export type { ListComments }
