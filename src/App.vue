<template>
  <v-app id="inspire">
    <Header v-if="showMenu" :website="website" :offset_top="offsetTop" :user="user" />

    <v-main class="scroll-y" v-scroll="onScroll">
      <router-view :website="website" :user="user" :offset_top="offsetTop" @showMenu="showMenu = $event" @showSnackbar="snackbar = $event" />
      <Footer v-if="showMenu" :website="website" />
      <DialogCheckEmail :website="website" :user="user" v-if="user && !user.isEmail" @showSnackbar="snackbar = $event"
        @showUser="user = $event" />
      <v-snackbar v-model="snackbar.snackbar" :timeout="timeout" top>
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar.snackbar = false">
            Đóng
          </v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
import Auth from "./apis/auth.api";

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import DialogCheckEmail from './components/candidate/DialogCheckEmail.vue'
export default {
  async created() {
    const secret = await Auth.secret({ key: 'auth' });
    this.user = secret.data;
  },
  data() {
    return {
      snackbar: {
        snackbar: false,
        text: '',
      },
      timeout: 2000,
      showMenu: true,
      user: null,
      offsetTop: 0,
      website: {
        company: 'TopCV',
        srcLogo: 'https://templates.hibootstrap.com/jecto/default/assets/img/logo-three.png',
        srcLogoNoText: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/title-img.png',
        banner: {
          setting: {
            bgCard: '#417575',
            bgBtn: '#004D40',
            colorMain: '#004D40',
            heightInputSearch: 60,
            heightInputCarrer: 48,
            heightInputProvince: 48

          },
          input: {
            labelSearch: 'Tên công việc, vị trí ứng tuyển mong muốn',
            labelCarrer: 'Ngành nghề',
            labelProvince: 'Địa điểm',
            iconSearch: 'mdi-magnify',
            iconCarrer: 'mdi-drag',
            iconProvince: 'mdi-map-marker-outline',
          },
          button: {
            textBtnSearch: 'Tìm việc'
          },
          textMain: 'Chúng tôi sẽ giúp bạn tìm',
          textSub: 'được công việc mong muốn của mình',
          countCandidate: 'Người dùng đã đăng ký',
          countEmployer: 'Nhà tuyển dụng toàn cầu',
          countJob: 'Công việc có sẵn',
          srcImageRight: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/banner-main.png'
        },
        reviewJob: {

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
            textBtn_1: 'Tạo CV online',
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
    Footer,
    DialogCheckEmail
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.offsetTop = top
    },
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
