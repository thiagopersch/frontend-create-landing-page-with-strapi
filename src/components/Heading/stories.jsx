import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
    colorDark: true
  },
  argTypes: {
    children: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
  backgrounds: {
    default: 'light'
  }
};

Dark.args = {
  children: 'Heading',
  colorDark: false
};
