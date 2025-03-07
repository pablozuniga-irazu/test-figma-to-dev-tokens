const StyleDictionary = require("style-dictionary");

StyleDictionary.registerTransform({
  name: "custom/value",
  type: "value",
  matcher: (token) => token.hasOwnProperty("$value"),
  transformer: (token) => token.$value,
});

module.exports = {
  source: ["tokens.json"], // Ensure this path is correct
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/styles/", // Make sure this folder exists
      files: [
        {
          destination: "tokens.css",
          format: "css/variables"
        }
      ],
      transforms: ["custom/value"]
    }
  }
};