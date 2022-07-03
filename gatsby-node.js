/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const slugify = require('slugify')

const slugifyOptions = {
    replacement: '-',
    lower: true
}

exports.sourceNodes = ({ actions }) => {
    actions.createTypes(`
        type StripeProduct implements Node{
            slug: String!
        }
    `)
}

exports.createResolvers = ({ createResolvers }) => {
    createResolvers({
        StripeProduct: {
            slug: {
                resolve: (source) => slugify(source.name, slugifyOptions)
            }
        }
    })
}

exports.createPages = async ({ actions, graphql }) => {
    const products = (await graphql(`
        {
            allStripeProduct {
                nodes {
                  id,
                  name,
                  slug,
                  default_price
                }
              }
        }
    `)).data.allStripeProduct.nodes
    
    products.forEach(product => {
        actions.createPage({
            path: `/products/${product.slug}`,
            component: require.resolve('./src/templates/product.js'),
            context: {
                id_price: product.default_price
            }
        })
    });

}