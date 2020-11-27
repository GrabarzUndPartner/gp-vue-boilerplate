import AtomRichText from './RichText';

export default {
  title: 'Atoms/RichText',
  component: AtomRichText,
  argTypes: {

  }
};

export const Normal = (arg, { argTypes }) => ({
  components: { AtomRichText },
  props: Object.keys(argTypes),
  template: '<atom-rich-text v-bind="$props" />'
});
