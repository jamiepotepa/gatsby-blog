import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

const Grid = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 500px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    > div {
        padding: 0 0 10px 0;
        transition: background 0.2s;
        
        &:hover {
            background: #f3f3f3;
            
            img {
                transform: scale(2);
            }
        }

        @media (min-width: 500px) {
            flex: 0 1 50%;
            padding: 10px;
        }

        @media (min-width: 800px) {
            flex: 0 1 33%;
        }

        img {
            transition: all 2s!important;
        }
    }
`;

import PortfolioListing from '../components/PortfolioListing';

const PortfolioPage = ({ data }) => (
    <Grid>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            node.frontmatter.postType === 'Portfolio' && <PortfolioListing key={node.id} post={node} />
        ))}
    </Grid>
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
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
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