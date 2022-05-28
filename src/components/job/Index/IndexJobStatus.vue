<template>
    <div v-resize="onResize">
        <div v-if="isLaptop || isIpad">
            <v-row v-if="isLoading">
                <v-col cols="6" md="4" v-for="n in 12" :key="n" class="mt-5">
                    <v-card>
                        <v-row>
                            <v-col cols="3">
                                <center>
                                    <v-skeleton-loader width="50" height="50" type="card"></v-skeleton-loader>
                                </center>
                            </v-col>
                            <v-col cols="9">
                                <v-skeleton-loader type="list-item-three-line" style="margin-top: -15px;">
                                </v-skeleton-loader>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row v-if="!isLoading">
                <v-col cols="6" md="4" v-for="job in jobs" :key="job._id" class="mt-5">
                    <v-card link :to="{ path: `/tim-viec-lam/review-viec-lam/${job.slug}` }"
                        @click.native="scrollToTop()">
                        <v-row>
                            <v-col cols="3">
                                <center>
                                    <v-card width="50" height="50">
                                        <img :src="job.idCompany.srcLogo" width="50" height="50" />
                                    </v-card>
                                </center>
                            </v-col>
                            <v-col cols="9">
                                <router-link :to="{ path: `/tim-viec-lam/review-viec-lam/${job.slug}` }"
                                    @click.native="scrollToTop()">

                                    <h6 class="font-weight-bold">{{ job.name }}</h6>
                                </router-link>
                            </v-col>
                            <v-col cols="12">
                                <div style="padding: 0px 20px;">
                                    <div>{{ job.idCompany.name }}</div>

                                    <div>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-icon :color="website.color.tealMain.color">mdi-cash</v-icon>
                                                <a @click="linkLogin()" v-if="!user">Đăng nhập để xem lương</a>
                                                <span v-if="user" style="font-size: 12px;">
                                                    <span>{{ job.salaryType ? "" : "Trống" }}</span>
                                                    <span v-if="job.salaryType == 'Trong khoảng'">
                                                        <span>
                                                            {{ job.salaryfrom ? job.salaryfrom : "..." }}-{{
                                                                    job.salaryTo ? job.salaryTo : "..."
                                                            }}
                                                            {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                        </span>
                                                    </span>
                                                    <span v-if="job.salaryType == 'Thỏa thuận'">
                                                        <span>Thỏa thuận</span>
                                                    </span>
                                                    <span v-if="job.salaryType == 'Từ'">
                                                        <span>
                                                            Từ {{ job.salaryfrom ? job.salaryfrom : "..." }}
                                                            {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                            trở lên
                                                        </span>
                                                    </span>
                                                    <span v-if="job.salaryType == 'Đến'">
                                                        <span>
                                                            Lên đến {{ job.salaryTo ? job.salaryTo : "..." }}
                                                            {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                        </span>
                                                    </span>
                                                </span>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-icon size="20" :color="website.color.tealMain.color">mdi-map-marker
                                                </v-icon>
                                                <span style="font-size: 12px;">
                                                    {{ job.workLocation }}
                                                </span>
                                            </v-col>
                                        </v-row>
                                    </div>

                                    <v-divider></v-divider>
                                    <b style="font-size: 13px !important">Còn 32 ngày để ứng tuyển</b>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div v-if="isMobile">
            <vueper-slides v-if="isLoading" :arrows="false" :bullets="false" class="no-shadow" :visible-slides="1" :slide-ratio="1 / 1.4"
                :dragging-distance="90">
                <vueper-slide v-for="n in 12" :key="n">
                    <template #content>
                        <v-card class="mt-5">
                            <v-row>
                                <v-col cols="3">
                                    <center>
                                        <v-skeleton-loader width="50" height="50" type="card">
                                        </v-skeleton-loader>
                                    </center>
                                </v-col>
                                <v-col cols="9">
                                    <v-skeleton-loader type="list-item-three-line" style="margin-top: -15px;">
                                    </v-skeleton-loader>
                                </v-col>
                                 <v-col cols="12">
                                    <v-skeleton-loader type="list-item-three-line" style="margin-top: -15px;">
                                    </v-skeleton-loader>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>
                </vueper-slide>
            </vueper-slides>
            <vueper-slides v-if="!isLoading" :arrows="false" :bullets="false" class="no-shadow" :visible-slides="1"
                :slide-ratio="1 / 1.4" :dragging-distance="90">
                <vueper-slide v-for="job in jobs" :key="job._id">
                    <template #content>
                        <v-card link class="mt-4" :to="{ path: `/tim-viec-lam/review-viec-lam/${job.slug}` }"
                            @click.native="scrollToTop()">
                            <v-row>
                                <v-col cols="3">
                                    <center>
                                        <v-card width="50" height="50">
                                            <img :src="job.idCompany.srcLogo" width="50" height="50" />
                                        </v-card>
                                    </center>
                                </v-col>
                                <v-col cols="9">
                                    <h6 class="font-weight-bold">{{ job.name }}</h6>
                                </v-col>
                                <v-col cols="12">
                                    <div style="padding: 0px 20px;">
                                        <div>{{ job.idCompany.name }}</div>
                                        <div>
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-icon :color="website.color.tealMain.color">mdi-cash</v-icon>
                                                    <a @click="linkLogin()" v-if="!user">Đăng nhập để xem lương</a>
                                                    <span v-if="user" style="font-size: 12px;">
                                                        <span>{{ job.salaryType ? "" : "Trống" }}</span>
                                                        <span v-if="job.salaryType == 'Trong khoảng'">
                                                            <span>
                                                                {{ job.salaryfrom ? job.salaryfrom : "..." }}-{{
                                                                        job.salaryTo ? job.salaryTo : "..."
                                                                }}
                                                                {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                            </span>
                                                        </span>
                                                        <span v-if="job.salaryType == 'Thỏa thuận'">
                                                            <span>Thỏa thuận</span>
                                                        </span>
                                                        <span v-if="job.salaryType == 'Từ'">
                                                            <span>
                                                                Từ {{ job.salaryfrom ? job.salaryfrom : "..." }}
                                                                {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                                trở lên
                                                            </span>
                                                        </span>
                                                        <span v-if="job.salaryType == 'Đến'">
                                                            <span>
                                                                Lên đến {{ job.salaryTo ? job.salaryTo : "..." }}
                                                                {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                            </span>
                                                        </span>
                                                    </span>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-icon size="20" :color="website.color.tealMain.color">
                                                        mdi-map-marker
                                                    </v-icon>
                                                    <span style="font-size: 12px;">
                                                        {{ job.workLocation }}
                                                    </span>
                                                </v-col>
                                            </v-row>
                                        </div>

                                        <v-divider></v-divider>
                                        <b style="font-size: 13px !important">Còn 32 ngày để ứng tuyển</b>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>

<script>
import JobApi from "../../../apis/job.api";

import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
    name: 'IndexJobStatus',
    props: ['website', 'user', 'status', 'limit'],
    components: { VueperSlides, VueperSlide },
    async created() {
        const job = await JobApi.getJob({ key: 'job', limit: this.limit, status: this.status });
        this.jobs = job.data;

        this.isLoading = false;
    },
    data() {
        return {
            jobs: [{}, {}, {}, {}, {}, {}, {}, {}],
            isMobile: false,
            isLaptop: false,
            isIpad: false,
            isLoading: true,
        }
    },
    mounted() {
        this.onResize()
    },
    methods: {
        onResize() {
            let that = this;
            that.windowSize = { x: window.innerWidth, y: window.innerHeight }

            that.resetOnsize();
            if (that.windowSize.x < 600) {
                that.isMobile = true;
            }
            else if (that.windowSize.x < 960) {
                that.isIpad = true;
            }
            else {
                that.isLaptop = true;
            }
        },
        resetOnsize() {
            let that = this;
            that.isMobile = false;
            that.isLaptop = false;
            that.isIpad = false;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
.v-card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.v-card:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px !important;
}

.vueperslide {
    white-space: normal;
    background-size: cover;
    flex-shrink: 0;
    display: block;
    width: 92%;
    padding: 0px 8px;
    position: relative;
}

a {
    text-decoration: none;
    color: #004D40 !important;
}
</style>