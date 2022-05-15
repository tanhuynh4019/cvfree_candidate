<template>
  <div class="home-view">
    <div class="bg-banner"><BannerHome :website="website" /></div>
  </div>
</template>

<script>
import BannerHome from '../components/banner/BannerHome.vue'
export default {
  name: "Home",
  props: ['website'],
  components: {
    BannerHome
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
