<script>
import Avatar from '@/assets/avatar.svg';

/**
 * The component displays user data.
 *
 * @prop {Object} name - The user's name, containing first and last name.
 * @prop {number} [name.first] - The first name of the user.
 * @prop {string} [name.last] - The last name of the user.
 *
 * @prop {Object} picture - The user's profile picture object.
 * @prop {string} [picture.large] - URL to the large picture.
 * @prop {string} [picture.medium] - URL to the medium picture.
 * @prop {string} [picture.thumbnail] - URL to the thumbnail picture.
 *
 * @prop {string} email - The user's email address.
 */

export default {
  name: 'UserCard',
  props: {
    name: {
      type: Object,
      default: () => ({
        first: '',
        last: '',
      }),
    },
    picture: {
      type: Object,
      default: () => ({
        large: '',
      }),
    },
    email: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      defaultAvatar: Avatar,
    };
  },
};
</script>

<template>
  <div class="user-card">
    <img
      :src="picture.large || defaultAvatar"
      :alt="`${name.first} ${name.last}`"
      class="picture"
      loading="lazy"
    >
    <p class="name">
      <span class="text">{{ name.first }}</span>
      <span class="text">{{ name.last }}</span>
    </p>
    <a :href="`mailto:${email}`" class="email">{{ email }}</a>
  </div>
</template>

<style scoped>
.user-card {
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
  font-size: 35px;
  font-weight: 700;
  line-height: 35px;
  text-align: left;
  color: var(--color-text);
}

.email {
  font-size: 13px;
  font-weight: 700;
  line-height: 13px;
  text-align: left;
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }
}
</style>
