import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import ProductsList from '../components/productsList';

const products = (props) => {

    return (
        <Layout>
            <div className='container mx-auto'>
                <ProductsList products={props.data.allStripeProduct.nodes} />
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    {    
        allStripeProduct {
            nodes {
                id,
                name,
                images,
                slug
            }
        }
    }
`

export default products