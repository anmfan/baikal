import React, { FC } from 'react'

import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'

import { BACKGROUNDS } from '@itcase/storybook-config/config/backgrounds/backgrounds'
import { VIEWPORTS } from '@itcase/storybook-config/config/viewport/viewport'
import { UIProvider } from '@itcase/ui/context/UIContext'

import '@itcase/storybook-config/css/preview.css'
import '../src/styles/main.css'

const ADDON_THEMES = {
  defaultTheme: 'Baikal',
  themes: {
    Baikal: 'baikal',
    'Baikal Dark Theme': 'baikal dark-theme',
    'Baikal Light Theme': 'baikal light-theme',
  },
}

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
    withThemeByClassName({ ...ADDON_THEMES }),
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
