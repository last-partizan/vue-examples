import {defineComponent} from "vue";

import App from "./App.vue";

export default defineComponent({
  // comment next line, and it works fine.
  components: {App},
  // or uncomment next line, and it works fine
  //props: {},
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
