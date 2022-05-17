<template>
  <v-app id="inspire" v-resize="onResize">
    <Header :website="website" />

    <v-main>
      <router-view :website="website" />
      <Footer :website="website" />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  data() {
    return {
      website: {
        company: 'cvfree',
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
          titleSub: 'Tất cả việc làm',
          titleMain: 'Việc làm chọn lọc',
          textAll: 'Rất nhiều công việc công nghệ hàng đầu đang chờ đợi bạn.',
          linkTextAll: 'Duyệt qua tất cả các công việc'
        },
        carrer: {
          titleSub: 'Top nghành nghề',
          titleMain: 'Các công việc chất lượng',
          textAll: 'Công việc đang chờ bạn',
          linkTextAll: 'Tất cả nghành nghề',
        },
        pa: {
          system: {
            titleSub: 'Hệ thống tuyển dụng',
            titleMain: 'Bạn sẽ nhận được những việc làm phù hợp từ hệ thống AI tiêu chuẩn của cvfree',
            list: ['Tiếp cận với nhiều công ty lớn và chất lượng', 'Phân tích, đánh giá năng lực để tìm công việc phù hợp', 'Hệ thống chấm điểm CV và hệ thống cấp chứng chỉ uy tín cho ứng viên'],
            textBtn_1: 'Tạo CV online ấn tượng',
            textBtn_2: 'Sử dụng CV có sẵn',
            srcBanner: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/system-bg.jpg',
            desciption: 'Chúng tôi là sàn giao dịch việc làm, nhằm giúp ứng viên mau chóng tìm được việc làm phù hợp thông qua hệ thống tạo CV và ứng tuyển nhanh vào công việc.'
          },
          active: {
            titleSub: 'Quá trình làm việc',
            titleMain: 'Xem làm thế nào nó hoạt động',
            list: [
              {
                icon: 'mdi-account-tie',
                name: 'Đăng ký tài khoản',
                content: 'Tạo tài khoản hoặc đăng nhập vào hệ thống'
              },
              {
                icon: 'mdi-card-account-details-star',
                name: 'Tạo CV online',
                content: 'Cùng sử dụng hệ thống AI chấm điểm và hướng dẫn chất lượng'
              },
              {
                icon: 'mdi-briefcase-search',
                name: 'Tìm công việc của bạn',
                content: 'Tìm kiếm công việc phù hợp với khả năng của bản thân'
              },
              {
                icon: 'mdi-account-network',
                name: 'Xin việc / ứng tuyển trực tiếp',
                content: 'Ứng tuyển và chờ cuộc gọi từ nhà tuyển dụng'
              },
            ]
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
    Header,
    Footer
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
