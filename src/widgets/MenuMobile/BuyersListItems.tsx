import Link from 'next/link'

const BuyersListItems = () => {
  return (
    <>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/about'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          'О нас'
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='/blog' className='nav-menu__accordion__item__link'>
         'Блог'
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/shipping-and-payment'
          className='nav-menu__accordion__item__link'
        >
        'Платеж'
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='/purchase-returns'
          className='nav-menu__accordion__item__link'
        >
         'Возврат'
        </Link>
      </li>
    </>
  )
}

export default BuyersListItems