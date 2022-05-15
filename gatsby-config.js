module.exports = {
  siteMetadata: {
    title: `Ingria Songbook`,
    siteUrl: `http://www.ingria-songbook.ru.website.yandexcloud.net`
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "hymns",
        "path": "./hymns/"
      },
      __key: "pages"
    },
    "gatsby-plugin-sass",
    // Add after these plugins if used
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    "gatsby-plugin-perf-budgets",
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ]
};