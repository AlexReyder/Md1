import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const ArrowLeftIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 21 37'
			width='33px'
			height='26px'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M17.8397 36.048C18.4307 36.5982 19.3517 36.582 19.923 36.0113C20.4942 35.4406 20.5104 34.5205 19.9597 33.93L3.95972 17.9454L19.9597 2.5202C20.5104 1.92975 20.4942 1.00964 19.923 0.438957C19.3517 -0.131718 18.4307 -0.147949 17.8397 0.402241L-0.00028038 17.9454L17.8397 36.048Z'
				fill={fill}
			/>
		</svg>
	)
}
