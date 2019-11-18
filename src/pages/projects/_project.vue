<script>
import LocalFileContent from '@/extends/LocalFileContent';

export default {
  extends: LocalFileContent,

  nuxtI18n: {
    paths: {
      en: '/projects/:project',
      de: '/projekte/:project'
    }
  }

};
</script>
