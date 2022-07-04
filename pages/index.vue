<template>
  <div class="container">
    <div>
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      apiUrl: "https://event.smarter.com.tw/api/spa/bestseller/interview",
    };
  },
};
</script>

<style scoped>
</style>