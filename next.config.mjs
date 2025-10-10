import defaultConfig from '@itcase/next/config/defaultNextConfig.js'

import path from 'path'

const dirname = import.meta.dirname

const nextConfig = {
    ...defaultConfig,
    webpack: (config) => {
        config.resolve.alias.react = path.join(dirname, 'node_modules/react')
        config.resolve.alias['react-dom'] = path.join(dirname, 'node_modules/react-dom')
        config.resolve.alias['@itcase/common'] = path.join(dirname, 'node_modules/@itcase/common')
    },

    pageExtensions: ['page.ts', 'page.tsx'],

    reactStrictMode: true,
};

export default nextConfig;
