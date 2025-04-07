import Link from 'next/link'

 export const Logo:React.FC = () => (
  <Link className='logo' href='/'>
		<p style={{color:'#fff'}}>Logo</p>
    {/* <img className='logo__img' src='/img/logo.svg' alt='Rostelecom Logo' /> */}
  </Link>
)

