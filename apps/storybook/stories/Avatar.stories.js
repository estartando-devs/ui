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
      options: ['frontend', 'design', 'backend', 'neutral'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Frontend = {
  args: {
    initials: 'FD',
    variant: 'frontend',
    size: 'md',
  },
};

export const Design = {
  args: {
    initials: 'DS',
    variant: 'design',
    size: 'lg',
  },
};

export const Backend = {
  args: {
    initials: 'BE',
    variant: 'backend',
    size: 'lg',
  },
};

export const NeutralSmall = {
  args: {
    initials: 'NT',
    variant: 'neutral',
    size: 'sm',
  },
};
