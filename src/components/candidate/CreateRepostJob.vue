<template>
  <span>
    <v-btn v-if="!user" @click="clickLogin()" text dark
      ><i class="mdi mdi-alert-decagram"></i>Báo cáo</v-btn
    >
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-if="user" v-bind="attrs" v-on="on" text dark
          ><i class="mdi mdi-alert-decagram"></i>Báo cáo</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Báo cáo công việc</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="formReport.valid" ref="formReport">
              <v-text-field
                :rules="formReport.validate.name"
                v-model="formReport.value.name"
                prepend-inner-icon="mdi-note-edit"
                placeholder="Nhập lý do báo cáo"
                outlined
                dense
                :color="website.color.tealMain.color"
              ></v-text-field>
              <v-textarea
                :rules="formReport.validate.content"
                v-model="formReport.value.content"
                prepend-inner-icon="mdi-file-document-edit"
                placeholder="Nhập nội dung"
                outlined
                dense
                :color="website.color.tealMain.color"
              ></v-textarea>
              <v-btn
                @click="createReport()"
                depressed
                :color="website.color.tealMain.color"
                dark
                >Lưu thay đổi
              </v-btn>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar.snackbar" :timeout="timeout" top>
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar.snackbar = false"
        >
          Đóng
        </v-btn>
      </template>
    </v-snackbar>
  </span>
</template>

<script>
import Report from '../../apis/report.api'

export default {
  name: 'CreateReportJob',
  props: ['user', 'website', 'job'],
  data() {
    return {
      dialog: false,
      isMobile: false,
      snackbar: {
        snackbar: false,
        text: '',
      },
      timeout: 2000,
      formReport: {
        value: {
          name: '',
          content: '',
        },
        valid: true,
        validate: {
          name: [
            (v) => !!v || 'Lý do báo cáo không được để trống!',
            (v) =>
              (v.length >= 5 && v.length <= 250) ||
              'Lý do báo cáo phải từ 5 đến 250 ký tự!',
          ],
          content: [
            (v) => !!v || 'Nội dung báo cáo không được để trống!',
            (v) => v.length >= 5 || 'Nội dung báo cáo phải từ 5 ký tự!',
          ],
        },
      },
    }
  },
  methods: {
    clickLogin() {
      window.location.href = '/dang-nhap'
    },

    async createReport() {
      let that = this
      const isValid = that.$refs.formReport.validate()

      const formData = new FormData()
      if (isValid) {
        that.formReport.valid = false
        that.loading = true
        formData.append('name', that.formReport.value.name)
        formData.append('content', that.formReport.value.content)

        const createReport = await Report.createReport(
          formData,
          {
            key: 'report',
            status: 'job',
          },
          { slug: that.job.slug }
        )

        if (!createReport.error) {
          that.snackbar.snackbar = true
          that.snackbar.text = createReport.message
        } else {
          that.snackbar.snackbar = true
          that.snackbar.text = createReport.message
          that.formReport.valid = true
          that.dialog = false
        }
      }
    },
  },
}
</script>

<style></style>
