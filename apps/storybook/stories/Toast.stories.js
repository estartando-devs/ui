export default {
  title: 'Components/Toast',
  tags: ['autodocs'],
  render: ({ label, variant }) => {
    return `<div class="toast toast-${variant}">${label}</div>`;
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['frontend', 'design', 'backend', 'success', 'neutral'],
    },
  },
};

export const Frontend = {
  args: {
    label: 'Toast Frontend',
    variant: 'frontend',
  },
};

export const Success = {
  args: {
    label: 'Toast Sucesso',
    variant: 'success',
  },
};
