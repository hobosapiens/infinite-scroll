<script>
import { getUsersList } from '@/api';
import { STARTING_PAGE } from '@/constants';

import UserCard from '@/components/UserCard.vue';
import SkeletonsList from '@/components/SkeletonsList.vue';
import NotFound from '@/components/NotFound.vue';
import IconLoader from '@/components/icons/IconLoader.vue';
import LoadMoreUsers from '@/components/LoadMoreUsers.vue';

/**
 * The component displays a list of users on the page and is responsible for loading them.
 */

export default {
  name: 'UserList',
  components: {
    UserCard,
    SkeletonsList,
    NotFound,
    IconLoader,
    LoadMoreUsers,
  },
  data() {
    return {
      usersList: [],
      page: STARTING_PAGE,
      isError: false,
    };
  },
  methods: {
    /**
     * @description Loads the initial list of users and updates `usersList` with the retrieved data.
     * @method
     * @async
     * @throws {Error} If the request to fetch users fails.
     * @returns {void}
     */
    async loadInitialUsers() {
      try {
        const initialUsers = await getUsersList();
        this.usersList = initialUsers;
      } catch (error) {
        this.isError = true;
        console.error(`Ошибка начальной загрузки пользователей: ${error.message}`);
      }
    },
    /**
     * @description Loads additional users and updates the `usersList` by appending the newly fetched data.
     * @method
     * @async
     * @throws {Error} If the request to fetch users fails.
     * @returns {void}
     */
    async loadMoreUsers(onLoadCallback) {
      try {
        this.page++;
        const newUsers = await getUsersList(this.page);
        this.usersList = [...this.usersList, ...newUsers];
      } catch (error) {
        console.error(`Ошибка загрузки пользователей: ${error.message}`);
      } finally {
        onLoadCallback();
      }
    },
  },
  mounted() {
    this.loadInitialUsers();
  },
};
</script>

<template>
  <NotFound v-if="isError" />
  <div v-else-if="usersList.length" class="users-list">
    <UserCard
      v-for="({ name, picture, email, login, phone }) in usersList"
      :key="login.username + phone"
      :email="email"
      :name="name"
      :picture="picture"
    />
    <LoadMoreUsers @on-load-more="loadMoreUsers">
      <template #skeletons>
        <SkeletonsList />
      </template>
    </LoadMoreUsers>
  </div>
  <IconLoader v-else class="loader" />
</template>

<style scoped>
.users-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  width: 100%;
  justify-content: center;
}

.loader {
  margin: auto;
}
</style>
