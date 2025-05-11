/**
 * Sharable ESLint configuration for Slice microservices.
 * To use, extend this in your service's .eslintrc.js: `extends: [require.resolve('@alexisbaud/slice-common/eslint')]`
 * Make sure to install peer dependencies like eslint, prettier, and typescript plugins in your service.
 */
module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses recommended rules from @typescript-eslint/eslint-plugin
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking', // Consider for stricter rules, requires parserOptions.project
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. Displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // `project` and `tsconfigRootDir` should be set in the consuming project's ESLint config
    // to point to their specific tsconfig.json, e.g.:
    // project: ['./tsconfig.json'],
    // tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    // prettier plugin is included by 'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true, // Ensures Prettier CLI options are respected if .prettierrc exists in consuming repo
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_+', varsIgnorePattern: '^_+', caughtErrorsIgnorePattern: '^_+' },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn', // Good practice for async code
    '@typescript-eslint/interface-name-prefix': 'off', // Deprecated and not common practice
    '@typescript-eslint/no-var-requires': 'off', // Allow require for .js config files

    // General good practices
    'eqeqeq': ['error', 'always'],
    'no-implicit-coercion': 'warn',
    // Add any other baseline rules considered "good practice" for all Slice services.
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/', 'coverage/', '*.js'], // Ignore JS config files in root of slice-common itself
  overrides: [
    {
      files: ['.js', '.cjs', '.mjs'], // For JS config files (like this one, or prettier.config.js)
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      }
    }
  ]
}; 