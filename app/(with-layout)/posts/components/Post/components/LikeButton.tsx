'use client'

import { useState } from 'react'

export function LikeButton () {
  const [isLike, setIsLike] = useState(false)

  function handleLikePost () {
    setIsLike(!isLike)
  }

  return (
    <button onClick={handleLikePost}>
      {isLike ? '👍' : '✊'}
    </button>
  )
}
