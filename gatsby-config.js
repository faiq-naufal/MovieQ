require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { NODE_ENV, CONTEXT: NETLIFY_ENV = NODE_ENV } = process.env

const siteUrl = `https://movieq.faiqnaufal.com`

module.exports = {
  siteMetadata: {
    title: `Search Your Movies Here - MovieQ`,
    description: `MovieQ, A web-based movies list based on OMDB API`,
    logo: `./src/images/logo.png`,
    author: `Faiq Naufal`,
    siteUrl: siteUrl,
    siteName: "MovieQ",
    lang: `en`,
  },
  plugins: [
    //SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        createLinkInHead: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
            sitemap: `${siteUrl}/sitemap.xml`,
            host: siteUrl,
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    //Theme & Layout
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ff6d5a`,
        minimum: 0.1,
        parent: `#gatsby-focus-wrapper`,
        trickleSpeed: 400,
        trickleRate: 0.2,
        showSpinner: false,
      },
    },
    //File
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //Netlify
    `gatsby-plugin-netlify`,
    //Optimization
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-preact`,
    //PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MovieQ`,
        short_name: `MovieQ`,
        description: `MovieQ - Search Your Movies`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff6d5a`,
        display: `standalone`,
        icon: `./src/images/logo.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
