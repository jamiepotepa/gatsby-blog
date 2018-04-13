import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

import PostListing from '../components/Posts/PostListing';

const OpeningSection = styled.div`
    max-width: 800px;
    margin: 0 auto;    
`;

const IndexPage = ({ data }) => (
    <div>
        <OpeningSection>
            <p>A little hipster ipsum to simulate an opening paragraph.Lorem ipsum dolor amet keytar pinterest chartreuse keffiyeh. Kombucha mixtape health goth shoreditch pug polaroid fanny pack cliche celiac street art. Messenger</p>
        </OpeningSection>
        <div>
            <h2>Posts</h2>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                node.frontmatter.postType === 'Post' && <PostListing key={node.id} post={node} />
            ))}
        </div>
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