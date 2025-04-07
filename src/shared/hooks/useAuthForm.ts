"use client"
// import { useEarthoOne } from '@eartho/one-client-react'
import { Store } from 'effector'
import { useUnit } from 'effector-react'
// import { useEffect } from 'react'
import { IInputs } from '@/shared/types/authPopup'
import { useForm } from 'react-hook-form'

export const useAuthForm = (
  initialSpinner: Store<boolean>
) => {
  const spinner = useUnit(initialSpinner)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>()

  return {
    spinner,
    register,
    errors,
    handleSubmit,
  }
}
