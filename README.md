# @alexisbaud/slice-common

This package provides shared TypeScript types, event definitions, helper functions, and base ESLint/Prettier configurations for Slice microservices.

## Version

`0.1.0` (See `package.json` for the latest version)

## Installation

Install the package in your microservice project using your preferred package manager:

```bash
npm install @alexisbaud/slice-common
# or
yarn add @alexisbaud/slice-common
# or
pnpm add @alexisbaud/slice-common
```

## Contents

### 1. Types

Located in `dist/types/` (after build) and defined in `src/types/`:

-   **`AuthCredentials`**, **`AuthTokens`** (from `auth.ts`): Interfaces for authentication request and response data.
-   **`UserProfile`** (from `user.ts`): Interface for user profile information.
-   **`AuthUserRegisteredEvent`**, **`AuthUserDeletedEvent`** (from `auth.ts`): Interfaces for authentication event payloads.

**Example Usage (TypeScript):**

```typescript
import { UserProfile, AuthCredentials, AuthTokens, AuthUserRegisteredEvent } from '@alexisbaud/slice-common';

const user: UserProfile = {
  id: 'user-uuid-123',
  email: 'test@example.com',
  isActive: true,
  isVerified: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  // username, firstName, lastName are optional
};

const credentials: AuthCredentials = {
  email: 'login@example.com',
  password: 'securePassword123',
};

// Example of an event payload
const eventPayload: AuthUserRegisteredEvent = {
  id: 'user-uuid-123',
  email: 'newuser@example.com',
  timestamp: new Date().toISOString(),
};
```

### 2. Helper Functions

Located in `dist/helpers/` (after build) and defined in `src/helpers/`:

-   **`formatDate(date: Date, locale?: string, options?: Intl.DateTimeFormatOptions): string`**: Formats a Date object into a human-readable string.
-   **`slugify(text: unknown): string`**: Converts a string into a URL-friendly slug.
-   **`genUUIDReadable(segments?: number, segmentLength?: number): string`**: Generates a human-readable, non-cryptographic pseudo-UUID.

**Example Usage (TypeScript):**

```typescript
import { formatDate, slugify, genUUIDReadable } from '@alexisbaud/slice-common';

console.log(formatDate(new Date())); // e.g., "01/25/2024, 10:30:00" (output depends on locale)
console.log(slugify('My Awesome Slice Title!')); // "my-awesome-slice-title"
console.log(genUUIDReadable()); // e.g., "xzy1-abc2-qwe3"
```

### 3. ESLint Configuration

A base ESLint configuration is provided in `eslint/index.js`. To use it in your microservice:

1.  **Install Peer Dependencies**: Ensure your service has `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `prettier`, `eslint-config-prettier`, and `eslint-plugin-prettier` installed as development dependencies.

    ```bash
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
    # or
    yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
    ```

2.  **Extend the Configuration**: Create or update your service's `.eslintrc.js` (or `.eslintrc.json`, `.yaml`) file:

    ```javascript
    // your-service/.eslintrc.js
    module.exports = {
      root: true,
      extends: [
        require.resolve('@alexisbaud/slice-common/eslint'),
        // Add any project-specific ESLint rules or plugins here
      ],
      parserOptions: {
        // Important: Point to your service's tsconfig.json
        project: ['./tsconfig.json'], 
        tsconfigRootDir: __dirname,
      },
      // Add or override rules specific to this service
      rules: {
        // Example: 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      },
    };
    ```

### 4. Prettier Configuration

A base Prettier configuration is provided in `prettier/index.js`. To use it in your microservice:

1.  **Install Prettier**: Ensure `prettier` is a dev dependency in your service.

    ```bash
    npm install --save-dev prettier
    # or
    yarn add --dev prettier
    ```

2.  **Use the Configuration**: You have a few options:

    *   **Via `package.json` (recommended for simplicity):**

        ```json
        // your-service/package.json
        {
          // ...
          "prettier": "@alexisbaud/slice-common/prettier"
          // ...
        }
        ```

    *   **Via a local `.prettierrc.js` file:**

        ```javascript
        // your-service/.prettierrc.js
        module.exports = {
          ...require('@alexisbaud/slice-common/prettier'),
          // Add any project-specific Prettier overrides here
        };
        ```

## Development of `@alexisbaud/slice-common`

### Build

This package is built using `tsup`. To build it locally after cloning:

```bash
npm run build
```

This command cleans the `dist/` directory and then generates ESM, CJS, and TypeScript declaration files from `src/index.ts`.

### Linting & Formatting

-   Lint files: `npm run lint`
-   Fix linting issues: `npm run lint:fix`
-   Format files with Prettier: `npm run format`

### Type Checking

-   Check for TypeScript errors: `npm run check-types`

## Contribution

When making changes:

1.  Update types, helpers, or configs in the `src/` directory.
2.  Ensure all exports are correctly managed through `src/index.ts` if applicable.
3.  Update this `README.md` if public APIs or usage instructions change.
4.  Run `npm run format` and `npm run lint:fix`.
5.  Ensure `npm run build` and `npm run check-types` pass without errors.
6.  Increment the version in `package.json` according to Semantic Versioning (SemVer) if your changes are breaking, a new feature, or a bugfix. 