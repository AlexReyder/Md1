import { Search } from '@/entities/Search/Search'
import { Logo } from '@/shared/ui'
import { Menu } from '../Menu/Menu'
import s from './Header.module.scss'
import CartCount from '@/entities/CartCount/CartCount'
import Profile from '@/entities/Profile/Profile'
export const Header =  () => {
  // const {isAuth, userName} = await verifySession()
  // console.log(' CART:  ',success)
  // const searchModal = useUnit($searchModal)
  // const openAuthPopup = useUnit($openAuthPopup)
  // const authWrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  // const handleOpenMenu = () => {
  //   addOverflowHiddenToBody()
  //   openMenu()
  // }

  // const handleOpenSearchModal = () => {
  //   openSearchModal()
  //   addOverflowHiddenToBody()
  // }

  // const handleCloseAuthPopupByTarget = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   const target = e.target as Element

  //   if (target === authWrapperRef.current) {
  //     handleCloseAuthPopup()
  //   }
  // }
	return(
		  <header className={s.Header}>
        {/* <Section> */}
          <Logo />
          <ul className={s.HeaderLinks}>
            <li className={s.HeaderItem}>
              <Search/>
            </li>
            <li className={s.HeaderItem}>
              {/* <h2 className={s.Count}>{success}  </h2> */}
              {/* <CartPopup data={success} /> */}
              <CartCount/>
            </li>
            <li>
                <Profile/>
            </li>
          </ul>
          <Menu/>
        {/* </Section> */}
    </header>

	)
}
