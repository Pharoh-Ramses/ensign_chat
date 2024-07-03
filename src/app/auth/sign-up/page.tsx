import SignUpFormProvider from '@/components/forms/sign-up/form-provider'
import React from 'react'

const Page = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
        <div className="flex flex-col h-full gap-3">
                <SignUpFormProvider>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-bold">Sign Up</h1>
                    </div>
                </SignUpFormProvider>
        </div>
    </div>
  )
}

export default Page
