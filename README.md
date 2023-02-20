# Vue 2.7 + Vite

## Broken custom checkbox value

Refs:

- https://v3-migration.vuejs.org/breaking-changes/v-model.html


```
pnpm install
```

```
pnpm vue-tsc

src/App.vue:12:7 - error TS1117: An object literal cannot have multiple properties with the same name.

12       value="on"
         ~~~~~


Found 1 error in src/App.vue:12
```
