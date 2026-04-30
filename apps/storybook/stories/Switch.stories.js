export default {
  title: 'Components/Switch',
  tags: ['autodocs'],
  render: ({ checked, disabled }) => {
    const checkedAttr = checked ? 'checked' : '';
    const stateAttr = checked ? 'checked' : 'unchecked';
    const disabledAttr = disabled ? 'disabled' : '';
    const classDisabled = disabled ? 'switch-disabled' : '';
    
    return `
      <label class="switch ${classDisabled}" data-state="${stateAttr}">
        <input type="checkbox" class="sr-only" ${checkedAttr} ${disabledAttr} onchange="this.parentElement.dataset.state = this.checked ? 'checked' : 'unchecked'" />
        <div class="switch-track">
          <div class="switch-thumb"></div>
        </div>
      </label>
    `;
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
  },
};
