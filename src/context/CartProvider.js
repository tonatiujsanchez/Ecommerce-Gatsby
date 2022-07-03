import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [shoppingCard, setShoppingCard] = useState([])
    const [showCart, setShowCart] = useState(false)
    const [ total, setTotal ] = useState(0)


    useEffect(()=>{
        const totalTemp = shoppingCard.reduce( (total, product) =>{
            return (product.unit_amount * product.quantity) + total
        }, 0)
        setTotal(totalTemp)
    },[shoppingCard])

    const addProductToCart = ( product ) => {

        const existProduct = shoppingCard.find( prodState => prodState.product.id === product.product.id )

        if(existProduct){
            existProduct.quantity = existProduct.quantity + 1
            const products = shoppingCard.map( prodState => prodState.product.id === product.product.id ? existProduct : prodState)
            setShoppingCard(products)
        }else{
            product.quantity = 1
            setShoppingCard([...shoppingCard, product])
        }

    }

    const removeProductToCart = ( product ) => {

        const existProduct = shoppingCard.find( prodState => prodState.product.id === product.product.id )
        if(existProduct.quantity > 1){

            existProduct.quantity = existProduct.quantity - 1
            const products = shoppingCard.map( prodState => prodState.product.id === product.product.id ? existProduct : prodState)
            setShoppingCard(products)

        }else{
            const products = shoppingCard.filter( prodState => prodState.product.id !== product.product.id)
            setShoppingCard(products)
        }
    }

    const clearShoppingCard = () => {
        setShoppingCard([])
    }

    return (
        <CartContext.Provider value={{
            addProductToCart,
            shoppingCard,
            setShowCart,
            showCart,
            total,
            removeProductToCart,
            clearShoppingCard
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartProvider
}

export default CartContext