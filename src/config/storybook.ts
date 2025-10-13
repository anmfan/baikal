/**
 * Default configuration for Storybook stories
 *
 * It is used to set up and share common configuration data
 **/

const defaultStoryConfig = {
  // format REST_BASE_URL to always end with '/'
  restBaseUrl: new URL(process.env.REST_BASE_URL ?? '').origin + '/',
}

export { defaultStoryConfig }
