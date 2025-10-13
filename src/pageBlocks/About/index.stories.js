import About from './index'

const meta = {
  title: 'PageBlocks / About',
  component: About,
}

export default meta

export const Desktop = {
  globals: {
    viewport: { value: 'desktop' },
  },
  render: (args) => <About {...args} />,
}

export const Mobile = {
  globals: {
    viewport: { value: 'mobile' },
  },
  render: (args) => <About {...args} />,
}
