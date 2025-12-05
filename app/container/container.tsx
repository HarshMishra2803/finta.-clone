import React from 'react'
import { cn } from '../libs/utils'

export const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  return (
    <div className={cn(" max-w-5xl mx-auto px-4 py-4  relative z-10",className)}>
      {children}
    </div>
  )
}

