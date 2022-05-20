<template>
  <v-container v-resize="onResize">
    <v-row>
      <v-col cols="12" md="3">
        <MenuAccount :windowSize="windowSize" :changeScreen="isMobile" :status="statusPage" :website="website" />
      </v-col>
      <v-col cols="12" md="9" class="text-center">
        <div class="mt-2">
          <v-card style="box-shadow: none; border-radius: 0px 0px 0px 0px" :loading="loading">
            <h3 class="mt-3">Thông tin cá nhân</h3>
            <p>Thông tin về bạn và các lựa chọn ưu tiên của bạn trên các dịch vụ của {{ website.company }}</p>
            <v-row class="mt-3">
              <v-col cols="12" md="6">
                <v-card style="box-shadow: none; border-radius: 10px" class="border text-start">
                  <div class="p-4">
                    <h2>Thông tin tài khoản</h2>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Ảnh đại diện</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-subtitle>
                          <v-avatar size="32">
                            <v-img :src="user.avatar" alt="Ảnh cá nhân"></v-img>
                          </v-avatar>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Email đăng nhập</v-list-item-title>
                        <v-list-item-subtitle>
                          {{ user.email }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-title>Số điện thoại</v-list-item-title>
                        <v-list-item-subtitle>
                          {{ user.phone ? user.phone : 'Chưa cập nhật' }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title>Họ và tên</v-list-item-title>
                        <v-list-item-subtitle>
                          {{ user.fullName }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-title>Giới tính</v-list-item-title>
                        <v-list-item-subtitle>
                          Chưa cập nhật
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card style="box-shadow: none; border-radius: 10px" class="border text-start">
                  <div class="p-4">
                    <h2>Kiểm soát thông tin</h2>
                    <div>
                      <v-switch v-model="user.isSeachJob" :color="website.color.tealMain.color"
                        label="Trang thái tìm việc"></v-switch>
                      <p>Bật tính năng này, bạn sẽ nhận được nhiều công việc tốt nhất và phù hợp của {{ website.company
                      }}!
                      </p>
                    </div>
                    <div>
                      <v-switch v-model="user.isContactEmployer" :color="website.color.tealMain.color"
                        label="Trang thái tìm việc"></v-switch>
                      <p>Bật tính năng này, nhà tuyển dụng có thể xem được thông tin từ CV và trang cá nhân của bạn!</p>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card style="box-shadow: none; border-radius: 10px" class="border text-start">
                  <div class="p-4">
                    <h2>Thông tin bảo mật</h2>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Xác thực email</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-subtitle class="text-end">
                          <b :style="user.isEmail ? website.color.tealMain : website.color.redMain">{{ user.isEmail ?
                              'E-mail đã xác thực' : 'E-mail chưa được xác thực'
                          }}</b>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-subtitle>
                        <p>Thời gian: {{ formatDate(user.dateSendEmailOtp) }}</p>
                      </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Xác thực số điện thoại</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-subtitle class="text-end">
                          Bổ sung
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-subtitle>
                        <p>Thời gian: Chưa có số điện thoại</p>
                      </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Ngày tạo tài khoản</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-subtitle class="text-end">
                          {{ formatDate(user.dateCreate) }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-subtitle>
                        <p>Đăng nhập gần đây: {{ formatDate(user.dateLogin) }}</p>
                      </v-list-item-subtitle>
                    </v-list-item>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card style="box-shadow: none; border-radius: 10px" class="border text-start">
                  <div class="p-4">
                    <h2>Thông tin khác</h2>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Loại tài khoản</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-content>
                        <v-list-item-subtitle class="text-end">
                          <v-chip>{{ user.roleVip == 'free' ? 'Miễn phí' : 'Cao cấp' }}</v-chip>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-subtitle>
                        <p>Hết hạn: Vỉnh viễn</p>
                      </v-list-item-subtitle>
                    </v-list-item>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Format from '../../modules/Format.module';

import MenuAccount from '../../components/menu/MenuAccount.vue';
export default {
  name: 'MyAccount',
  props: ['website', 'user'],
  data() {
    return {
      statusPage: this.$route.query.status,
      isMobile: false,
      loading: true,
      windowSize: {
        x: 0,
        y: 0,
      },
    }
  },
  components: {
    MenuAccount
  },
  async created() {
    if (this.user) {
      this.loading = false;
    }
    else {
      this.$router.push({
        name: 'Error404'
      })
    }

    if (this.statusPage != 'taikhoan') {
      this.$router.push({
        name: 'Error404'
      })
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    formatDate(date) {
      return Format.formatDate(date, 'vi');
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      if (this.windowSize.x < 960) {
        this.isMobile = true
      }
      else {
        this.isMobile = false
      }
    },
  }
}
</script>

<style scoped>
h2 {
  font-weight: 400;
  font-size: 22px;
}
</style>