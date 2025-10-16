import Production from "./Production";

const meta = {
  title: "PageBlocks / Production",
  component: Production,
};

export default meta;

export const Desktop = {
  globals: {
    viewport: { value: "desktop" },
  },
  render: (args) => <Production {...args} />,
};

export const Mobile = {
  globals: {
    viewport: { value: "mobile" },
  },
  render: (args) => <Production {...args} />,
};
