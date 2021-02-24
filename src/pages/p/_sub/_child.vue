<script>

import ContentExtend from '@/extends/Content';

export default {
  extends: ContentExtend,
  nuxtI18n: {
    paths: {
      de: '/p/:sub/:child',
      en: '/p/:sub/:child'
    }
  }
};
</script>
