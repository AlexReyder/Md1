import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form'

export interface SessionPayload{
  id: string
}

export interface IInputs {
  
  email: string
  password: string
}

export interface ISignUpFx {
  password: string
  email: string
  isOAuth?: boolean
  name?: string
}

export interface IAuthSideProps {
  toggleAuth: VoidFunction
  isSideActive: boolean
}

export interface IAuthInput {
  register: UseFormRegister<IInputs>
  errors: FieldError | undefined
}

export interface INameErrorMessageProps {
  errors: FieldErrors<IInputs & { [index: string]: string }>
  fieldName: string
  className?: string
}
