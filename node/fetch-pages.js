const getComponents = require("./get-components");

// Fetch all wordpress pages w/ all component fragments
const fetchPages = async ({ graphql }) => {
  const graphqlResult = await graphql(`
    query GetAllPagesWithComponents {
      allWpPage {
        nodes {
          id
          title
          databaseId
          nodeType
          slug
          uri
          language {
            code
          }
          seo {
            focuskw
            metaDesc
            opengraphTitle
            opengraphAuthor
          }
           page {
            components {
              ${getComponents()}
            }
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    console.error(graphqlResult.errors);
    throw new Error("GraphQL query failed");
  }

  return graphqlResult.data.allWpPage.nodes;
};

module.exports = fetchPages;
