<template>
  <div class="m-auto px-[30px] max-w-[1089px]">
    <section v-if="bestsellerList" class="py-[60px]">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px] lg:grid-cols-3">
        <Card v-for="bestseller in bestsellerList" :key="bestseller.id" :id="bestseller.id" :title="bestseller.title"
          :previewPictureSrc="bestseller.previewPictureSrc" :previewContext="bestseller.previewContext"
          :previewPictureAlt="bestseller.previewPictureAlt" :previewPictureMobile="bestseller.previewPictureMobile">
        </Card>
      </div>
    </section>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";
import axios from "axios";
export default {
  components: {
    Card,
  },
  async asyncData() {
    try {
      const { data } = await axios.get(`https://event.smarter.com.tw/api/spa/bestseller/interview`)

      if (data.status === "success" && Array.isArray(data.data)) return { bestsellerList: data.data };
      else return { bestsellerList: undefined };
    } catch (e) {
      return { bestsellerList: undefined };
    }

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