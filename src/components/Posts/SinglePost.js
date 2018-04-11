import React, { Component } from 'react';

export default class SinglePost extends Component {

    render() {
        const { html, frontmatter: { title, date, image } } = this.props.data.markdownRemark;

        return (
            <div>
                {image ? <img src={image} /> : null}
                <span>{ date }</span>
                <h1>{ title }</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
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
                image
            }
            timeToRead
        }
    }
`;