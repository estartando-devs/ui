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
      options: ['frontend', 'design', 'backend', 'neutral'],
    },
    size: {
      control: { type: 'radio' },
      options: ['default', 'sm'],
    },
  },
};

export const Frontend = {
  args: {
    label: 'Frontend',
    variant: 'frontend',
    size: 'default',
  },
};

export const Design = {
  args: {
    label: 'Design',
    variant: 'design',
    size: 'default',
  },
};

export const Backend = {
  args: {
    label: 'Backend',
    variant: 'backend',
    size: 'default',
  },
};

export const Neutral = {
  args: {
    label: 'Neutral',
    variant: 'neutral',
    size: 'default',
  },
};
