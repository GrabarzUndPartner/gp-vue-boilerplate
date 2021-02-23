
<script>
export default {
  speedkitComponents: {
    StagePicture: () => import('@/components/organisms/StagePicture'),
    StageVideo: () => import('@/components/organisms/StageVideo'),
    ArticleText: () => import('@/components/organisms/ArticleText'),
    ArticleTextImage: () => import('@/components/organisms/ArticleTextImage'),
    SinglePicture: () => import('@/components/organisms/SinglePicture'),
    SingleVideo: () => import('@/components/organisms/SingleVideo')
  }
};
</script>
