import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const WatchIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 66 87'
		>
			<path
				d='M2 86.6118C1.678 86.6118 1.355 86.5338 1.061 86.3778C0.409001 86.0308 0 85.3518 0 84.6118V1.99979C0 1.26079 0.408001 0.581793 1.061 0.233793C1.714 -0.112207 2.505 -0.0722075 3.118 0.340793L64.425 41.6468C64.977 42.0188 65.308 42.6408 65.308 43.3058C65.308 43.9708 64.977 44.5928 64.425 44.9648L3.117 86.2698C2.781 86.4968 2.391 86.6118 2 86.6118Z'
				fill='white'
			/>
		</svg>
	)
}
