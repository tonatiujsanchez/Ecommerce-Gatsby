import React from 'react'
import ProductCard from './productCard'

const ProductsList = ({ products }) => {
    return (
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map(
                product => (
                    <ProductCard key={product.id} product={product} />
                )
            )}
        </div>
    )
}

export default ProductsList