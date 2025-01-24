<script>
 /**
 * Placeholder component in case users fail to load.
 */

export default {
  name: 'NotFound',
};
</script>

<template>
  <div class="not-found">
    <p class="text">Не удалось загрузить пользователей ☹</p>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  padding: 35px;
  border-radius: 30px;
  border: var(--card-border);
  background: var(--card-gradient);
}

.text {
  font-size: 35px;
  font-weight: 700;
  line-height: 35px;
  color: var(--color-text);
}
</style>
