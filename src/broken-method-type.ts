import {defineComponent} from "vue";
// Replace vue import with this, and it woks fine.
//import {defineComponent} from "@vue/composition-api";

import App from "./App.vue";

export default defineComponent({
  components: {
    App,
  },
  data() {
    return {};
  },
  provide(): any {
    return {
      fetchData: this.fetchData,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      throw new Error("Not implemented.");
    },
  },
});
