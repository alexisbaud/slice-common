// src/index.ts

// Types
export * from './types/auth';
export * from './types/user';

// Helpers
export * from './helpers/formatDate';
export * from './helpers/slugify';
export * from './helpers/genUUIDReadable';

// Note: ESLint and Prettier configurations are not exported via this barrel file.
// They are intended to be consumed directly by file path in consuming projects' configurations,
// e.g., require.resolve('@alexisbaud/slice-common/eslint') or as a string in package.json "prettier": "@alexisbaud/slice-common/prettier". 