"use client"
import { productCategories } from '@/shared/constants/product'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { useCrumbText } from './useCrumbText'
import { useLang } from './useLang'
import { usePageTitle } from './usePageTitle'

export const useBreadcrumbs = (page: string) => {
  const [dynamicTitle, setDynamicTitle] = useState('')
  const { lang, translations } = useLang()
  const pathname = usePathname()
  const breadcrumbs = document.querySelector('.breadcrumbs') as HTMLUListElement
  const { crumbText } = useCrumbText(page)
  const getDefaultTextGenerator = useCallback(() => crumbText, [crumbText])
  const getTextGenerator = useCallback((param: string) => ({})[param], [])
  usePageTitle(page, dynamicTitle)

  useEffect(() => {
    const lastCrumb = document.querySelector('.last-crumb') as HTMLElement

    if (lastCrumb) {
      const productTypePathname = pathname.split(`/${page}/`)[1]

      if (!productTypePathname) {
        setDynamicTitle('')
        lastCrumb.textContent = crumbText
        return
      }

      if (!productCategories.some((item) => item === productTypePathname)) {
        return
      }

      const text = (
        translations[lang][
          page === 'comparison' ? 'comparison' : 'breadcrumbs'
        ] as { [index: string]: string }
      )[productTypePathname]
      setDynamicTitle(text)
      lastCrumb.textContent = text
    }
  }, [breadcrumbs, crumbText, lang, pathname, translations, page])

  return { getDefaultTextGenerator, getTextGenerator, breadcrumbs }
}
