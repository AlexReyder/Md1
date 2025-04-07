"use client"
import { getProductsCartLength } from "@/shared/api/cart"
import { useEffect, useState } from "react"
import s from './CartCount.module.scss'
import Link from "next/link"

const CartCount = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        async function getCount(){
            const {success, error} = await getProductsCartLength()
            if(!error){
                setCount(success)
            }
        }
        getCount()
    }, [])

    return(
        <div>
            <Link 
                href={'/cart'}
                className={s.CartCount}>
                <span className={s.Counter}>
                {' '}
                {count}
                </span>
            </Link>
        </div>
    )
}
export default CartCount