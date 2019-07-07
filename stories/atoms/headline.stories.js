import { storiesOf } from '@storybook/vue';

import GpArticleHeadline from '@/components/atoms/headline/Article.vue';
import GpPageHeadline from '@/components/atoms/headline/Page.vue';
import GpSectionHeadline from '@/components/atoms/headline/Section.vue';

storiesOf('atoms/Headlines', module)
  .add('Overview', () => ({
    components: {
      GpArticleHeadline,
      GpPageHeadline,
      GpSectionHeadline
    },
    template: `<div>
      <gp-page-headline>{{textPageHeadline}}</gp-page-headline>
      <gp-article-headline>{{textArticleHeadline}}</gp-article-headline>
      <gp-section-headline>{{textSectionHeadline}}</gp-section-headline>
      </div>`,
    data: () => {
      return {
        textPageHeadline: 'Page Headline H1',
        textArticleHeadline: 'Article Headline H2',
        textSectionHeadline: 'Section Headline H3'
      };
    }
  }))
  .add('Page', () => ({
    components: {
      GpPageHeadline,
    },
    template: '<gp-page-headline>{{text}}</gp-page-headline>',
    data: () => {
      return { text: 'Page Headline H1' };
    }
  }))
  .add('Article', () => ({
    components: {
      GpArticleHeadline,
    },
    template: '<gp-article-headline>{{text}}</gp-article-headline>',
    data: () => {
      return { text: 'Article Headline H2' };
    }
  }))
  .add('Section', () => ({
    components: {
      GpSectionHeadline,
    },
    template: '<gp-section-headline>{{text}}</gp-section-headline>',
    data: () => {
      return { text: 'Section Headline H3' };
    }
  }));
