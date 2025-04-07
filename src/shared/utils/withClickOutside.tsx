'use client'
import { useClickOutside } from '@/shared/hooks/useClickOutside'
import { IWrappedComponentProps } from '@/shared/types/hocs'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export function withClickOutside(
  WrappedComponent: ForwardRefExoticComponent<
    IWrappedComponentProps & RefAttributes<HTMLDivElement>
  >
) {
  const Component = ({data}: {data:any}) => {
    const { open, setOpen, ref } = useClickOutside()

    return <WrappedComponent data={data} open={open} setOpen={setOpen} ref={ref} />
  }

  return Component
}
