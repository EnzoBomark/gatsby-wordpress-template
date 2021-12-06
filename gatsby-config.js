require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
    title: "qte.se-v2",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        schema: {
          timeout: 60000,
        },
        url: process.env.WP_GRAPHQL_URL,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@/styles": path.resolve("./src/styles"),
        "@/components": path.resolve("./src/components"),
        "@/helpers": path.resolve("./src/helpers"),
        "@/interfaces": path.resolve("./src/interfaces"),
        "@/templates": path.resolve("./src/templates"),
        "@/src": path.resolve("./src"),
        "@/pages": path.resolve("./src/pages"),
        "@/hooks": path.resolve("./src/hooks"),
      },
    },
  ],
};
