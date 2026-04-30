export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  render: ({ label, variant, size }) => {
    return `<span class="badge badge-${variant} ${size === 'sm' ? 'badge-sm' : ''}">${label}</span>`;
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'muted'],
    },
    size: {
      control: { type: 'radio' },
      options: ['default', 'sm'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'default',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
    size: 'default',
  },
};

export const Accent = {
  args: {
    label: 'Accent',
    variant: 'accent',
    size: 'default',
  },
};

export const Muted = {
  args: {
    label: 'Muted',
    variant: 'muted',
    size: 'default',
  },
};
