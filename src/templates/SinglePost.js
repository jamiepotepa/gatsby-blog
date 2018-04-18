import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SinglePage = styled.div`

    h1 {
        margin: 0.725rem 0;
    }

    span {
        font-size: 0.8rem;
        font-weight: 700;
    }

    .content {
        padding-top: 20px;
    }

    .back-to-blog {
        padding: 10px;
        background: #1ca086;
        color: white;
        transition: background 0.2s;

        &:hover {
          background: #11826b;
        }
    }
`;

export default class SinglePost extends Component {

    render() {
        const { html, frontmatter: { title, date, featuredImage } } = this.props.data.markdownRemark;

        return (
            <SinglePage>
                {/* {image ? <img src={image} /> : null} */}
                {featuredImage ? <Img sizes={featuredImage.childImageSharp.sizes} /> : null }
                <h1>{ title }</h1>
                <span>{ date }</span>
                <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
                <Link className="back-to-blog" to="/blog">Back to Blog</Link>
            </SinglePage>
        )
    }
}

export const query = graphql`
    query SinglePostQuery($slug: String!) {
        markdownRemark(fields: {
            slug: {
                eq: $slug
            }
        }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                featuredImage {
                    childImageSharp {
                        sizes(maxWidth: 960) {
                            ...GatsbyImageSharpSizes
                        }
                    }
                }
            }
            timeToRead
        }
    }
`;