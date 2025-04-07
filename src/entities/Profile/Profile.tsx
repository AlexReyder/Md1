"use client"
import { logOut } from '@/shared/api/auth'
import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import cls from './Profile.module.scss'
import { verifySession } from '@/shared/api/session'

const Profile = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [username, setUsername] = useState('')

		useEffect(()=>{
			async function getAuth(){
				const {isAuth, userName} = await verifySession()
				const user = userName as string
				if(isAuth){
					setIsAuthenticated(isAuth)
					setUsername(user)
				}
			}
			getAuth()
		}, [])
	return (
		<div className={cls.Container}>
		<Link 
				href={isAuthenticated ? '#' : '/signin'}
				className={cls.Profile}>{username === '' ? 'Войти' : username}
		</Link>
		{isAuthenticated && (
			<ul className={cls.List}>
				<li
						key={useId()}
						className={cls.Item}
				>
						<Link href='/profile/general'>Профиль</Link>
				</li>

				<li
						key={useId()}
						className={cls.Item}
				>
						<button onClick={logOut}>Выйти</button>
				</li>
												
			</ul>
		)}
		
		</div>
			
	)
}
export default Profile;