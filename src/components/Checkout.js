import React, { useEffect, useState } from 'react'

const Checkout = ({ product, className }) => {

    const [stripe, setStripe] = useState({})

    useEffect(() => {
        setStripe( window.Stripe("pk_test_51LHESJLayso1tFCmeGPIwi3mfSKPh7DAkuQUHKgeHcLDfhVGCDUHPxzCz0tBh9j3EOYQfnNCeaTN5wJXtC5P6K4T00L6nNfLDT") )
    }, [])

    const redirectToCheckout = async( e ) => {

        console.log({ price: product.id, quantity: 1 });

        const response = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: [{ price: product.id, quantity: 1 }],
            successUrl:`http://localhost:8000/success`,
            cancelUrl:`http://localhost:8000`
        })

        if(response.error){
            console.log('HUBO UN ERROR', response.error);
        }
    }

    console.log(product);
    return (
        <button
            className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-5 w-full md:w-[280px] rounded ${className}`}
            onClick={redirectToCheckout} >
            Comprar
        </button>
    )
}

export default Checkout