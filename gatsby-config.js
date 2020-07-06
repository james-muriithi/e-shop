module.exports = {
  siteMetadata: {
    title: `e-shop`,
    description: `Simple e-commerce website in react.`,
    author: `@james-muriithi`,
    siteUrl: 'https://my-online-shop.netlify.app/',
    siteLanguage: `en`,
    ogLanguage: `en`,
    headline: `E-Shop`,
    twitter: `@jam_es_muriithi`,
    facebook: `james-muriithi`,
    banner: `/preview.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `e-shop`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ff7d1a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
