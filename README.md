# Vue 2.7 + Vite

## Broken type inference example


```
pnpm install
```

```
pnpm vue-tsc --noEmit
src/broken-method-type.ts:15:23 - error TS2339: Property 'fetchData' does not
exist on type 'CreateComponentPublicInstance<{}, unknown, {}, {}, {},
ComponentOptionsMixin, ComponentOptionsMixin, {}, {}, {}, false,
OptionTypesType<{}, {}, {}, {}, {}, {}>, ... 5 more ..., {}>'.

15       fetchData: this.fetchData,
                         ~~~~~~~~~

                         src/broken-method-type.ts:19:10 - error TS2339:
                         Property 'fetchData' does not exist on type
                         'CreateComponentPublicInstance<{}, unknown, {}, {}, {},
                         ComponentOptionsMixin, ComponentOptionsMixin, {}, {},
                         {}, false, OptionTypesType<{}, {}, {}, {}, {}, {}>, ...
                         5 more ..., {}>'.

                         19     this.fetchData();
                                     ~~~~~~~~~


                                     Found 2 errors in the same file, starting
                                     at: src/broken-method-type.ts:15
```
