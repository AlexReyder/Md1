import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const ArrowRightQuizIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 21 37'
			width='33px'
			height='26px'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M3.02656 0.426612C2.39446 -0.123577 1.40943 -0.107342 0.798497 0.463334C0.187562 1.03401 0.170182 1.95413 0.759185 2.54458L17.8715 18.5292L0.759185 33.9544C0.170182 34.5449 0.187562 35.465 0.798497 36.0357C1.40943 36.6063 2.39446 36.6226 3.02656 36.0724L22.1068 18.5292L3.02656 0.426612Z'
				fill='white'
			/>
		</svg>
	)
}
