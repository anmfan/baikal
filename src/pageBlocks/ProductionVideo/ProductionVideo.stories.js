import ProductionVideo from './ProductionVideo'

const meta = {
  title: 'PageBlocks / ProductionVideo',
  component: ProductionVideo,
}

export default meta

export const Desktop = {
  globals: {
    viewport: { value: 'desktop' },
  },
  render: (args) => <ProductionVideo {...args} />,
}

export const Mobile = {
  globals: {
    viewport: { value: 'mobile' },
  },
  render: (args) => <ProductionVideo {...args} />,
}
