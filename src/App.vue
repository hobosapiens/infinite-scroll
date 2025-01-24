<script>
import UsersList from '@/components/UsersList.vue';

export default {
  name: 'App',
  components: {
    UsersList,
  },
};
</script>

<template>
  <main class="main">
    <UsersList />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  width: 100%;
}
</style>
