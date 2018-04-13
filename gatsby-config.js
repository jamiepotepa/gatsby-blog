module.exports = {
    siteMetadata: {
        title: 'Gatsby Portfolio Theme',
        desc: "Side project portfolio"
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        'gatsby-plugin-netlify-cms',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'img',
                path: `${__dirname}/src/images/`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'uploads',
                path: `${__dirname}/src/assets/`
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
                excerpt_separator: `<!-- excerpt end -->`,
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads'
                        }
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 960,
                            backgroundColor: 'transparent'
                        },
                    },
                ],
            },
        },
    ],
};