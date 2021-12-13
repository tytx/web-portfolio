const dotenv = require('dotenv')

if (process.env.ENVIRONMENT !== "PRODUCTION") {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  });;
}


// const { spaceId, accessToken }
const spaceId=  process.env.CONTENTFUL_SPACE_ID
const accessToken=  process.env.CONTENTFUL_ACCESS_TOKEN



module.exports = {
  siteMetadata: {
    title: `Telson Ting`,
    description: `Personal Site`,
    author: `@rohitguptab`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Telson Ting`,
        short_name: `Telson Ting`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/fev_icon.png` // This path is relative to the root of the site.
      }
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`
  ]
};
