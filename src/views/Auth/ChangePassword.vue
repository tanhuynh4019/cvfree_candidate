<template>
  <v-container v-resize="onResize">
    <v-row>
      <v-col cols="12" md="3">
        <MenuAccount
          :windowSize="windowSize"
          :changeScreen="isMobile"
          :status="statusPage"
          :website="website"
        />
      </v-col>
      <v-col cols="12" md="9" class="text-center">
        <v-card
          style="box-shadow: none; border-radius: 0px 0px 0px 0px"
          :loading="loading"
        >
          <div class="mt-2">
            <h3 class="mt-1">Đổi mật khẩu</h3>
            <p>
              Nếu bạn cảm thấy tài khoản của mình không đủ an toàn hoặc mật khẩu
              rất khó nhớ, hãy đổi mật khẩu ngay
            </p>
            <v-row class="mt-3">
              <v-col cols="12">
                <v-card
                  style="box-shadow: none; border-radius: 10px"
                  class="border text-start"
                >
                  <div class="p-4">
                    <ul>
                      <li>
                        Bạn không thể đặt mật khẩu đã từng sử dụng cho tài khoản
                        <b>{{ user.email }}</b
                        >.
                      </li>
                      <li>
                        Mật khẩu phải đảm bảo trên 5 ký tự, ít nhất 1 ký tự đặc
                        biệt, 1 ký tự viết hoa và có số.
                      </li>
                      <li>
                        Nếu thay đổi mật khẩu, bạn sẽ bị đăng xuất khỏi các
                        thiết bị bạn sử dụng.
                      </li>
                      <li>
                        Tất cả thông tin thời gian đổi sẽ được hệ thống lưu lại.
                      </li>
                    </ul>
                    <v-form
                      class="mt-5"
                      v-model="formAuth.valid"
                      ref="formAdmin"
                    >
                      <v-text-field
                        prepend-inner-icon="mdi-email-mark-as-unread"
                        :placeholder="`email: ${user.email}`"
                        outlined
                        dense
                        disabled
                        :color="website.color.tealMain.color"
                      ></v-text-field>

                      <v-text-field
                        :rules="formAuth.validate.passwordOld"
                        v-model="formAuth.value.passwordOld"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        prepend-inner-icon="mdi-account-key"
                        outline
                        placeholder="Nhập mật khẩu cũ"
                        outlined
                        dense
                        :color="website.color.tealMain.color"
                        @click:append="showPassword = !showPassword"
                      >
                      </v-text-field>

                      <v-text-field
                        :rules="formAuth.validate.passwordNew"
                        v-model="formAuth.value.passwordNew"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        prepend-inner-icon="mdi-shield-key"
                        outline
                        placeholder="Nhập mật khẩu mới"
                        outlined
                        dense
                        :color="website.color.tealMain.color"
                        @click:append="showPassword = !showPassword"
                      >
                      </v-text-field>

                      <v-text-field
                        :rules="formAuth.validate.comfirmPasswordNew"
                        v-model="formAuth.value.comfirmPasswordNew"
                        :append-icon="
                          showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="showConfirmPassword ? 'text' : 'password'"
                        prepend-inner-icon="mdi-keyboard"
                        outline
                        placeholder="Nhập lại mật khẩu mới"
                        outlined
                        dense
                        :color="website.color.tealMain.color"
                        @click:append="
                          showConfirmPassword = !showConfirmPassword
                        "
                      >
                      </v-text-field>

                      <v-btn
                        depressed
                        :color="website.color.tealMain.color"
                        dark
                        >Lưu thay đổi
                      </v-btn>
                    </v-form>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Format from "../../modules/Format.module";
import MenuAccount from "../../components/menu/MenuAccount.vue";
export default {
  name: "ChangePassword",
  props: ["website", "user"],
  data() {
    return {
      statusPage: this.$route.query.status,
      isMobile: false,
      loading: true,
      windowSize: {
        x: 0,
        y: 0,
      },
      formAuth: {
        value: {
          passwordOld: "",
          passwordNew: "",
          confirmPasswordNew: "",
        },
        valid: true,
        validate: {
          passwordOld: [
            (v) => !!v || "Mật khẩu cũ không được để trống!",
            (v) =>
              (v.length >= 5 && v.length <= 250) ||
              "Mật khẩu phải từ 5 đến 250 ký !",
          ],
          passwordNew: [
            (v) => !!v || "Mật khẩu mới không được để trống!",
            (v) =>
              (v.length >= 5 && v.length <= 250) ||
              "Mật khẩu mới phải từ 5 đến 250 ký !",
          ],
          comfirmPasswordNew: [
            (v) => !!v || "Xác nhận mật khẩu không được để trống!",
            (v) =>
              this.formAuth.value.passwordNew == v ||
              "Xác nhận mật khẩu không trùng khớp!",
            (v) =>
              (v.length >= 5 && v.length <= 250) ||
              "Xác nhận mật khẩu mới phải từ 5 đến 250 ký tự!",
          ],
        },
      },
    };
  },
  components: {
    MenuAccount,
  },
  async created() {
    if (this.user) {
      this.loading = false;
    } else {
      this.$router.push({
        name: "Error404",
      });
    }
    if (this.statusPage != "doi-mat-khau") {
      this.$router.push({
        name: "Error404",
      });
    }
  },
  mounted() {
    this.onResize();
  },
  methods: {
    formatDate(date) {
      return Format.formatDate(date, "vi");
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize.x < 960) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 400;
  font-size: 22px;
}
</style>