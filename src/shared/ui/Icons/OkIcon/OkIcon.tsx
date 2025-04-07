import classNames from '@/shared/lib/classNames/classNames'
import { FC } from 'react'
import cls from './OkIcon.module.scss'
export interface Icons {
	className?: string
	fill?: string
}
export const OkIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={classNames(cls.Icon, {}, [className!])}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M12.397 27.519h.038a1.506 1.506 0 0 0 1.14-.583l19.037-24.47a1.472 1.472 0 0 0 .382-1.122 1.462 1.462 0 0 0-.576-1.038 1.499 1.499 0 0 0-1.163-.284 1.5 1.5 0 0 0-1 .653L12.36 23.7 2.741 12.538a1.483 1.483 0 0 0-1.04-.656 1.509 1.509 0 0 0-1.184.344A1.477 1.477 0 0 0 0 13.334a1.46 1.46 0 0 0 .504 1.113L11.286 26.98a1.489 1.489 0 0 0 1.111.539Z' />
		</svg>
	)
}
