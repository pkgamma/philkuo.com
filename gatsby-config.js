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
    title_zh: "郭力銘 - 使用者體驗工程師",
    description: "I Craft Stunning Digital Experiences.",
    description_zh: "細心研製令人驚艷的人性化數位體驗。",
    url: "https://philkuo.com",
    image: "/social.jpg", // Path to your image you placed in the 'static' folder
    image_zh: "/social_zh.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@pkgamma",
    langs: ['en', 'zh'],
    defaultLangKey: 'en',
  },
}
