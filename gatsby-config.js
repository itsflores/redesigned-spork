module.exports = {
  siteMetadata: {
    siteTitle: `COMP2406 - Unofficial Student Docs`,
    defaultTitle: `COMP2406 - Unofficial Student Docs`,
    siteTitleShort: `COMP2406 - Docs - Unofficial`,
    siteDescription: `COMP2406 Documentation Sourced By Students`,
    siteUrl: `https://github.com/JosephDrazen/redesigned-spork`,
    siteAuthor: `@josephmalovic`,
    siteImage: `/favicon.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/JosephDrazen/redesigned-spork`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocket Docs`,
        short_name: `Rocket Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
