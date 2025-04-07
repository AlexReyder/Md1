import Link from 'next/link'
import s from './Breadcrumbs.module.scss'
const Crumb = ({ text: defaultText, href, last = false }: any) =>
  last ? (
    <a className={`${s.LastCrumb} ${s.ItemLink}`}>
      <span>{defaultText}</span>
    </a>
  ) : (
    <Link href={href} className={s.ItemLink}>
      <span>{defaultText}</span>
    </Link>
  )
export default Crumb