 <script>
 /**
 * The component displays placeholders while user data is loaded.
 */

export default {
  name: 'SkeletonCard',
};
</script>

<template>
  <div class="skeleton-card">
    <div class="picture skeleton"></div>
    <p class="name">
      <span class="text skeleton"></span>
      <span class="text skeleton"></span>
    </p>
    <span class="link skeleton"></span>
  </div>
</template>

<style scoped>
.skeleton-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 300px;
  padding: 35px;
  border-radius: 30px;
  border: var(--card-border);
  background: var(--card-gradient);

  &:hover {
    background: var(--card-gradient-hover);
  }
}

.picture {
  width: 110px;
  height: 110px;
  border-radius: 20px;
}

.name {
  display: flex;
  flex-direction: column;
  margin: 20px 0 auto;
}

.text {
  display: inline-block;
  width: 180px;
  height: 35px;
}

.link {
  display: inline-block;
  width: 120px;
  height: 13px;
}

.skeleton {
  background: var(--skeleton-gradient);
  animation: skeleton-loading 1.5s linear infinite;
}

@keyframes skeleton-loading {
  to {
    background-position: left;
  }
}
</style>
