import s from './CatalogFilters.module.scss'
import { FilterAccordion } from './FilterAccordion'
import FilterEntity from './FilterEntity'


interface Props{
	data: any
	error: any
}

export const CatalogFilters =  ({data, error}: Props) => {
	const {bands ,colors, sizes} = data;

	function applyFilters(){
		
	}

	return(
		<aside className={s.Filters}>
			<FilterAccordion title='Группы' id='panel-1'>
			<FilterEntity data={bands} name='bands' isObj={true}/>
						{
							error && (
								<h2>Ошибка</h2>
							)
						}

			</FilterAccordion>
			<FilterAccordion title='Цвета'  id='panel-2'>
						<FilterEntity data={colors} name='colors'/>
			</FilterAccordion>
			<FilterAccordion title='Размеры' id='panel-3'>
			<FilterEntity data={sizes} name='sizes'/>
			</FilterAccordion>

		</aside>
	)
}