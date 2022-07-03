import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Success = () => {
    return (
        <Layout>
            <div className='my-40 max-w-4xl mx-auto text-center'>
                <div className='max-w-[150px] m-auto mb-5'>
                    <StaticImage src="../images/check-exit.png" alt="Checkout" />
                </div>
                <h3 className='text-2xl font-bold mb-5'>Pago realizado exitosamente</h3>
                <p>Gracias por tu compra, enviaremos a tu correo tu comprobante de pago</p>
            </div>
        </Layout>
    )
}

export default Success