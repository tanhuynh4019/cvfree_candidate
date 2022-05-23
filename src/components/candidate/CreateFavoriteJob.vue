<template>
  <span>
    <span v-if="user">
      <v-btn @click="createFavoriteJob()" v-if="!isCheck" :loading="isLoading" :dark="dark" text><i
          class="mdi mdi-heart-multiple-outline"></i>Lưu
      </v-btn>
      <v-btn @click="deleteFavoriteJob()" v-if="isCheck" :loading="isLoading" :dark="dark" text><i
          class="mdi mdi-heart-multiple"></i>Đã lưu</v-btn>
    </span>
    <span v-if="!user">
      <v-dialog v-model="dialogNote" persistent max-width="400">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text :dark="dark" v-bind="attrs" v-on="on"><i class="mdi mdi-heart-multiple-outline"></i>Lưu</v-btn>
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
  name: 'CreateFavoriteJob',
  props: ['user', 'slugJob', 'dark'],
  data() {
    return {
      dialogNote: false,
      timeout: 3000,
      snackbar: {
        snackbar: false,
        text: '',
      },
      isCheck: false,
      isLoading: false,
    }
  },
  async created() {
    const checkFavoriteJob = await Favorite.existFavoriteJob({ key: 'favorite' }, { slug: this.slugJob })
    if (!checkFavoriteJob.error) {
      this.isCheck = true;
    }
    else {
      this.isCheck = false;
    }
  },
  methods: {
    linkLogin() {
      window.location.href = '/dang-nhap';
    },
    async createFavoriteJob() {
      let that = this;
      that.isLoading = true;
      const createFavoriteJob = await Favorite.createFavoriteJob({ key: 'favorite' }, { slug: this.slugJob })
      if (createFavoriteJob === 'Unauthorized') {
        that.snackbar.snackbar = true;
        that.snackbar.text = 'Vui lòng đăng nhập trước khi lưu việc làm!';
      }
      else {
        if (!createFavoriteJob.error) {
          that.snackbar.snackbar = true;
          that.snackbar.text = createFavoriteJob.message;
          that.isCheck = true;
          that.isLoading = false;
        } else {
          that.snackbar.snackbar = true;
          that.snackbar.text = createFavoriteJob.message;
          that.isLoading = false;
        }
      }
    },
    async deleteFavoriteJob() {
      let that = this;
      that.isLoading = true;
      const deleteFavoriteJob = await Favorite.deleteFavoriteJob({ key: 'favorite' }, { slug: this.slugJob })
      if (deleteFavoriteJob === 'Unauthorized') {
        that.snackbar.snackbar = true;
        that.snackbar.text = 'Vui lòng đăng nhập trước khi hủy việc làm!';
      }
      else {
        if (!deleteFavoriteJob.error) {
          that.snackbar.snackbar = true;
          that.snackbar.text = deleteFavoriteJob.message;
          that.isCheck = false;
          that.isLoading = false;
        } else {
          that.snackbar.snackbar = true;
          that.snackbar.text = deleteFavoriteJob.message;
          that.isLoading = false;
        }
      }
    }
  }
}
</script>

<style>
</style>