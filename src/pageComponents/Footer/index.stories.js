import Footer from './index'

const meta = {
  title: 'PageComponents / Footer',
  component: Footer,
}

export default meta

export const Desktop = {
  globals: {
    viewport: { value: 'desktop' },
  },
  render: (args) => <Footer {...args} />,
}

export const Mobile = {
  globals: {
    viewport: { value: 'mobile' },
  },
  render: (args) => <Footer {...args} />,
}
