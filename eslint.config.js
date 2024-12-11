// import { rootEslintConfig, rootParserOptions } from '../../eslint.config.js'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
export const index = [
  // ...rootEslintConfig,
  {
    ignores: ["dist/*"]
  },
  {
    languageOptions: {
      parserOptions: {
        // ...rootParserOptions,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]

export default index
