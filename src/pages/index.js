import React from 'react'
import Link from 'gatsby-link';

import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
        node.frontmatter.postType === 'Post' && <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export default IndexPage;

export const query = graphql`
query IndexPage {
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
            }
            id
            fields {
                slug
            }
            html
            excerpt
            timeToRead
          }
        }
    }
  }
`;