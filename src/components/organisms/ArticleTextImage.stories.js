import { getPicture } from '@@/.storybook/samples';
import OrganismTextImage from './ArticleTextImage';

export default {
  title: 'Organism/ArticleTextImage',
  component: OrganismTextImage,
  argTypes: {
    picture: {
      control: {
        type: 'select',
        options: {
          SetA: getPicture('dog'),
          SetB: getPicture('skyscrapers')
        }
      },
      defaultValue: getPicture('dog')
    }
  }
};

export const Normal = (arg, { argTypes }) => {
  return {
    components: { OrganismTextImage },
    props: Object.keys(argTypes),
    template: '<organism-artilce-text-image :picture="JSON.parse($props.picture)" v-bind="$props" />'
  };
};

