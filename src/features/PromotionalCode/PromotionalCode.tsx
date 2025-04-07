"use client"
import { useState } from 'react'
import s from './PromotionalCode.module.scss'

const PromotionalCode = ({

}: {

}) => {
  const [value, setValue] = useState('')
  const isCorrectCode = value === 'SKILLBLOG'

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    // if (e.target.value === 'TEST') {
    //   setIsCorrectPromotionalCode(true)
    // } else {
    //   setIsCorrectPromotionalCode(false)
    // }
  }

  return (
    <div className={s.PromotionalCode}>
      <input
        type='text'
        placeholder='Промокод'
        value={value}
        onChange={handleChangeValue}
        style={
          isCorrectCode ? { border: '1px solid #16D9A6', color: '16D9A6' } : {}
        }
      />
      <p>Чтобы воспользоваться скидкой введите промокод</p>
    </div>
  )
}

export default PromotionalCode