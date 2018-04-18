import React from 'react';
import PostListing from '../components/PostListing';

const BlogPage = ({ data }) => (
    <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            node.frontmatter.postType === 'Post' && <PostListing key={node.id} post={node} />
        ))}

    </div>
);

export default BlogPage;

export const query = graphql`
query blogPage {
    allMarkdownRemark(sort: {
        fields: [frontmatter___date],
        order: DESC
    }) {
        edges{
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
              postType
              featuredImage {
                  childImageSharp {
                      sizes(maxWidth: 960) {
                          ...GatsbyImageSharpSizes
                      }
                  }
              }
            }
            fields {
                slug
            }
            id
            html
            excerpt
            timeToRead
          }
        }
    }
  }
`;