import React from 'react'

import useCart from '../hooks/useCart'

const AddToCart = ({ product, className }) => {

    const { addProductToCart } = useCart()



    return (
        <button
            className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-5 w-full md:w-[280px] rounded ${className}`}
            onClick={()=> addProductToCart(product)} >
            Agregar al carrito
        </button>
    )
}

export default AddToCart