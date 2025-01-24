<script>
import { CARDS_ON_PAGE } from '@/constants';
import SkeletonCard from '@/components/SkeletonCard.vue';

/**
 * The component displays list of skeleton cards.
 */

export default {
  name: 'SkeletonsList',
  components: {
    SkeletonCard,
  },
  data() {
    return {
      CARDS_ON_PAGE,
    };
  },
};
</script>

<template>
  <div class="skeletons-list">
    <SkeletonCard v-for="n in CARDS_ON_PAGE" :key="n" />
  </div>
</template>

<style scoped>
.skeletons-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  width: 100%;
  justify-content: center;
}
</style>
