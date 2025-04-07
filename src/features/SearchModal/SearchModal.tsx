"use client"
import { basePropsForMotion } from '@/shared/constants/motion'
import {
  loadProductBySearch,
  loadProductBySearchFx,
  resetProductBySearch,
} from '@/shared/context/goods'
import { $productsBySearch } from '@/shared/context/goods/state'
import { useDebounceCallback } from '@/shared/hooks/useDebounceCallback'
import { handleCloseSearchModal } from '@/shared/utils/common'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUnit } from 'effector-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState, useTransition } from 'react'

export const SearchModal = () => {
  const [, setSearchValue] = useState('')
  const [, startTransition] = useTransition()
  const delayCallback = useDebounceCallback(1000)
  const productsBySearch = useUnit($productsBySearch)
  const spinner = useUnit(loadProductBySearchFx.pending)

  const searchedProductsCategories = useMemo(
    () =>
      productsBySearch.items?.length
        ? [...new Set(productsBySearch.items.map((item:any) => item.category))]
        : [],
    [productsBySearch.items]
  )

  const searchedProductsTypes = useMemo(
    () =>
      productsBySearch.items?.length
        ? [
          ...new Map(
            productsBySearch.items.map((item:any) => [item.type, item])
          ).values(),
        ]
        : [],
    [productsBySearch.items]
  )

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    e.target.classList.add('with_value')
  }

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (e.target.value) {
      return
    }

    e.target.classList.remove('with_value')
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => setSearchValue(e.target.value))

    if (!e.target.value.length) {
      delayCallback(() => '')
      resetProductBySearch()
      return
    }

    delayCallback(() => loadProductBySearch({ search: e.target.value.trim() }))
  }

  return (
    <div className='search-modal'>
      <button
        className='btn-reset search-modal__close'
        onClick={handleCloseSearchModal}
      />
      <h3 className='search-modal__title'>
        Поиск товаров
      </h3>
      <div className='search-modal__top'>
        <label className='search-modal__label'>
          <input
            type='text'
            className='search-modal__input'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleSearchInputChange}
          />
          <span className='search-modal__floating_label'>
           Поиск
          </span>
        </label>
        {!!searchedProductsCategories.length && (
          <motion.ul {...basePropsForMotion} className='list-reset search-modal__links search-modal__categories'>
            {searchedProductsCategories.map((category) => (
              <li key={category}>
                <Link
                  href={`/catalog/${category}`}
                  onClick={handleCloseSearchModal}
                >
                  {/* {(translations[lang].breadcrumbs as { [index: string]: string })[category]} */}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
        {!!searchedProductsTypes.length && (
          <motion.ul {...basePropsForMotion} className='list-reset search-modal__links'>
            {searchedProductsTypes.map((item:any) => (
              <li key={item.type}>
                <Link
                  href={`/catalog/${item.category}?type=${item.type}`}
                  onClick={handleCloseSearchModal}
                >
                  {/* {(translations[lang].comparison as { [index: string]: string })[item.type]} */}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
        <div className='search-modal__bottom'>
          {(spinner) && (
            <motion.span className='search-modal__spinner' {...basePropsForMotion}>
              <FontAwesomeIcon icon={faSpinner} spin color='#fff' size='3x' />
            </motion.span>
          )}
          {!spinner && (
            <motion.ul {...basePropsForMotion} className='list-reset search-modal__results'>
              {(productsBySearch.items || []).map((item) => (
                <li key={item._id} className='search-modal__results__item'>
                  <Link
                    href={`/catalog/${item.category}/${item._id}`}
                    className='search-modal__results__item__link'
                    onClick={handleCloseSearchModal}
                  >
                    <div className='search-modal__results__item__left'>
                      <Image
                        src={item.images[0].url}
                        alt={item.name}
                        width={100}
                        height={100}
                        className='search-modal__results__item__img'
                      />
                    </div>
                    <div className='search-modal__results__item__inner'>
                      <p>{item.name}</p>
                      <p>{item.category}</p>
                      <p>{item.type}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </div>
  )
}

