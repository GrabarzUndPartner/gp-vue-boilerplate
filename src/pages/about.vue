<script>
import LocalFileContent from '@/extends/LocalFileContent';

export default {
  name: 'About',
  extends: LocalFileContent,
  nuxtI18n: {
    paths: {
      en: '/about',
      de: '/ueber-uns'
    }
  }
};
</script>
