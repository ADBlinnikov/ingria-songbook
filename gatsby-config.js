module.exports = {
  siteMetadata: {
    title: `Ingria Songbook`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-theme-ui", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};