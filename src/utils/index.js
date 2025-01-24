/**
 * @description Creates a debounced function that delays invoking the provided function until after the specified delay has elapsed
 * since the last time the debounced function was called.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {Function} - A new debounced function.
 */
export function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  };
};
