"use client"
import { mailPasswordRecovery } from '@/shared/api/mail'
import { recoveryEmail } from '@/shared/types/schemas'
import { Input } from '@/shared/ui'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormSchema = z.infer<typeof recoveryEmail>

const RecoveryPasswordEmail = () => {
		const {handleSubmit, register, formState:{ isDirty, isSubmitting, errors }} = useForm<FormSchema>({
			defaultValues: {
				email:'',
			},
			resolver: zodResolver(recoveryEmail)
		})

		async function onSubmit(data: FormSchema) {
			const {success, error} = await mailPasswordRecovery(data)
			// if(success){
			// 	redirect('/')
			// }
			console.log(error)
			// setError(error)
		}


	return (
		<div>
			<div className='card-body wow-bg'>
				<h3 className='card-body__title'>
				Личные данные
				</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
				<Input registerName='email' register={register} errors={errors.email} type='email' placeholder='email' />
					<div className='card-body__inner'>
						<div className='inner__top'>
							<button className='inner__btn' type='submit' disabled={!isDirty || isSubmitting}>
								{isSubmitting ? (
									<FontAwesomeIcon icon={faSpinner} spin />
								) : (
									"Сохранить"
								)}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RecoveryPasswordEmail