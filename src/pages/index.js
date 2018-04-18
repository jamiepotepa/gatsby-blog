import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';

import PostListing from '../components/PostListing';

const OpeningSection = styled.section`
    background: #f7f7f7;
    padding: 2rem;
    margin: 2rem auto;

    p {
        margin:0;
    }    
`;

const MainSection = styled.section`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 680px) {
        flex-direction: row;
    }

    > div {

        @media only screen and (min-width: 680px) {
            flex-basis: 50%;
        }

        &:first-child {
            margin-bottom: 40px;

            @media only screen and (min-width: 680px) {
                margin: 0 40px 0 0;

            }
        }
    }
`;

const BlogSection = styled.section`

    h2 {
       margin: 0;

        @media only screen and (min-width: 680px) {
            margin-top: 2.175rem;
        }
    }
`;

const IndexPage = ({ data }) => (
    <div>
        <OpeningSection>
            <p>A little hipster ipsum opening paragraph.Lorem ipsum dolor amet keytar pinterest chartreuse keffiyeh. Kombucha mixtape health goth shoreditch pug polaroid fanny pack cliche celiac street art. Messenger</p>
        </OpeningSection>
        <MainSection>
            <div>
                <Img sizes={data.openingImage.sizes} />
            </div>
            <div>
                <p>Cornhole artisan aesthetic poke organic glossier bespoke four loko forage. Church-key tattooed poke blog palo santo. Vaporware kickstarter +1 pitchfork copper mug succulents shoreditch readymade.</p>
            </div>
        </MainSection>
        <BlogSection>
            <h2>Latest from the blog</h2>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <PostListing key={node.id} post={node} />
            ))}
        </BlogSection>
    </div>
);

export default IndexPage;

export const query = graphql`
query IndexPage {
    allMarkdownRemark(filter: {
        frontmatter: {
            postType: {
                eq: "Post"
            }
        }
    } sort: {
        fields: [frontmatter___date],
        order: DESC
    } limit: 2) {
        edges{
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
              postType
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
    openingImage: imageSharp(id: { regex: "/forest-mountain.jpg/" }) {
        sizes(maxWidth: 960) {
            ...GatsbyImageSharpSizes
        }
    }
  }
`;