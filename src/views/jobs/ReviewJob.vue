<template>
  <div v-resize="onResize">
    <LoadingDetailsJob v-if="isLoading" />
    <div v-if="!isLoading">
      <div
        class="review-job"
        :style="`background-image: url('${job.idCompany.srcBanner}')`"
      >
        <v-container class="text-white review-job-item">
          <v-row>
            <v-col cols="12" md="8">
              <div :class="!isMobile ? '' : 'text-center'">
                <div style="padding: 0px 0px">
                  <img height="120" :src="job.idCompany.srcLogo" />
                </div>
                <h5 class="font-weight-bold mt-3">
                  {{ job.name }} ({{ job.vacancies }})
                  <v-tooltip
                    bottom
                    :color="website.color.tealMain.color"
                    v-if="job.idCompany.isBrowser"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="#C5E1A5" dark v-bind="attrs" v-on="on" icon>
                        <v-icon>mdi-check-decagram</v-icon>
                      </v-btn>
                    </template>
                    <span>
                      <b>Nhà tuyển dụng đã được xác thực</b>
                      <div>
                        <i class="mdi mdi-check-circle"></i> Đã xác thực email
                        tên miền công ty
                      </div>
                      <div>
                        <i class="mdi mdi-check-circle"></i> Đã xác thực số điện
                        thoại
                      </div>
                      <div>
                        <i class="mdi mdi-check-circle"></i> Đã được duyệt giấy
                        phép kinh doanh
                      </div>
                    </span>
                  </v-tooltip>
                  <v-tooltip
                    bottom
                    :color="website.color.tealMain.color"
                    v-if="job.isBrowser"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="#C5E1A5" dark v-bind="attrs" v-on="on" icon>
                        <v-icon>mdi-checkbox-multiple-marked</v-icon>
                      </v-btn>
                    </template>
                    <span>
                      <b>Công việc này đã được duyệt qua</b>
                      <div>
                        <i class="mdi mdi-check-circle"></i> Thông tin chính xác
                      </div>
                      <div>
                        <i class="mdi mdi-check-circle"></i> Không có báo cáo từ
                        ứng viên
                      </div>
                      <div>
                        <i class="mdi mdi-check-circle"></i> Là tin tuyển dụng
                        đáng tin cậy
                      </div>
                    </span>
                  </v-tooltip>
                </h5>
                <b>
                  <i class="mdi mdi-cog"></i>
                  {{ job.mainJob }}
                </b>
                |
                <b>
                  <i class="mdi mdi-clock"></i>
                  Ngày đăng: {{ formatDate(job.dateCreate) }}
                </b>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <div
                  :class="!isMobile ? 'float-end' : 'text-center'"
                  style="margin-top: 10%"
                >
                  <v-btn
                    class="w-100"
                    :color="website.color.yellowSubColor.color"
                    depressed
                    x-large
                  >
                    Ứng tuyển ngay
                  </v-btn>
                  <div class="mt-5" style="margin-left: -25px">
                    <i>Hết hạn: {{ formatDate(job.deadline) }}</i>
                    <center>
                      <CreateFavoriteJob
                        :user="user"
                        :slug-job="job.slug"
                        :dark="true"
                      />
                      <ShareFavoriteJob
                        :user="user"
                        :website="website"
                        :slug-job="job.slug"
                      />
                      <CreateReportJobComponent
                        :user="user"
                        :website="website"
                        :job="job"
                      />
                    </center>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-footer
        app
        color="white"
        style="border: 1px solid #bdbdbd !important"
        height="120"
        inset
        v-if="offset_top > 200"
      >
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="mt-3" v-if="!isMobile">
                <h6 class="font-weight-bold">
                  {{ job.name }} ({{ job.vacancies }})
                </h6>
                <i>Hết hạn: {{ formatDate(job.deadline) }}</i>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div :class="!isMobile ? 'float-end' : ''">
                <v-btn
                  class="w-100"
                  :color="website.color.tealMain.color"
                  dark
                  depressed
                  x-large
                  >Ứng tuyển ngay
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
      <v-app-bar
        app
        color="white"
        height="55"
        :style="`${
          isMarginTop ? 'margin-top: 120px' : 'margin-top: 70px'
        }; box-shadow: none; border: 1px solid #BDBDBD !important`"
        v-if="isMarginTop ? offset_top > 520 : offset_top > 290"
      >
        <v-container>
          <v-tabs
            v-model="tabModel"
            :color="website.color.tealMain.color"
            show-arrows
          >
            <v-tab @click="changeLinkTab('')" @click.native="scrollToTop()">
              <v-icon left> mdi-briefcase-check </v-icon>
              Tin tuyển dụng
            </v-tab>
            <v-tab
              @click="changeLinkTab('company')"
              @click.native="scrollToTop()"
            >
              <v-icon left> mdi-office-building-outline </v-icon>
              Thông tin công ty
            </v-tab>
            <v-tab
              @click="changeLinkTab('related-jobs')"
              @click.native="scrollToTop()"
            >
              <v-icon left> mdi-briefcase-plus </v-icon>
              Việc làm liên quan
            </v-tab>
          </v-tabs>
        </v-container>
      </v-app-bar>
      <div class="mt-10">
        <v-container>
          <v-row>
            <v-col cols="12" md="8">
              <v-tabs
                v-model="tabModel"
                :color="website.color.tealMain.color"
                show-arrows
                v-if="offset_top < 290"
              >
                <v-tab @click="changeLinkTab('')">
                  <v-icon left> mdi-briefcase-check </v-icon>
                  Tin tuyển dụng
                </v-tab>
                <v-tab @click="changeLinkTab('company')">
                  <v-icon left> mdi-office-building-outline </v-icon>
                  Thông tin công ty
                </v-tab>
                <v-tab @click="changeLinkTab('related-jobs')">
                  <v-icon left> mdi-briefcase-plus </v-icon>
                  Việc làm liên quan
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tabModel">
                <v-tab-item>
                  <h4 class="mt-5">Địa chỉ</h4>
                  <v-alert border="right" color="blue-grey" dark>
                    <div>- Khu vực: {{ job.workLocation }}</div>
                    <div>- {{ job.jobLocation }}</div>
                  </v-alert>
                  <h4>Mô tả công việc</h4>
                  <p v-html="job.jobDescription"></p>
                  <h4>Yêu cầu ứng viên</h4>
                  <p v-html="job.candidateRequirements"></p>
                  <h4>Mô tả công việc</h4>
                  <p v-html="job.benefit"></p>
                  <h4>Cách thức ứng tuyển</h4>
                  <p>
                    Ứng viên nộp hồ sơ trực tuyến bằng cách bấm
                    <b :style="website.color.tealMain">Ứng tuyển ngay</b> dưới
                    đây.
                  </p>
                  <v-btn
                    :color="website.color.tealMain.color"
                    dark
                    depressed
                    x-large
                  >
                    Ứng tuyển ngay
                  </v-btn>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <h5 class="mt-5">{{ job.idCompany.name }}</h5>
                    <v-card
                      style="box-shadow: none; border-radius: 10px"
                      class="border text-start"
                    >
                      <div class="p-4">
                        <h6>Giới thiệu</h6>
                        <p v-html="job.idCompany.introduct"></p>
                        <h6>Thông tin</h6>
                        <v-list style="margin-left: -20px">
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title
                                ><b>Quy mô công ty</b>
                              </v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content>
                              <v-list-item-subtitle class="text-end">
                                <v-chip
                                  outlined
                                  :color="website.color.tealMain.color"
                                  label
                                >
                                  {{ job.idCompany.companySizeStart }}-{{
                                    job.idCompany.companySizeEnd
                                  }}
                                  nhân viên
                                </v-chip>
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>
                                <p>{{ job.idCompany.address }}</p>
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                        <v-btn
                          :color="website.color.tealMain.color"
                          depressed
                          dark
                          >Xem trang cá nhân công ty</v-btn
                        >
                      </div>
                    </v-card>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <p>
                        Fusce a quam. Phasellus nec sem in justo pellentesque
                        facilisis. Nam eget dui. Proin viverra, ligula sit amet
                        ultrices semper, ligula arcu tristique sapien, a
                        accumsan nisi mauris ac eros. In dui magna, posuere
                        eget, vestibulum et, tempor auctor, justo.
                      </p>

                      <p class="mb-0">
                        Cras sagittis. Phasellus nec sem in justo pellentesque
                        facilisis. Proin sapien ipsum, porta a, auctor quis,
                        euismod ut, mi. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem. Nam at tortor in
                        tellus interdum sagittis.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-col>
            <v-col cols="12" md="4">
              <v-card style="box-shadow: none" class="border">
                <div class="p-2">
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="../../images/Icon/salary.gif"> </v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>
                          <b>Mức lương</b>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          <div @click="linkLogin()" v-if="!user">
                            Đăng nhập để xem lương
                          </div>
                          <div v-if="user">
                            <span>{{ job.salaryType ? '' : 'Trống' }}</span>
                            <span v-if="job.salaryType == 'Trong khoảng'">
                              <span>
                                {{ job.salaryfrom ? job.salaryfrom : '...' }}-{{
                                  job.salaryTo ? job.salaryTo : '...'
                                }}
                                {{ job.currency == 'VNĐ' ? 'triệu' : '$' }}
                              </span>
                            </span>
                            <span v-if="job.salaryType == 'Thỏa thuận'">
                              <span>Thỏa thuận</span>
                            </span>
                            <span v-if="job.salaryType == 'Từ'">
                              <span>
                                Từ {{ job.salaryfrom ? job.salaryfrom : '...' }}
                                {{ job.currency == 'VNĐ' ? 'triệu' : '$' }}
                                trở lên
                              </span>
                            </span>
                            <span v-if="job.salaryType == 'Đến'">
                              <span>
                                Lên đến
                                {{ job.salaryTo ? job.salaryTo : '...' }}
                                {{ job.currency == 'VNĐ' ? 'triệu' : '$' }}
                              </span>
                            </span>
                          </div>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="../../images/Icon/numberOfRecruitments.gif">
                        </v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>
                          <b>Số lượng tuyển</b>
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          {{
                            job.numberOfRecruitments == 0
                              ? 'Không giới hạn'
                              : `Cần ${job.numberOfRecruitments} người`
                          }}</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="../../images/Icon/level.gif"> </v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>
                          <b>Cấp bậc</b>
                        </v-list-item-title>
                        <v-list-item-subtitle>{{
                          job.level
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="../../images/Icon/workform-format.gif">
                        </v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>
                          <b>Hình thức làm việc</b>
                        </v-list-item-title>
                        <v-list-item-subtitle>{{
                          job.workingForm
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="../../images/Icon/gender.png"> </v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>
                          <b>Giới tính</b>
                        </v-list-item-title>
                        <v-list-item-subtitle>{{
                          job.gender
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="../../images/Icon/exp.png"> </v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>
                          <b>Kinh nghiệm</b>
                        </v-list-item-title>
                        <v-list-item-subtitle>{{
                          job.exp
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </div>
              </v-card>

              <div class="mt-5">
                <div v-if="job.sideProfessions.length != 0">
                  <h4>Nghành nghề liên quan</h4>
                  <v-chip
                    dark
                    label
                    :color="website.color.tealMain.color"
                    :class="i == 0 ? 'mt-1' : 'ml-1 mt-1'"
                    v-for="(sideProfession, i) in job.sideProfessions"
                    :key="sideProfession"
                  >
                    {{ sideProfession }}</v-chip
                  >
                </div>
              </div>

              <div class="mt-5">
                <div v-if="job.skills.length != 0 && job.skills[0] != ''">
                  <h4>Kỹ năng</h4>
                  <v-chip
                    dark
                    label
                    :color="website.color.tealMain.color"
                    :class="i == 0 ? '' : 'ml-1'"
                    v-for="(skill, i) in job.skills"
                    :key="skill"
                    >{{ skill }}</v-chip
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import Format from '../../modules/Format.module'

import LoadingDetailsJob from '../../components/loading/LoadingDetailsJob.vue'
import CreateFavoriteJob from '../../components/candidate/CreateFavoriteJob.vue'
import ShareFavoriteJob from '../../components/candidate/ShareFavoriteJob.vue'

import CreateReportJobComponent from '../../components/candidate/CreateRepostJob.vue'

import Job from '../../apis/job.api'
export default {
  name: 'ReviewJob',
  props: ['website', 'user', 'offset_top'],
  data() {
    return {
      job: {},
      hash: this.$route.hash,
      tabModel: 0,
      isMobile: false,
      isMarginTop: false,
      isLoading: true,
      windowSize: {
        x: 0,
        y: 0,
      },
    }
  },
  async created() {
    const job = await Job.getByIdJob({ key: 'job' }, this.$route.params.slug)
    this.job = job.data
    this.loadTab(this.hash)
    this.isLoading = false
  },
  mounted() {
    this.onResize()
  },
  components: {
    LoadingDetailsJob,
    CreateFavoriteJob,
    ShareFavoriteJob,
    CreateReportJobComponent,
  },
  methods: {
    loadTab(hash) {
      switch (hash) {
        case '#company':
          this.tabModel = 1
          break
        case '#related-jobs':
          this.tabModel = 2
          break
        default:
          this.tabModel = 0
          break
      }
    },
    changeLinkTab(hash) {
      this.$router.push({
        path: this.$route.path,
        hash: hash,
      })
    },
    formatDate(date) {
      return Format.formatDate(date, 'vi')
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      if (this.windowSize.x < 580) {
        this.isMarginTop = true
        this.isMobile = true
      } else if (this.windowSize.x < 960) {
        this.isMarginTop = false
        this.isMobile = true
      } else {
        this.isMarginTop = false
        this.isMobile = false
      }
    },
    scrollToTop() {
      window.scrollTo(200, 320)
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 1250px;
}

h2 {
  font-size: 40px;
}

.review-job {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.review-job:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.7;
}

.review-job .review-job-item {
  position: relative;
}

.v-tab {
  padding: 0 33px 1px 0px;
}
</style>
