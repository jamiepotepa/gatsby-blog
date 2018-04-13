import React from 'react'
import Link from 'gatsby-link';

import PostListing from '../components/Posts/PostListing';

const PortfolioPage = ({ data }) => (
  <div>
    <h2>Portfolio</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
        node.frontmatter.postType === 'Portfolio' && <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export default PortfolioPage;

export const query = graphql`
query PortfolioPage {
    site {
      siteMetadata {
        title
        desc
      }
    }
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