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
      options: ['primary', 'secondary', 'accent', 'success', 'muted'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Toast Primary',
    variant: 'primary',
  },
};

export const Success = {
  args: {
    label: 'Toast Sucesso',
    variant: 'success',
  },
};
