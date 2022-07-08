# Vue 2.7 + Vite

## Broken type augmentation

https://v2.vuejs.org/v2/guide/typescript.html

```ts
// env.d.ts
declare module "vue/types/vue" {
  interface Vue {
    $t: (s: string) => string
  }
}
```

```ts
// broken-augment.ts
import {defineComponent} from "vue";

export default defineComponent({
  methods: {
    getTranslatedText() {
      return this.$t("hello.vue");
    },
  },
});
```


```
> pnpm vue-tsc
src/broken-augment.ts:6:14 - error TS2571: Object is of type 'unknown'.

6       return this.$t("hello.vue");
               ~~~~~~~


Found 1 error in src/broken-augment.ts:6
```
