# Vue 2.7 + Vite

## Incompatible type for vue-router


```
pnpm install
```

```
pnpm vue-tsc

src/routes.ts:9:5 - error TS2322: Type 'DefineComponent<{}, unknown, Data, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, Readonly<ExtractPropTypes<{}>>, {}>' is not assignable to type 'Component | undefined'.
  Type 'ComponentPublicInstanceConstructor<Vue3Instance<Data, Readonly<ExtractPropTypes<{}>>, Readonly<ExtractPropTypes<{}>>, {}, {}, true, ComponentOptionsBase<any, any, ... 7 more ..., any>> & ... 5 more ... & Readonly<...>, ... 4 more ..., MethodOptions> & ComponentOptionsBase<...> & { ...; }' is missing the following properties from type 'VueConstructor<Vue<Record<string, any>, Record<string, any>, never, never, never, never, (event: string, ...args: any[]) => Vue<Record<string, any>, Record<string, any>, ... 4 more ..., ...>>>': extend, nextTick, set, delete, and 10 more.

9     component: App,
      ~~~~~~~~~


Found 1 error in src/routes.ts:9
```
