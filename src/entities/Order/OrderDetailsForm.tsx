import { makeOrderSchema } from '@/shared/types/schemas'
import { UserProfileDTO } from '@/shared/types/user'
import { Form } from '@/shared/ui'
import styles from '@/styles/order/index.module.scss'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormSchema = z.infer<typeof makeOrderSchema>

const OrderDetailsForm = ({profileData}:{profileData:UserProfileDTO}) => {
	// const [profileData, setProfileData] = useState<UserProfileDTO | undefined>()

	// useEffect(() => {
  //   async function fetch() {
  //   const data: UserProfileDTO = await getProfileData();
	// 	setProfileData(data)
  //   }
  //   fetch()
  // }, [])

   const {handleSubmit, register, formState:{ isDirty, isSubmitting, errors }} = useForm<FormSchema>({
			defaultValues: {
				name: profileData?.name ?? "",
				surname: profileData?.surname ?? "",
				phone: profileData?.phone,
				email: profileData?.email ?? "",
				comment: "",
			},
			resolver: zodResolver(makeOrderSchema)
		})

	async function onSubmit(data: FormSchema) {
		console.log(data)
			// const error = await signIn(data)
			// console.log(error)
			// setError(error)
		}

  return (
    <Form action={handleSubmit(onSubmit)} className={styles.order__list__item__details__form}>
      <div className={styles.order__list__item__details__form__inner}>
        <label className={styles.order__list__item__details__form__label}>
          <input
            type='text'
          	{...register(
							"name"
						)}
            className={styles.order__list__item__details__form__input}
          />
          <span
            className={styles.order__list__item__details__form__floating_label}
          >
            Имя
          </span>
          {/* <NameErrorMessage
            errors={errors as Partial<FieldErrorsImpl<IInputs>>}
            className={styles.order__list__item__details__form__error}
            fieldName={nameRegister.name}
          /> */}
        </label>
        <label className={styles.order__list__item__details__form__label}>
          <input
            type='text'
						{...register(
							"surname"
						)}
            className={styles.order__list__item__details__form__input}
          />
          <span
            className={styles.order__list__item__details__form__floating_label}
          >
						Фамилия
          </span>
          {/* <NameErrorMessage
            errors={errors as Partial<FieldErrorsImpl<IInputs>>}
            className={styles.order__list__item__details__form__error}
            fieldName={surnameRegister.name}
          /> */}
        </label>
        <label className={styles.order__list__item__details__form__label}>
          <input
            type='text'
						{...register(
							"phone"
						)}
            className={styles.order__list__item__details__form__input}
          />
          <span
            className={styles.order__list__item__details__form__floating_label}
          >
            Номер телефона
          </span>
        
        </label>
        <label className={styles.order__list__item__details__form__label}>
          <input
            type='text'
						{...register(
							"email"
						)}
            className={styles.order__list__item__details__form__input}
          />
          <span
            className={styles.order__list__item__details__form__floating_label}
          >
            Электронная почта
          </span>
          
        </label>
      </div>
      <label className={styles.order__list__item__details__form__label}>
        <textarea
         {...register(
					"comment"
				)}
          className={styles.order__list__item__details__form__textarea}
        
        />
        <span
          className={styles.order__list__item__details__form__floating_label}
        >
          Комментарий к заказу
        </span>
        
        {/* <span
          className={styles.order__list__item__details__form__label__count}
          style={{
            color:
              messageLength > 255 ? '#FF4747' : 'rgba(255, 255, 255, 0.40)',
          }}
        >
          {messageLength}/255
        </span> */}
      </label>
      <button type='submit'>submit</button>
    </Form>
  )
}

export default OrderDetailsForm