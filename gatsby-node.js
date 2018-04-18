const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if(node.internal.type === 'MarkdownRemark') {
        
        // createFilePath will find the parent file node and create the slug so no need for the below
        // const fileNode = getNode(node.parent);
        // console.log(fileNode);
        
        const basePath = node.frontmatter.postType === 'Post' ? 'posts' : 'portfolio' 

        const slug = createFilePath({
            node,
            getNode,
            basePath: basePath
        });
        
        console.log('SLUG' + slug);
        
        createNodeField({
            node,
            name: 'slug',
            value: `${basePath}${slug}`
        });
        
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise(( resolve, reject) => {
    
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter{
                            postType
                        }
                    }
                }
            }
        }
    `).then((result) => {

            const postTemplateSrc = path.resolve('./src/templates/SinglePost.js');
            const portfolioTemplateSrc = path.resolve('./src/templates/SinglePortfolio.js');

            if(result.errors) {
                console.log(result.errors);
                reject(result.errors);
            }

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                
                const postTemplate = node.frontmatter.postType === 'Post' ? postTemplateSrc : portfolioTemplateSrc
            
                createPage({
                    path: node.fields.slug,
                    component: postTemplate,
                    context: {
                        slug: node.fields.slug
                    }
                })
            });
            resolve();
        });
    });
};