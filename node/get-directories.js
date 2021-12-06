const { readdirSync } = require("fs");

// Returns an array of all the folder names within a given folder
const getDirectories = (source) => {
  return readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

module.exports = getDirectories;
