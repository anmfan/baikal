import type { StorybookConfig } from "@storybook/nextjs";

import { ADDONS_NEXTJS } from "@itcase/storybook-config/config/addonsNextJs";
import { FRAMEWORK_NEXTJS } from "@itcase/storybook-config/config/frameworkNextJs";
import { MAIN_CONFIG } from "@itcase/storybook-config/config";
import { STATIC_DIRS_NEXTJS } from "@itcase/storybook-config/config/staticDirsNextJs";

const config: StorybookConfig = {
  addons: [...ADDONS_NEXTJS],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  ...FRAMEWORK_NEXTJS,
  ...MAIN_CONFIG,
  staticDirs: [...STATIC_DIRS_NEXTJS],
};
export default config;
