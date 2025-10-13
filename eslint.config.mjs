// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eslint from '@itcase/lint/eslint/index.js'
import eslintMobx from '@itcase/lint/eslint/mobx/index.js'
import eslintStorybook from '@itcase/lint/eslint/storybook/index.js'

export default [
  ...eslint,
  ...eslintMobx,
  ...eslintStorybook,
  ...storybook.configs["flat/recommended"]
];