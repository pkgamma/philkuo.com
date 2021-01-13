/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
  ],
  siteMetadata: {
    title: "Philip Kuo",
    titleTemplate: "%s - Philip Kuo",
    description: "I Craft Stunning Digital Experiences.",
    url: "http://philkuo.com", // No trailing slash allowed!
  },
}
