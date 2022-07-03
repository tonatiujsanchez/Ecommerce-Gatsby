import React from 'react'
import AddToCart from './AddToCart';
// import Checkout from './Checkout';
import Price from './Price';
import Reviews from './Reviews';

const ProductDetails = ({ product }) => {
    return (
        <article className='container mx-auto grid md:grid-cols-2 gap-12 px-5'>
            <div>
                <img src={product.product.images[0]} alt={product.product.description} />
            </div>
            <div>
                <h1 className='font-extrabold text-5xl mb-5'>{product.product.name}</h1>
                <Price price={product.unit_amount } currency={product.currency} className='text-2xl font-bold mb-5' />
                <Reviews className='mb-5' />
                <p className='text-xl mb-10'>{product.product.description}</p>
                <AddToCart product={product}/>
            </div>
        </article>
    )
}

export default ProductDetails