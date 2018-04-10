module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: "A new blog"
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-sharp',
      'gatsby-plugin-netlify-cms',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'img',
            path: `${__dirname}/src/images`
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'img',
            path: `${__dirname}/static/assets`
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
            excerpt_separator: `<!-- excerpt end -->`
        }
      },

    ],
};
