/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.(t|j)s?$": "@swc/jest",
  },
  testEnvironment: "node",
  testRegex: ".*\\.(test|spec)?\\.(ts)$",
  moduleFileExtensions: ["ts", "js"],
};

module.exports = config;
