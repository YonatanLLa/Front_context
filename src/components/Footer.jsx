import React from 'react'
// import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'
export const Footer = () => {
    // const { filters }  = useFilters()
    const {cart} = useCart()

  return (
    <footer>
        {
            // JSON.stringify(cart, null, 2)   
        }
    </footer>
  )
}

// export default Footer