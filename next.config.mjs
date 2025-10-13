import os from 'os'
import path from 'path'

import { addSVGRtoWebpack } from '@itcase/config/svgr/webpack.js'
import defaultConfig from '@itcase/next/config/defaultNextConfig.js'

// https://nodejs.org/api/esm.html#importmetadirname
const dirname = import.meta.dirname

let usedThreads =
  (Number(process.env.CIRCLE_NODE_TOTAL) ||
    (os.cpus() || { length: 1 }).length) - 1
if (process.env.NODE_ENV !== 'development' && usedThreads > 5) {
  usedThreads = 5
}
console.log('final usedThreads: ', usedThreads)

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...defaultConfig,
  webpack: (config) => {
    config.resolve.alias.react = path.join(dirname, 'node_modules/react')
    config.resolve.alias['react-dom'] = path.join(
      dirname,
      'node_modules/react-dom',
    )
    config.resolve.alias['@itcase/common'] = path.join(
      dirname,
      'node_modules/@itcase/common',
    )
    config.resolve.alias['@itcase/ui'] = path.join(
      dirname,
      'node_modules/@itcase/ui/dist',
    )

    addSVGRtoWebpack(config)
    return config
  },

  env: {
    REST_BASE_URL: process.env.REST_BASE_URL,
  },

  // https://github.com/vercel/next.js/blob/canary/packages/next/src/server/config-shared.ts
  experimental: {
    cpus: Math.max(1, usedThreads),
    workerThreads: false,
  },

  output: 'standalone',

  pageExtensions: ['page.ts', 'page.tsx'],

  staticPageGenerationTimeout: 120,
}

export default nextConfig
