import { storiesOf } from '@storybook/vue';

import gpAtomRichText from '@/components/atoms/RichText.vue';

storiesOf('atoms/RichText', module)
  .add('Default', () => ({
    components: {
      gpAtomRichText
    },
    template: '<gp-atom-rich-text :content="content" />',
    data: () => {
      return {
        content: '<p><span style="font-weight: bold;">Pretium</span> rhoncus consequat porta ullamcorper libero? Cras fuga, nemo primis officiis dui aut, amet. Cum, delectus nisl molestie, quia consequat.</p><p>Sem voluptatem dictumst nonummy, nonummy cubilia, laborum pulvinar aperiam itaque vestibulum eaque.Sunt ipsum, aliquet, impedit possimus feugiat.Nibh corrupti.</p><p>Nulla quisquam fugiat rhoncus, rem. Tincidunt mus ullam felis pulvinar curae porta vel! Elementum dolor, potenti? Repellat parturient! Sequi dignissimos.</p>'
      };
    }
  }));
