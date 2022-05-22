<template>
  <span>
    <span v-if="user">
      <v-btn text dark><i class="mdi mdi-heart-multiple-outline"></i>Lưu</v-btn>
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
          <v-card-text>Để yêu thích một công việc để chóng mất bài sau này, vui lòng đăng nhập trước khi sử dụng thao tác <b>lưu tin</b>.</v-card-text>
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
  </span>
</template>

<script>
export default {
  name: 'SaveJob',
  props: ['user'],
  data() {
    return {
      dialogNote: false,
    }
  },
  async created() {

  },
  methods: {
    linkLogin()
    {
      window.location.href = '/dang-nhap';
    }
  }
}
</script>

<style>
</style>