import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com/'
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' }
  }
};

export const Default = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
