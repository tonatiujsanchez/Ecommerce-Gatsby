import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/layout';
import ProductDetails from '../components/productDetails';

const Product = (props) => {
    
    const product = props.data.stripePrice

    return (
        <Layout>
            <div className='my-20 max-w-5xl mx-auto'>
                <ProductDetails product={ product } />
            </div>
        </Layout>
    )
}

// export const pageQuery = graphql`
//     query($id: String){
//         stripeProduct(id: {eq: $id}){
//             name,
//             slug
//         }
//     }
// `
export const pageQuery = graphql`
    query($id_price: String){
        stripePrice(id: {eq: $id_price}) {
            product {
              description
              images
              name
              id
              created
            }
            currency
            unit_amount
            unit_amount_decimal
            id
        }
    }
`

export default Product