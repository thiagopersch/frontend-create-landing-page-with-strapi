import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading 1'
  },
  argTypes: {
    children: { type: 'string' }
  }
};

export const Default = (args) => <Heading {...args} />;
