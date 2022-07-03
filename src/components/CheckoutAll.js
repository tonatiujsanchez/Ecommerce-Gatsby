import React, { useEffect, useState } from 'react'
import useCart from '../hooks/useCart'

const CheckoutAll = ({ className }) => {

    const [stripe, setStripe] = useState({})

    const { shoppingCard } = useCart()

    useEffect(() => {
        setStripe( window.Stripe( process.env.STRIPE_PUBLIC_KEY ) )
    }, [])


    const redirectToCheckout = async( e ) => {

        const productsCheckout = shoppingCard.map( product => ({ price: product.id, quantity: product.quantity }))

        if(productsCheckout.length <= 0){
            console.log('El carrito esta vacio');
           return 
        }

        const response = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: productsCheckout,
            successUrl:`http://localhost:8000/success`,
            cancelUrl:`http://localhost:8000`
        })

        if(response.error){
            console.log('HUBO UN ERROR', response.error);
        }
    }

    return (
        <button
            className={`flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 uppercase ${className}`}
            onClick={redirectToCheckout} >
            Comprar
        </button>
    )
}

export default CheckoutAll