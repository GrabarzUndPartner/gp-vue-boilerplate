import { getPicture } from '@@/.storybook/samples';
import AtomResponsiveImage from './ResponsiveImage';

export default {
  title: 'Atoms/Picture',
  component: AtomResponsiveImage,
  argTypes: {
    sources: {
      control: {
        type: 'select',
        options: {
          SetA: getPicture('dog'),
          SetB: getPicture('skyscrapers')
        }
      },
      defaultValue: getPicture('dog')
    },
    loading: {
      control: {
        type: 'inline-radio',
        options: [
          'auto',
          'lazy',
          'eager'
        ]
      },
      defaultValue: 'auto'
    },
    width: {
      table: {
        disable: true
      }
    },
    height: {
      table: {
        disable: true
      }
    }
  }
};

export const Picture = (arg, { argTypes }) => {
  return {
    components: { AtomResponsiveImage },
    props: Object.keys(argTypes),
    template: '<atom-responsive-image :sources="JSON.parse($props.sources).sources" v-bind="$props" />'
  };
};
