<script>
import { LOAD_DELAY } from '@/constants';

/**
 * @description Component that loads more users when the observer element becomes visible.
 * @prop {Object} options - The IntersectionObserver options.
 * @prop {number} [options.threshold=0] - A number between 0 and 1 indicating the percentage of the target's visibility the observer's callback should trigger.
 * @prop {string} [options.rootMargin='0px'] - Margin around the root. Can have values similar to the CSS margin property.
 * @prop {Element|null} [options.root=null] - The element that is used as the viewport for checking visibility of the target.
 */

export default {
  name: 'LoadMoreUsers',
  props: {
    options: {
      type: Object,
      default: () => ({
        threshold: 1,
        rootMargin: '0px',
        root: null,
      }),
    },
  },
  data() {
    return {
      observer: null,
      isLoading: false,
      isProcessing: false,
      queue: [],
    };
  },
  /**
   * @description Emits the 'on-load-more' event.
   * This event notifies the parent component that more data should be loaded.
   * @emits on-load-more
   */
  emits: ['on-load-more'],
  methods: {
    /**
     * @description Adds a function to the queue and processes it with delay.
     * @param {Function} fn - The function to be queued and executed.
     * @method
     * @returns {void}
     */
    createQueueExecutor(fn) {
      this.queue.push(fn);

      if (!this.isProcessing) {
        this.processQueue();
      }
    },
    /**
     * @description Processes the queue with a delay between each function execution.
     * @method
     * @async
     * @returns {void}
     */
    async processQueue() {
      this.isProcessing = true;

      while (this.queue.length > 0) {
        const currentFunction = this.queue.shift();

        try {
          await currentFunction();
        } catch (error) {
          console.error('Ошибка выполнения функции:', error);
        }

        await new Promise((resolve) => setTimeout(resolve, LOAD_DELAY));
      }

      this.isProcessing = false;
    },
    /**
     * @description Handles the IntersectionObserver entry.
     * @method
     * @emits on-load-more
     * @returns {void}
     */
    handleEntry() {
      this.createQueueExecutor(() => {
        return new Promise((resolve) => {
          this.isLoading = true;

          this.$emit('on-load-more', () => {
            this.isLoading = false;
            resolve();
          });
        });
      });
    },
    /**
     * @description Initializes the IntersectionObserver to observe visibility changes of the root element.
     * When the observed element (`rootElement`) becomes visible, it triggers the `handleEntry` method.
     * @method
     * @returns {void}
     */
    startObserving() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry && entry.isIntersecting && this.$refs.rootElement) {
            this.handleEntry();
          }
        });
      }, this.options);

      if (this.$refs.rootElement) {
        this.observer.observe(this.$refs.rootElement);
      }
    },

    /**
     * @description Disconnects the IntersectionObserver and cleans up resources.
     * @method
     * @returns {void}
     */
    stopObserving() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    },
  },
  mounted() {
    this.startObserving();
  },
  beforeUnmount() {
    this.stopObserving();
  },
};
</script>

<template>
  <div ref="rootElement" class="load-more">
    <slot v-if="isLoading" name="skeletons" />
  </div>
</template>

<style scoped>
.load-more {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;
  margin-bottom: 10px;
}
</style>
