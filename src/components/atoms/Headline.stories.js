import AtomHeadline from './Headline';

export default {
  title: 'Atoms/Headline',
  component: AtomHeadline,
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6'
        ]
      },
      defaultValue: 'h2'
    }
  }
};

export const Headline = (arg, { argTypes }) => ({
  components: { AtomHeadline },
  props: Object.keys(argTypes),
  template: '<atom-headline v-bind="$props" />'
});
