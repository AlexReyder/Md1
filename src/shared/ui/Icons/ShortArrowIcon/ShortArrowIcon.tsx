import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const ShortArrowIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			width='25px'
			height='24px'
		>
			<path d='M24.06 13.06a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L20.88 12l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM0 13.5h23v-3H0v3Z' />
		</svg>
	)
}
