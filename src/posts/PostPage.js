import React, { Component } from 'react';

export default class PostPage extends Component {

    render() {
        const { html, frontmatter: { title, date } } = this.props.data.markdownRemark;

        return (
            <div>
                <span>{ date }</span>
                <h1>{ title }</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        )
    }
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: {
            slug: {
                eq: $slug
            }
        }) {
            html
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
            }
            timeToRead
        }
    }
`;