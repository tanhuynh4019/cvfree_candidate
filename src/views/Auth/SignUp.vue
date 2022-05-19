<template>
  <div>
    <div :style="`background: ${website.color.tealMain.color}; height: 180px; width: 100%;`">
      <center>
        <div class="p-4">
          <router-link :to="{ path: '/' }"><img :src="website.srcLogo" /></router-link>
          <h4 class="text-white mt-5">Đăng ký tài khoản ứng viên</h4>
        </div>
      </center>
    </div>
    <v-container style="margin-top: -50px">
      <v-card style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;" :loading="isloading">
        <div class="p-5">
          <v-row>
            <v-col cols="12">
              <h3>Chào mừng bạn đến với {{ website.company }}</h3>
              <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
              <v-form class="mt-5" v-model="formCandidate.valid" ref="formCandidate">
                <v-text-field v-model="formCandidate.value.fullName" :rules="formCandidate.validate.fullName"
                  prepend-inner-icon="mdi-account" placeholder="Nhập họ và tên của bạn" outlined dense
                  :color="website.color.tealMain.color">
                </v-text-field>

                <v-text-field v-model="formCandidate.value.email" :rules="formCandidate.validate.email" type="email"
                  prepend-inner-icon="mdi-email-mark-as-unread" placeholder="Nhập email của bạn" outlined dense
                  :color="website.color.tealMain.color"></v-text-field>

                <v-text-field v-model="formCandidate.value.password" :rules="formCandidate.validate.password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                  prepend-inner-icon="mdi-shield-key" outline placeholder="Nhập mật khẩu" outlined dense
                  :color="website.color.tealMain.color" @click:append="showPassword = !showPassword">
                </v-text-field>

                <v-text-field v-model="formCandidate.value.confirmPassword"
                  :rules="formCandidate.validate.confirmPassword"
                  :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showConfirmPassword ? 'text' : 'password'" prepend-inner-icon="mdi-keyboard" outline
                  placeholder="Nhập lại mật khẩu" outlined dense :color="website.color.tealMain.color"
                  @click:append="showConfirmPassword = !showConfirmPassword">
                </v-text-field>
              </v-form>
              <p>Bằng việc đăng ký tài khoản, bạn đã đồng ý với <b :style="website.color.tealMain">Điều khoản dịch
                  vụ</b> và <b :style="website.color.tealMain">Chính sách bảo mật</b> của chúng tôi</p>
              <v-btn @click="signUp()" :disabled="!formCandidate.valid" depressed :dark="formCandidate.valid" class="w-100" :color="website.color.tealMain.color">Đăng ký
              </v-btn>
              <div class="text-center mt-5">hoặc đăng nhập bằng</div>
              <v-row class="mt-2">
                <v-col cols="6" sm="4">
                  <v-btn depressed class="w-100" dark color="#365899">
                    <v-icon left>
                      mdi-facebook
                    </v-icon>
                    Facebook
                  </v-btn>
                </v-col>
                <v-col cols="6" sm="4">
                  <v-btn depressed class="w-100" dark color="#ea4335">
                    <v-icon left>
                      mdi-google
                    </v-icon>
                    Google
                  </v-btn>
                </v-col>
                <v-col cols="6" sm="4">
                  <v-btn depressed class="w-100" dark color="#056497">
                    <v-icon left>
                      mdi-linkedin
                    </v-icon>
                    Linkedin
                  </v-btn>
                </v-col>
              </v-row>
              <v-row class="mt-4">
                <v-col cols="12">
                  Bạn đã có tài khoản? <router-link :to="{ name: 'Login' }" :style="website.color.tealMain">Đăng nhập!
                  </router-link>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import Auth from '../../apis/auth.api';

import RegexModule from '../../modules/Regex.module';
export default {
  name: 'SignUp',
  props: ['website', 'user'],
  data() {
    return {
      isloading: false,
      showPassword: false,
      showConfirmPassword: false,
      formCandidate: {
        valid: true,
        value: {
          email: '',
          password: '',
          confirmPassword: '',
          fullName: ''
        },
        validate: {
          fullName: [
            v => !!v || 'Họ và tên không được để trống!',
            v => (v && v.length >= 5 && v.length <= 250) || 'Họ và tên phải từ 5 đến 250 ký tự!',
          ],
          email: [
            v => !!v || 'Email không được để trống!',
            v => RegexModule.email_RFC_2822.test(v) || 'E-mail không hợp lệ!',
          ],
          password: [
            v => !!v || 'Mật khẩu không được để trống!',
            v => (v && v.length >= 5 && v.length <= 250) || 'Mật khẩu phải từ 5 đến 250 ký tự!',
          ],
          confirmPassword: [
            v => !!v || 'Xác nhận mật khẩu không được để trống!',
            v => (v && v.length >= 5 && v.length <= 250) || 'Xác nhận mật khẩu phải từ 5 đến 250 ký tự!',
            v => this.formCandidate.value.password == v || 'Xác nhận mật khẩu không trùng khớp!'
          ]
        }
      }
    }
  },
  async created() {
    this.$emit('showMenu', false)
    if (this.user) {
      this.$router.push({
        name: 'Error404'
      })
    }
  },
  methods: {
    async signUp() {
      let that = this;
      const isValid = that.$refs.formCandidate.validate();
      const formData = new FormData();
      if (isValid) {
        that.formCandidate.valid = false;
        that.isloading = true;
        formData.append('fullName', that.formCandidate.value.fullName);
        formData.append('email', that.formCandidate.value.email);
        formData.append('password', that.formCandidate.value.password);
        formData.append('confirmPassword', that.formCandidate.value.confirmPassword);

        const signUp = await Auth.signUp(formData, { key: 'auth' });
        if (!signUp.error) {
          localStorage.setItem("tkc", signUp.data.token);
          this.$emit('showSnackbar', { snackbar: true, text: signUp.message });
          that.isloading = false;
          window.location.href = '/';
        } else {
          this.$emit('showSnackbar', { snackbar: true, text: signUp.message });
          that.isloading = false;
          that.formCandidate.valid = true;
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 750px;
}
</style>