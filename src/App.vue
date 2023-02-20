<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>Hello Vue 2.7 + Vite</h1>

    <!-- Ok -->
    <input v-model="checkboxState" type="checkbox" value="on" >

    <!-- error TS1117: An object literal cannot have multiple properties with the same name. -->
    <CustomCheckbox
      v-model="checkboxState"
      value="on"
    />
  </div>
</template>
<script setup lang="ts">
import { defineComponent, ref } from "vue";

const CustomCheckbox = defineComponent({
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    value: String,
    checked: Boolean,
  },
})

const checkboxState = ref(false)
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
