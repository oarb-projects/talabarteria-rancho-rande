/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path=require ('path');
// const {createPage}=boundActionCreators;

exports.createPages=({boundActionCreators,graphql})=>{
    const {createPage}=boundActionCreators;
    createPage({
        path: `/`,
        component: path.resolve(`./src/pages/Default/index.js`),
        context: {
            id: `777`,
        },
    })
    createPage({
        path: `/product-1/`,
        component: path.resolve(`./src/pages/ProductDetail/product-1.js`),
        context: {
            id: `123456`,
        },
    })
    createPage({
        path: `/products/`,
        component: path.resolve(`./src/pages/Products/products.js`),
        context: {
            id: `12345`,
        },
    })
    createPage({
        path: `/History/`,
        component: path.resolve(`./src/pages/History/History.js`),
        context: {
            id: `12345`,
        },
    })
    createPage({
        path: `/Cart/`,
        component: path.resolve(`./src/pages/Cart/Cart.js`),
        context: {
            id: `1234`,
        },
    })
    createPage({
        path: `/Reviews/`,
        component: path.resolve(`./src/pages/Reviews/Reviews.js`),
        context: {
            id: `7771`,
        },
    })
    createPage({
        path: `/Capacity/`,
        component: path.resolve(`./src/pages/Capacity/Capacity.js`),
        context: {
            id: `7772`,
        },
    })
    createPage({
        path: `/Policies/`,
        component: path.resolve(`./src/pages/Policies/Policies.js`),
        context: {
            id: `7773`,
        },
    })
    createPage({
        path: `/Special/`,
        component: path.resolve(`./src/pages/Special/Special.js`),
        context: {
            id: `7774`,
        },
    })
    createPage({
        path: `/BuyExperience/`,
        component: path.resolve(`./src/pages/BuyExperience/BuyExperience.js`),
        context: {
            id: `7775`,
        },
    })
    createPage({
        path: `/Contact/`,
        component: path.resolve(`./src/pages/Contact/Contact.js`),
        context: {
            id: `7776`,
        },
    })
    const postTemplate=path.resolve('src/templates/post.js');
    return graphql(`{
        allMarkdownRemark{
            edges{
                node{
                    html
                    id
                    frontmatter{
                        path
                        title
                    }
                }
            }
        }
    }`)
    .then(res=>{
        if(res.errors){
            return Promise.reject(res.errors);
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path:node.frontmatter.path,
                component:postTemplate
            })
        });
    })
}

