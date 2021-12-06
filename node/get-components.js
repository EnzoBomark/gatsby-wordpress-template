const path = require("path");

const getDirectories = require("./get-directories");

const componentsFolder = path.join(
  process.cwd(),
  "src",
  "components",
  "layout-blocks"
);

// Goes through all the *.data.ts files in the components folders to combine the graphql fragments
const getComponents = () => {
  // Get all component names from the components folder
  const componentNames = getDirectories(componentsFolder);

  // Combine all declared data from the Example.d.ts files
  return componentNames.reduce((acc, curr) => {
    const componentDataFile = path.join(
      componentsFolder,
      curr,
      `${curr}.data.ts`
    );
    const query = require(componentDataFile);

    // !IMPORTANT
    // 1. ACF Field Group's GraphQL Field Name = page
    // 2. Flexible Content Field Name = components

    const fragment = `
      ... on WpPage_Page_Components_${curr} {
        label
        ${query()}
      }
    `;

    acc += " \n " + fragment;
    return acc;
  }, "");
};

module.exports = getComponents;
