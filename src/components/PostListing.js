import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ArticleWith = styled.article`
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
           
    @media (min-width: 600px) {
        flex-direction: row;
        margin: 0 0 40px 0;
    }
 
    > div {

        &.image {
            flex: 0 1 40%;
            margin: 0 0 20px 0;

            @media (min-width: 600px) {
                margin: 0 20px 0 0;
            }

        }

        &.meta {
            flex: 0 1 60%;

            span {
                font-weight: 700;
            }
        }

        h3 {
            margin-top: 0;

            a {
                transition: all 0.3s;
                
                &:hover {
                    background: #1ca086;
                    color: white;
                }
            }
        }
    
    }

    img {
        margin-bottom: 0;
    }
`;

const ArticleWithout = styled.article`
        
    h3 {

        a {
            transition: all 0.3s;
            
            &:hover {
                background: #1ca086;
                color: white;
            }
        }
    }

`;

// Blog page  
const WithImage = ({ post: { fields, timeToRead, excerpt, frontmatter: { title, date, featuredImage } } }) => (
    <ArticleWith>
        <div className="image">
            <Img sizes={featuredImage.childImageSharp.sizes} />
        </div>
        <div className="meta">
            <h3><Link to={fields.slug}>{title}</Link></h3>
            <span>{date} - Time to Read: {timeToRead === 1 ? `${timeToRead} min` : `${timeToRead} mins`}</span>
            <p>{excerpt}</p>
        </div>
    </ArticleWith>
);

// Index page doesn't get the featured image so render this
const WithoutImage = ({ post: { fields, timeToRead, excerpt, frontmatter: { title, date, featuredImage } } }) => (
    <ArticleWithout>
        <div className="meta">
            <h3><Link to={fields.slug}>{title}</Link></h3>
            <span>{date} - Time to Read: {timeToRead === 1 ? `${timeToRead} min` : `${timeToRead} mins`}</span>
            <p>{excerpt}</p>
        </div>
    </ArticleWithout>
);

const PostListing = ({ post }) => (
   
    <div>   
        { post.frontmatter.featuredImage ? <WithImage post={post} /> : <WithoutImage post={post} /> }
    </div>
   
);

export default PostListing;