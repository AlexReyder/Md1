import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const ArrowBackIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 36 24'
		>
			<path
				d='M21.0259 2.40208L28.9255 10.3017L0.000390166 10.3017V13.6982L28.9255 13.6982L21.0259 21.5978L23.4277 24L35.4277 12L23.4277 7.0337e-07L21.0259 2.40208Z'
				fill='white'
			/>
		</svg>
	)
}
