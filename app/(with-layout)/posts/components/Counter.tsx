'use client'

import { useState } from 'react'
import styles from '../../../../styles/Count.module.css'

export function Counter () {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.containerCount}>
      <small>Layout Posts - counter: {count}</small>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}
