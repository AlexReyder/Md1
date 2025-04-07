import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const SquareIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			width='24'
			height='24'
		>
			<path
				d='M24.0003 24H21.4521V23.2722H23.2724V21.4519H24.0003V24Z'
				fill='#AF7E41'
			/>
			<path
				d='M17.6714 23.9998H13.8906V23.272H17.6714V23.9998ZM10.1099 23.9998H6.3291V23.272H10.1102L10.1099 23.9998Z'
				fill='#AF7E41'
			/>
			<path
				d='M2.54813 24H0V21.4519H0.72825V23.2722H2.54813V24Z'
				fill='#AF7E41'
			/>
			<path
				d='M0.72825 17.6712H0V13.8905H0.727875V17.6712H0.72825ZM0.72825 10.1097H0V6.32935H0.727875V10.1097H0.72825Z'
				fill='#AF7E41'
			/>
			<path
				d='M0.72825 2.54812H0V0H2.54813V0.728249H0.72825V2.54812Z'
				fill='#AF7E41'
			/>
			<path
				d='M17.6714 0.728249H13.8906V0H17.6714V0.728249ZM10.1099 0.728249H6.3291V0H10.1102L10.1099 0.728249Z'
				fill='#AF7E41'
			/>
			<path
				d='M24.0003 2.54812H23.2724V0.728249H21.4521V0H24.0003V2.54812Z'
				fill='#AF7E41'
			/>
			<path
				d='M23.9994 17.6706H23.2715V13.8899H23.9994V17.6706ZM23.9994 10.1091H23.2715V6.32837H23.9994V10.1091Z'
				fill='#AF7E41'
			/>
		</svg>
	)
}
