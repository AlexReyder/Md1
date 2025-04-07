import Link from 'next/link'
const ContactsListItems = () => {

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+74995558293'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +7 (499) 555 82 93
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='mailto:test@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://t.me/dvejer'
          className='nav-menu__accordion__item__link'
        >
          'Tg'
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='https://vk.com' className='nav-menu__accordion__item__link'>
          'Vk'
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems