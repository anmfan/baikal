import HomePage from './index.page'

const meta = {
  title: 'Pages / Home',
  component: HomePage,
}

export default meta

export const Desktop = {
  globals: {
    viewport: { value: 'desktop' },
  },
  render: (args) => <HomePage {...args} />,
}

export const Mobile = {
  globals: {
    viewport: { value: 'mobile' },
  },
  render: (args) => <HomePage {...args} />,
}
