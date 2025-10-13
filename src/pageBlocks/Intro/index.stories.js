import Intro from './index'

const meta = {
  title: 'PageBlocks / Intro',
  component: Intro,
}

export default meta

export const Desktop = {
  globals: {
    viewport: { value: 'desktop' },
  },
  render: (args) => <Intro {...args} />,
}

export const Mobile = {
  globals: {
    viewport: { value: 'mobile' },
  },
  render: (args) => <Intro {...args} />,
}
