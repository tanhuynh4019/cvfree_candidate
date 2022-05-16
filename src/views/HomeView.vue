<template>
  <div class="home-view">
    <div class="bg-banner"><BannerHome :website="website" /></div>
    <div class="bg-white"><IndexJobTop :website="website" /></div>
    <div style="height: 900px"></div>
  </div>
</template>

<script>
import BannerHome from '../components/banner/BannerHome.vue'
import IndexJobTop from '../components/job/IndexJobTop.vue';
export default {
  name: "Home",
  props: ['website'],
  components: {
    BannerHome,
    IndexJobTop
  }
};
</script>

<style scoped>


.home-view{
  
}

.home-view .bg-banner {
  background-color: #004D40;
}



</style>
