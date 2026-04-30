export default {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  render: ({ checked, disabled, label }) => {
    const checkedAttr = checked ? 'checked' : '';
    const disabledAttr = disabled ? 'disabled' : '';
    
    return `
      <label style="display: flex; align-items: center; gap: 0.5rem; cursor: ${disabled ? 'not-allowed' : 'pointer'};">
        <input type="checkbox" class="checkbox" ${checkedAttr} ${disabledAttr} />
        <span style="opacity: ${disabled ? '0.5' : '1'}; font-family: var(--font-sans);">${label}</span>
      </label>
    `;
  },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Frontend Development',
    checked: false,
    disabled: false,
  },
};

export const Checked = {
  args: {
    label: 'Design System',
    checked: true,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Checkbox',
    checked: false,
    disabled: true,
  },
};
