import Header from './Header'

const meta = {
  title: 'PageComponents / Header',
  component: Header,
}

export default meta

export const Desktop = {
  globals: {
    viewport: { value: 'desktop' },
  },
  render: (args) => <Header {...args} />,
}

export const Mobile = {
  globals: {
    viewport: { value: 'mobile' },
  },
  render: (args) => <Header {...args} />,
}
