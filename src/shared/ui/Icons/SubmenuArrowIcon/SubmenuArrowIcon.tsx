import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const SubmenuArrowIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 18 18'
		>
			<path
				d='M17.4997 2.02629C17.5143 1.198 16.8546 0.514747 16.0263 0.500218L2.52834 0.263441C1.70004 0.248911 1.01679 0.908602 1.00226 1.7369C0.98773 2.5652 1.64742 3.24845 2.47572 3.26298L14.4739 3.47345L14.2634 15.4716C14.2489 16.2999 14.9086 16.9831 15.7369 16.9977C16.5652 17.0122 17.2484 16.3525 17.2629 15.5242L17.4997 2.02629ZM2.54189 17.0791L17.0418 3.07909L14.9581 0.920887L0.458106 14.9209L2.54189 17.0791Z'
				fill='#AF7E41'
			/>
		</svg>
	)
}
