import React, { FC } from "react";

import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";

import { BACKGROUNDS } from "@itcase/storybook-config/config/backgrounds"
import { VIEWPORTS } from "@itcase/storybook-config/config/viewports"
import { UIProvider } from "@itcase/ui/context/UIContext";

import "@itcase/storybook-config/config/preview.css";
import "@itcase/storybook-config/config/appearance";
import "../src/styles/main.css";

initialize();

const preview: Preview = {
    decorators: [
        (Story: FC) => {
            return (
                <UIProvider>
                    <Story />
                </UIProvider>
            )
        },
    ],
    loaders: [mswLoader],
    parameters: {
        backgrounds: {
            options: { ...BACKGROUNDS },
        },
        layout: 'fullscreen',
        options: {
            method: 'alphabetical',
            storySort: {
                order: [
                    'Pages',
                    [ 'Home', '*' ],
                    'Page Blocks',
                    ['Intro', 'About', 'Portal', 'Production'],
                    'Page Components',
                    ['Header', 'SiteMenu', 'Footer', '*'],
                    '*',
                ],
            },
        },
        viewport: {
            options: { ...VIEWPORTS },
        },
    },
}

export default preview
