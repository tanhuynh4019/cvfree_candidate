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
        srcLogoNoText: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/title-img.png',
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
        job: {
          titleSubGood: 'Việc làm được chọn lọc hàng đầu',
          titleMainGood: 'Việc làm tốt nhất',
          textAll: 'Rất nhiều công việc công nghệ hàng đầu đang chờ đợi bạn.',
          linkTextAll: 'Duyệt qua tất cả các công việc'
        },
        pa: {
          system: {
            titleSub: 'Hệ thống tuyển dụng',
            titleMain: 'Bạn sẽ nhận được những việc làm phù hợp từ hệ thống AI tiêu chuẩn của cvfree',
            list: ['Tiếp cận với nhiều công ty lớn và chất lượng', 'Phân tích, đánh giá năng lực để tìm công việc phù hợp', 'Hệ thống chấm điểm CV và hệ thống cấp chứng chỉ uy tín cho ứng viên'],
            textBtn_1: 'Tạo CV online ấn tượng',
            textBtn_2: 'Sử dụng CV có sẵn',
          }
        },
        color: {
          yellowSubColor: {
            color: '#FFF176'
          },
          tealMain: {
            color: '#004D40'
          },
          redMain: {
            color: '#B71C1C'
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
