import s from './Form.module.scss'

interface Props{
	children: React.ReactNode
}

export const FormContainer = ({children}: Props) => {
	return(
		<div className={s.FormContainer}>
			{children}
		</div>
	)
}