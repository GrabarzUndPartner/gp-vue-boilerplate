import AtomLinkTo from './LinkTo';

export default {
  title: 'Atoms/Link',
  component: AtomLinkTo,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onClick: { action: 'clicked' },
    url: {
      control: 'text',
      defaultValue: 'https://grabarzundpartner.de'
    },
    title: {
      control: 'text',
      defaultValue: 'Grabarz & Partner'
    },
    target: {
      control: {
        type: 'select',
        options: {
          internal: '_self',
          external: '_blank'
        }
      },
      defaultValue: '_blank'
    }
  }
};

export const Link = (arg, { argTypes }) => ({
  components: { AtomLinkTo },
  props: Object.keys(argTypes),
  template: '<atom-link-to v-bind="$props" @click.native="onClick"/>'
});
