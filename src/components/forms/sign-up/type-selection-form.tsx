"use client"

import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    register: UseFormRegister<FieldValues>
    userType: 'owner' | 'student'
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const TypeSelectionForm = ({register, userType, setUserType}: Props) => {
  return (
    <div></div>
  )
}

export default TypeSelectionForm
