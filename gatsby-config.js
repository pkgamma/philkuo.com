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
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-use-dark-mode',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      }
    },
  ],
  siteMetadata: {
    title: "Philip Kuo - Software Engineer and Product Designer",
    titleTemplate: "%s - Philip Kuo",
    description: "I Craft Stunning Digital Experiences.",
    url: "https://philkuo.com",
    image: "/social.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@pkgamma",
  },
}
