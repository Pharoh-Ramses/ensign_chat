import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = async ({children}: Props) => {
    const user = await currentUser()
    console.log(user)

    if (user) redirect('/')

  return (
    <div>Layout</div>
  )
}

export default Layout
