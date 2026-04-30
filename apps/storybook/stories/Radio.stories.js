export default {
  title: 'Components/Radio',
  tags: ['autodocs'],
  render: ({ checked, disabled, label, name }) => {
    const checkedAttr = checked ? 'checked' : '';
    const disabledAttr = disabled ? 'disabled' : '';
    
    return `
      <label style="display: flex; align-items: center; gap: 0.5rem; cursor: ${disabled ? 'not-allowed' : 'pointer'};">
        <input type="radio" name="${name}" class="radio" ${checkedAttr} ${disabledAttr} />
        <span style="opacity: ${disabled ? '0.5' : '1'}; font-family: var(--font-sans);">${label}</span>
      </label>
    `;
  },
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'React',
    name: 'framework',
    checked: false,
    disabled: false,
  },
};

export const Checked = {
  args: {
    label: 'Vue',
    name: 'framework',
    checked: true,
    disabled: false,
  },
};
