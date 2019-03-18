const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken, trackingId } = process.env;

module.exports = {
  siteMetadata: {
    title: "Pepp"
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Raleway:400,700,900", "Open Sans:400,700"]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId
      }
    }
  ]
};
