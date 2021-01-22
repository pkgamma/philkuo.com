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
    'gatsby-plugin-use-dark-mode',
  ],
  siteMetadata: {
    title: "Philip Kuo",
    titleTemplate: "%s - Philip Kuo",
    description: "I Craft Stunning Digital Experiences.",
    siteUrl: "http://philkuo.com",
  },
}
