const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if(node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'posts'
        });
        createNodeField({
            node,
            name: 'slug',
            value: `/posts${slug}`
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
                        }
                    }
                }
            }
        `).then((result) => {
            if(result.errors) {
                console.log(result.errors);
                reject(result.errors);
            }

            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/components/Posts/SinglePost.js'),
                    context: {
                        slug: node.fields.slug
                    }
                })
            });
            resolve();
        });
    });
};