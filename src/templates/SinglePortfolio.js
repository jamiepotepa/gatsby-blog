import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
// import Overdrive from 'react-overdrive';

const SinglePage = styled.div`
    
    .back-to-portfolio {
        padding: 10px;
        background: #1ca086;
        color: white;
        transition: background 0.2s;

        &:hover {
          background: #11826b;
        }
    }

`;

export default class SinglePortfolio extends Component {

    render() {
        const { html, id, frontmatter: { title, date, client, featuredImage } } = this.props.data.markdownRemark;

        return (
            <SinglePage>
                {featuredImage ? <Img sizes={featuredImage.childImageSharp.sizes} /> : null }
                <h1>{ title }</h1>
                <span>{ client }</span>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <Link className="back-to-portfolio" to="/portfolio">Back to Portfolio</Link>
            </SinglePage>
        )
    }
}

export const query = graphql`
    query SinglePortfolioQuery($slug: String!) {
        markdownRemark(fields: {
            slug: {
                eq: $slug
            }
        }) {
            html
            id
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                client
                featuredImage {
                    childImageSharp {
                        sizes(maxWidth: 960) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
        }
    }
`;