import Vue from 'vue'

// 如果 image error -> 使用預設圖片
Vue.directive('img-check', {
  inserted(el){
    el.addEventListener("error", () => {
      el.src = "https://fakeimg.pl/600x315"
    })
  }
})