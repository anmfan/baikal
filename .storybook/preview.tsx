import React, { FC } from 'react'

import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'

import { BACKGROUNDS } from '@itcase/storybook-config/config/backgrounds/backgrounds'
import { VIEWPORTS } from '@itcase/storybook-config/config/viewport/viewport'
import { UIProvider } from '@itcase/ui/context/UIContext'

import '@itcase/storybook-config/css/preview.css'
import '../src/styles/main.css'

initialize()

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      options: { ...BACKGROUNDS },
    },
    options: {
      method: 'alphabetical',
      storySort: {
        order: [
          'Pages',
          ['Home', '*'],
          'Page Blocks',
          ['Intro', 'About', 'Production', 'ProductionVideo'],
          'Page Components',
          ['Header', 'Footer', '*'],
          '*',
        ],
      },
    },
    viewport: {
      options: { ...VIEWPORTS },
    },
  },
  decorators: [
    (Story: FC) => {
      return (
        <UIProvider>
          <Story />
        </UIProvider>
      )
    },
  ],
}

export default preview
