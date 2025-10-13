import type { StorybookConfig } from '@storybook/nextjs'

import {
  ADDONS_NEXTJS,
  FRAMEWORK_NEXTJS,
  MAIN_CONFIG_WEBPACK,
  STATIC_DIRS_NEXTJS,
} from '@itcase/storybook-config/config/main'

const config: StorybookConfig = {
  addons: [...ADDONS_NEXTJS],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  ...FRAMEWORK_NEXTJS,
  ...MAIN_CONFIG_WEBPACK,
  staticDirs: [...STATIC_DIRS_NEXTJS],
}
export default config
