<template>
  <div>
    <div :style="`background: ${website.color.tealMain.color}; height: 180px; width: 100%;`">
      <center>
        <div class="p-4">
          <img :src="website.srcLogo" />
          <h4 class="text-white mt-5">Đăng ký tài khoản ứng viên</h4>
        </div>
      </center>
    </div>
    <v-container style="margin-top: -50px">
      <v-card style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;;">
        <div class="p-5">
          <v-row>
            <v-col cols="12">
              <h3>Chào mừng bạn đến với {{ website.company }}</h3>
              <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
              <v-form class="mt-5">
                <v-text-field prepend-inner-icon="mdi-account"
                  placeholder="Nhập họ và tên của bạn" outlined dense :color="website.color.tealMain.color"></v-text-field>
                <v-text-field type="email" prepend-inner-icon="mdi-email-mark-as-unread"
                  placeholder="Nhập email của bạn" outlined dense :color="website.color.tealMain.color"></v-text-field>
                <v-text-field :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'" prepend-inner-icon="mdi-shield-key" outline
                  placeholder="Nhập mật khẩu" outlined dense :color="website.color.tealMain.color"
                  @click:append="showPassword = !showPassword">
                </v-text-field>
                <v-text-field :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showConfirmPassword ? 'text' : 'password'" prepend-inner-icon="mdi-keyboard" outline
                  placeholder="Nhập lại mật khẩu" outlined dense :color="website.color.tealMain.color"
                  @click:append="showConfirmPassword = !showConfirmPassword">
                </v-text-field>
              </v-form>
              <p>Bằng việc đăng ký tài khoản, bạn đã đồng ý với <b :style="website.color.tealMain">Điều khoản dịch vụ</b> và <b :style="website.color.tealMain">Chính sách bảo mật</b> của chúng tôi</p>
              <v-btn depressed dark class="w-100" :color="website.color.tealMain.color">Đăng nhập</v-btn>
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
export default {
  name: 'SignUp',
  props: ['website'],
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false
    }
  },
  async created() {
    this.$emit('showMenu', false)
  }
}
</script>

<style scoped>
.container {
  max-width: 750px;
}
</style>