<template>
  <div class="group flex flex-col rounded shadow-md overflow-hidden">
    <!-- desktop picture -->
    <div class="hidden w-full h-[170px] overflow-hidden sm:block">
      <img 
        v-img-check 
        :src="previewPictureSrc" :alt="previewPictureAlt" 
        class="object-cover object-center w-full h-full transform duration-300 group-hover:scale-[1.1]">
    </div>
    <!-- mobile picture -->
    <div class="h-[170px] overflow-hidden sm:hidden">
      <img v-img-check :src="mobilePic" :alt="previewPictureAlt" class="object-cover object-center w-full h-full">
    </div>
    <!-- content -->
    <div class="flex flex-col pb-[18px] px-[18px] text-[#9BA0A5]">
      <!-- title -->
      <div class="pt-[15px] pb-[15px]">
        <h2 class="text-[20px] text-center tracking-[1px]">{{ title }}</h2>
      </div>
      <!-- context -->
      <div class="relative after:content-['wtf']">
        <p class="h-[70px] text-[16px] text-center tracking-wider overflow-hidden">{{ previewContext }}</p>
        <!-- 漸層 -->
        <div class="absolute left-0 bottom-0 w-full h-[26px] bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <!-- btn -->
      <div class="mt-[30px] flex justify-center">
        <nuxt-link :to="`/product/${id}`" class="flex justify-center items-center w-[108px] h-[40px] rounded bg-[#504E4D]">
          <span class="text-[14px] text-white">立即前往</span>
          <!-- arrow -->
          <div class="
            border-t-[0px] border-r-[1px] border-b-[1px] border-white ml-[2px] p-[3px] transform -rotate-45 duration-300
            group-hover:translate-x-[4px]     
          "></div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    previewPictureSrc: {
      type: String,
      default: ""
    },
    previewContext: {
      type: String,
      default: ""
    },
    previewPictureAlt: {
      type: String,
      default: ""
    },
    previewPictureMobile: {
      type: String,
      default: ""
    },
  },
  computed: {
    mobilePic() {
      return this.previewPictureMobile ? this.previewPictureMobile : this.previewPictureSrc ? this.previewPictureSrc : ""
    },
  }
};
</script>