import React from 'react'

type Props = {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
      {children}
    </div>
  )
}

export default Card