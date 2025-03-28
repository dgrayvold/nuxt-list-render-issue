# Nuxt list render issue

When `await`ing the result of `useFetch` or `useAsyncData` in a component that is rendered as part of a list with `v-for` the order of the list will be unexpected

## Steps to reproduce

1. Install dependencies with `pnpm i`
2. Run the dev server
3. Navigate to the index page and click the `Scramble` button followed by the `Reset` button

With both actions the expected order (displayed at the top of the page) will not match the actual order of the rendered components. However, removing the `await` from the `useFetch` call (which can be done by swapping the commented lines in `Item.vue`) will cause the list to render in the expected order