<script>
import ModuleLocales from '@/extends/ModuleLocales';

export default {
  extends: ModuleLocales,

  nuxtI18n: {
    paths: {
      en: '/projects/:project',
      de: '/projekte/:project'
    }
  }

};
</script>
