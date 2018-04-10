import React from 'react';
import Link from 'gatsby-link';


const PostListing = ({ post }) => (
    <article>
        <h3><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
        <span>{post.frontmatter.date} - Time to Read (mins): {post.timeToRead}</span>
        <p>{post.excerpt}</p>
        {/* <div dangerouslySetInnerHTML={{__html: post.html}} /> */}
    </article>
);

export default PostListing;