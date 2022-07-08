import {defineComponent} from "vue";

export default defineComponent({
  methods: {
    getTranslatedText() {
      return this.$t("hello.vue");
    },
  },
});
