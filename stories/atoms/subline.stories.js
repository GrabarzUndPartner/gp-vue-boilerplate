import { storiesOf } from '@storybook/vue';

import GpArticleSubline from '@/components/atoms/subline/Article.vue';
import GpPageSubline from '@/components/atoms/subline/Page.vue';
import GpSectionSubline from '@/components/atoms/subline/Section.vue';

storiesOf('atoms/Sublines', module)
  .add('Overview', () => ({
    components: {
      GpArticleSubline,
      GpPageSubline,
      GpSectionSubline
    },
    template: `<div>
      <gp-page-subline>{{textPageSubline}}</gp-page-subline>
      <gp-article-subline>{{textArticleSubline}}</gp-article-subline>
      <gp-section-subline>{{textSectionSubline}}</gp-section-subline>
      </div>`,
    data: () => {
      return {
        textPageSubline: 'Page Subline H4',
        textArticleSubline: 'Article Subline H5',
        textSectionSubline: 'Section Subline H6'
      };
    }
  }))
  .add('Page', () => ({
    components: {
      GpPageSubline,
    },
    template: '<gp-page-subline>{{text}}</gp-page-subline>',
    data: () => {
      return { text: 'Page Subline H4' };
    }
  }))
  .add('Article', () => ({
    components: {
      GpArticleSubline,
    },
    template: '<gp-article-subline>{{text}}</gp-article-subline>',
    data: () => {
      return { text: 'Article Subline H5' };
    }
  }))
  .add('Section', () => ({
    components: {
      GpSectionSubline,
    },
    template: '<gp-section-subline>{{text}}</gp-section-subline>',
    data: () => {
      return { text: 'Section Subline H6' };
    }
  }));
