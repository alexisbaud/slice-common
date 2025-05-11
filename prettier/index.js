/**
 * Sharable Prettier configuration for Slice microservices.
 * To use, add this to your service's package.json: "prettier": "@alexisbaud/slice-common/prettier"
 * Or create a .prettierrc.js file: `module.exports = require('@alexisbaud/slice-common/prettier');`
 */
module.exports = {
  printWidth: 100, // Slightly wider for modern screens
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false, // Keep JSX attributes with double quotes if preferred
  trailingComma: 'all', // Use 'es5' for compatibility if targeting older environments, 'all' includes function params
  bracketSpacing: true,
  bracketSameLine: false, // Puts the > of a multi-line JSX element at the end of the last line
  arrowParens: 'always', // Always include parens for arrow function params (e.g., (x) => x)
  endOfLine: 'lf', // Enforce Unix line endings
  // Experimental or less common options can be added if needed
  // proseWrap: "preserve", // For markdown files, if Prettier manages them
}; 