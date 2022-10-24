
<script>
import speedkitHydrate from 'nuxt-speedkit/hydrate';

export default {
  components: {
    StagePicture: speedkitHydrate(() => import('@/components/organisms/StagePicture')),
    StageVideo: speedkitHydrate(() => import('@/components/organisms/StageVideo')),
    FullText: speedkitHydrate(() => import('@/components/organisms/FullText')),
    TextImage: speedkitHydrate(() => import('@/components/organisms/TextImage')),
    SinglePicture: speedkitHydrate(() => import('@/components/organisms/SinglePicture')),
    SingleVideo: speedkitHydrate(() => import('@/components/organisms/SingleVideo'))
  }
};
</script>
