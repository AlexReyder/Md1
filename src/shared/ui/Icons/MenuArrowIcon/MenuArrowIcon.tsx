import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const MenuArrowIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 15 24'
		>
			<g clipPath='url(#clip0_254_2)'>
				<path
					d='M0.0258789 2.40208L7.92549 10.3017L9.49997 12L7.92549 13.6982L0.0258789 21.5978L2.4277 24L14.4277 12L2.4277 0L0.0258789 2.40208Z'
					fill='#AF7E41'
				/>
			</g>
			<defs>
				<clipPath id='clip0_254_2'>
					<rect width='15' height='24' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
