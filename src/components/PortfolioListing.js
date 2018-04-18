import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
// import Overdrive from 'react-overdrive';

const PortfolioListing = ({ post: { id, fields, timeToRead, excerpt, frontmatter: { title, date, featuredImage } } }) => {
    
    return (
        <div>
            <Link to={fields.slug}>
               <Img sizes={featuredImage.childImageSharp.sizes} />
            </Link>
        </div>
    )
    
}

export default PortfolioListing;