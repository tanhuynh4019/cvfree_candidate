<template>
  <v-app id="inspire" v-resize="onResize">
    <Header :website="website" />

    <v-main class="grey lighten-2">
      <router-view :website="website" />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
export default {
  data() {
    return {
      website: {
        srcLogo: 'https://templates.hibootstrap.com/jecto/default/assets/img/logo-three.png',
        banner: {
          textMain: 'Chúng tôi sẽ giúp bạn tìm 1',
          textSub: 'được công việc mong muốn của mình',
          textSub_v1: 'Người dùng đã đăng ký',
          textSub_v2: 'Nhà tuyển dụng toàn cầu',
          textSub_v3: 'Công việc có sẵn',
          iconInputSeach_v1: 'mdi-magnify',
          iconInputSeach_v2: 'mdi-drag',
          iconInputSeach_v3: 'mdi-map-marker-outline',
          textBtnSeach: 'Tìm việc',
          srcImageRight: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/banner-main.png'
        },
        color: {
          yellowSubColor: {
            color: '#FFF176'
          },
          tealMain: {
            color: '#004D40'
          }
        }
      },
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
