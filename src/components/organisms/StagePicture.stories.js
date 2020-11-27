import { getPicture } from '@@/.storybook/samples';
import OrganismStagePicture from './StagePicture';

export default {
  title: 'Organism/Stage',
  component: OrganismStagePicture,
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

export const Stage = (arg, { argTypes }) => {
  return {
    components: { OrganismStagePicture },
    props: Object.keys(argTypes),
    template: '<organism-stage-picture :picture="JSON.parse($props.picture)" />'
  };
};
