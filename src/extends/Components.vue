
<script>
import speedkitHydrate from 'nuxt-speedkit/hydrate';

export default {
  components: {
    StagePicture: speedkitHydrate(() => import('@/components/organisms/StagePicture')),
    StageVideo: speedkitHydrate(() => import('@/components/organisms/StageVideo')),
    ArticleText: speedkitHydrate(() => import('@/components/organisms/ArticleText')),
    ArticleTextImage: speedkitHydrate(() => import('@/components/organisms/ArticleTextImage')),
    SinglePicture: speedkitHydrate(() => import('@/components/organisms/SinglePicture')),
    SingleVideo: speedkitHydrate(() => import('@/components/organisms/SingleVideo'))
  }
};
</script>
