export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: ({ initials, variant, size }) => {
    return `<div class="avatar avatar-${variant} avatar-${size}">${initials}</div>`;
  },
  argTypes: {
    initials: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'muted'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Primary = {
  args: {
    initials: 'PR',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary = {
  args: {
    initials: 'SC',
    variant: 'secondary',
    size: 'lg',
  },
};

export const Accent = {
  args: {
    initials: 'AC',
    variant: 'accent',
    size: 'lg',
  },
};

export const MutedSmall = {
  args: {
    initials: 'MT',
    variant: 'muted',
    size: 'sm',
  },
};
