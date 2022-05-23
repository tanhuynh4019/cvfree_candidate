<template>
  <span>
    <span v-if="user">
      <v-btn @click="saveJob()" text dark><i class="mdi mdi-heart-multiple-outline"></i>Lưu</v-btn>
    </span>
    <span v-if="!user">
      <v-dialog v-model="dialogNote" persistent max-width="400">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on"><i class="mdi mdi-heart-multiple-outline"></i>Lưu</v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
            Thông báo đăng nhập?
          </v-card-title>
          <v-card-text>Để yêu thích một công việc để chóng mất bài sau này, vui lòng đăng nhập trước khi sử dụng thao
            tác <b>lưu tin</b>.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialogNote = false">
              Hủy
            </v-btn>
            <v-btn color="green darken-1" text @click="linkLogin()">
              Đăng nhập
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </span>
    <v-snackbar v-model="snackbar.snackbar" :timeout="timeout" top>
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar.snackbar = false">
          Đóng
        </v-btn>
      </template>
    </v-snackbar>
  </span>
</template>

<script>
import Favorite from '../../apis/favorite.api'
export default {
  name: 'SaveJob',
  props: ['user', 'slugJob'],
  data() {
    return {
      dialogNote: false,
      timeout: 3000,
      snackbar: {
        snackbar: false,
        text: '',
      },
    }
  },
  async created() {

  },
  methods: {
    linkLogin() {
      window.location.href = '/dang-nhap';
    },
    async saveJob() {
      const saveJob = await Favorite.saveJob({ key: 'favorite' }, { slug: this.slugJob })
      if (saveJob === 'Unauthorized') {
        this.snackbar.snackbar = true;
        this.snackbar.text = 'Vui lòng đăng nhập trước khi lưu việc làm!';
      }
      else {
        if (!saveJob.error) {
          this.snackbar.snackbar = true;
          this.snackbar.text = saveJob.message;
        } else {
          this.snackbar.snackbar = true;
          this.snackbar.text = saveJob.message;
        }
      }
    }
  }
}
</script>

<style>
</style>