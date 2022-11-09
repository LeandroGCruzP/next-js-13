import { ReactNode } from 'react'

interface LayoutWithBannerProps {
  children: ReactNode
}

export default function LayoutWithBanner ({ children }: LayoutWithBannerProps) {
  return (
    <div>
      <small>Layout With Banner</small>

      {children}
    </div>
  )
}
