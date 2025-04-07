import Link from 'next/link'
import s from './Menu.module.scss'

export const Menu = () =>{
	const links = [
    {
      id: 1,
      text: 'Футболки',
      href: '/',
    },
		{
      id: 2,
      text: 'Лонгсливы',
      href: '/',
    },
		{
      id: 3,
      text: 'Флаги',
      href: '/',
    },
		{
      id: 4,
      text: 'Нашивки',
      href: '/',
    },
		{
      id: 5,
      text: 'Контакты',
      href: '/',
    },
		{
      id: 6,
      text: 'Доставка / Оплата',
      href: '/',
    },
		{
      id: 7,
      text: 'Обмен / Возврат',
      href: '/',
    },
		{
      id: 8,
      text: 'FAQ',
      href: '/',
    },
	]
	return(
		<nav className={s.Nav}>
			<ul className={s.MenuLinks}>
					{
						links.map((link: any) => {
							return(
								<li className={s.MenuItem} key={link.id}>
									<Link href={link.href} className={s.MenuLink}>{link.text}</Link>
							</li>
							)
						})
					}
          </ul>
		</nav>
	)
}