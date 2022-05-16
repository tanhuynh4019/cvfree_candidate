<template>
  <div class="home-view">
    <div class="bg-banner"><BannerHome :website="website" /></div>
    <div class="bg-white"><IndexJobTop :website="website" /></div>
    <div><PaSystem :website="website" /></div>
    <div class="bg-white"><PaActive :website="website" /></div>
    <div class="bg-white"><IndexCareerCard :website="website" /></div>
  </div>
</template>

<script>
import BannerHome from '../components/banner/BannerHome.vue';
import IndexJobTop from '../components/job/IndexJobTop.vue';
import PaSystem from '../components/asbout-us/PaSystem.vue';
import PaActive from '../components/asbout-us/PaActive.vue';
import IndexCareerCard from '../components/careers/IndexCareerCard.vue'
export default {
  name: "Home",
  props: ['website'],
  components: {
    BannerHome,
    IndexJobTop,
    PaSystem,
    PaActive,
    IndexCareerCard
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
