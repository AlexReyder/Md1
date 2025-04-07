"use client"
import s from './Search.module.scss'

export const Search = () => {

	const handleSearch = () => {

	}
	return(
		<div className={s.Container}> 
			<input type="text" className={s.Search} />
			<button
			className={s.Button}
			onClick={handleSearch}
			/>
		</div>
	)
}