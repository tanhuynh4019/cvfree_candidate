<template>
    <div class="job" v-resize="onResize">
        <v-app-bar app color="white" height="70" style="margin-top: 70px; box-shadow: none;" v-if="!isMobile">
            <v-container>
                <v-row no-gutters>
                    <v-col cols="12" sm="8">
                        <v-text-field @input="changeLink()" @click.native="scrollToTop()" v-model="searchQueryJobs"
                            clearable flat solo class="border" hide-details
                            :prepend-inner-icon="website.banner.iconInputSeach_v1"
                            label="Tên công việc, vị trí ứng tuyển mong muốn"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-select @click.native="scrollToTop()" @change="changeLinkProvince()"
                            :color="website.color.tealMain.color" v-model="searchQueryProvince" class="ml-1 border" flat
                            solo hide-details :prepend-inner-icon="website.banner.iconInputSeach_v2" label="Tỉnh thành"
                            :items="provinces">
                        </v-select>
                    </v-col>
                    <v-col cols="12" sm="1">
                        <center>
                            <v-btn class="ml-1 w-100" height="49" :color="website.color.tealMain.color" dark depressed>
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </center>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-app-bar app color="white" height="45" style="margin-top: 140px; box-shadow: none;" v-if="!isMobile">
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-text-field @click.native="scrollToTop()" style="border-radius: 0px 0px 0px 0px"
                            placeholder="Tìm kiếm nghành nghề" v-model="searchQueryCarrers" cache-items class="border"
                            flat hide-no-data hide-details label="Tìm kiếm nghành nghề" solo>
                        </v-text-field>
                    </v-col>
                    <v-col cols="9">
                        <v-card style="box-shadow: none; border-radius: 0px 0px 0px 0px" class="border" height="50">
                            <div class="p-1">
                                <v-menu transition="slide-y-transition" bottom offset-y open-on-hover>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn class="ml-1" text v-bind="attrs" v-on="on" height="40">
                                            {{ $route.query.rank ? $route.query.rank : 'Tất cả cấp bậc' }} <v-icon
                                                size="20">mdi-menu-down</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list dense>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkRank()"
                                            :style="`background-color: ${!$route.query.rank ? '#e0e0e0' : ''}`" link>
                                            <v-list-item-title>Tất cả cấp bậc</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkRank(rank)"
                                            :style="`background-color: ${$route.query.rank == rank ? '#e0e0e0' : ''}`"
                                            v-for="rank in ranks" :key="rank" link>
                                            <v-list-item-title>{{ rank }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                                <v-menu transition="slide-y-transition" bottom offset-y open-on-hover>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn class="ml-1" text v-bind="attrs" v-on="on" height="40">
                                            {{ $route.query.exp ? $route.query.exp : 'Tất cả kinh nghiệm' }} <v-icon
                                                size="20">mdi-menu-down</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list dense>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkExp()"
                                            :style="`background-color: ${!$route.query.exp ? '#e0e0e0' : ''}`" link>
                                            <v-list-item-title>Tất cả kinh nghiệm</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkExp(exp)"
                                            :style="`background-color: ${$route.query.exp == exp ? '#e0e0e0' : ''}`"
                                            v-for="exp in exps" :key="exp" link>
                                            <v-list-item-title>{{ exp }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                                <v-menu transition="slide-y-transition" bottom offset-y open-on-hover>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn class="ml-1" text v-bind="attrs" v-on="on" height="40">
                                            {{ $route.query.classify ? $route.query.classify : 'Tất cả phân loại' }}
                                            <v-icon size="20">mdi-menu-down</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list dense>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkClassify()"
                                            :style="`background-color: ${!$route.query.classify ? '#e0e0e0' : ''}`"
                                            link>
                                            <v-list-item-title>Tất cả phân loại</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkClassify(classify)"
                                            :style="`background-color: ${$route.query.classify == classify ? '#e0e0e0' : ''}`"
                                            v-for="classify in classifies" :key="classify" link>
                                            <v-list-item-title>{{ classify }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <div v-if="isMobile">
            <v-app-bar app color="white" height="70"
                :style="`${isMarginTop ? 'margin-top: 120px' : 'margin-top: 70px'}; box-shadow: none`">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-text-field @input="changeLink()" @click.native="scrollToTop()" v-model="searchQueryJobs"
                                clearable flat solo class="border w-100" hide-details
                                :prepend-inner-icon="website.banner.iconInputSeach_v1"
                                label="Tên công việc, vị trí ứng tuyển mong muốn"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-app-bar>
            <v-app-bar app color="white" height="70"
                :style="`${isMarginTop ? 'margin-top: 190px' : 'margin-top: 140px'}; box-shadow: none;`">
                <v-container>
                    <v-card style="box-shadow: none;" class="border w-100">
                        <v-tabs show-arrows>
                            <v-tab>
                                <v-menu transition="slide-y-transition" bottom offset-y open-on-hover>
                                    <template v-slot:activator="{ on, attrs }">
                                        <div style="font-size: 11px" v-bind="attrs" v-on="on">{{ $route.query.rank ?
                                                $route.query.rank : 'Tất cả cấp bậc'
                                        }} <v-icon size="20">
                                                mdi-menu-down</v-icon>
                                        </div>
                                    </template>
                                    <v-list dense>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkRank()"
                                            :style="`background-color: ${!$route.query.rank ? '#e0e0e0' : ''}`" link>
                                            <v-list-item-title>Tất cả cấp bậc</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkRank(rank)"
                                            :style="`background-color: ${$route.query.rank == rank ? '#e0e0e0' : ''}`"
                                            v-for="rank in ranks" :key="rank" link>
                                            <v-list-item-title>{{ rank }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-tab>
                            <v-tab>
                                <v-menu transition="slide-y-transition" bottom offset-y open-on-hover>
                                    <template v-slot:activator="{ on, attrs }">
                                        <div style="font-size: 11px" v-bind="attrs" v-on="on">{{ $route.query.exp ?
                                                $route.query.exp : 'Tất cả kinh nghiệm'
                                        }} <v-icon size="20">
                                                mdi-menu-down</v-icon>
                                        </div>
                                    </template>
                                    <v-list dense>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkExp()"
                                            :style="`background-color: ${!$route.query.exp ? '#e0e0e0' : ''}`" link>
                                            <v-list-item-title>Tất cả kinh nghiệm</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkExp(exp)"
                                            :style="`background-color: ${$route.query.exp == exp ? '#e0e0e0' : ''}`"
                                            v-for="exp in exps" :key="exp" link>
                                            <v-list-item-title>{{ exp }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-tab>
                            <v-tab>
                                <v-menu transition="slide-y-transition" bottom offset-y open-on-hover>
                                    <template v-slot:activator="{ on, attrs }">
                                        <div style="font-size: 11px" v-bind="attrs" v-on="on"> {{ $route.query.classify
                                                ? $route.query.classify : 'Tất cả phân loại'
                                        }}
                                            <v-icon size="20">mdi-menu-down</v-icon>
                                        </div>
                                    </template>
                                    <v-list dense>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkClassify()"
                                            :style="`background-color: ${!$route.query.classify ? '#e0e0e0' : ''}`"
                                            link>
                                            <v-list-item-title>Tất cả phân loại</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click.native="scrollToTop()" @click="changeLinkClassify(classify)"
                                            :style="`background-color: ${$route.query.classify == classify ? '#e0e0e0' : ''}`"
                                            v-for="classify in classifies" :key="classify" link>
                                            <v-list-item-title>{{ classify }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-tab>
                        </v-tabs>
                    </v-card>
                </v-container>
            </v-app-bar>
        </div>

        <div style="padding: 4px 16px;">
            <v-container>
                <v-row>
                    <v-col cols="12" md="3" v-if="!isMobile">
                        <v-card :style="`box-shadow: none; border-radius: 0px 0px 0px 0px`" class="border"
                            :loading="isLoadingCarrer">
                            <v-list dense shaped>

                                <v-list-item-group :color="website.color.tealMain.color">
                                    <v-list-item :style="`background-color: ${!$route.query.carrer ? '#e0e0e0' : ''}`"
                                        @click="changeLinkCarrer()">
                                        <v-list-item-icon>
                                            <v-icon>mdi-briefcase-outline</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>Tất cả nghành nghề</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item
                                        :style="`background-color: ${$route.query.carrer == carrer ? '#e0e0e0' : ''}`"
                                        v-for="carrer in resultQueryCarrers" :key="carrer"
                                        @click="changeLinkCarrer(carrer)" @click.native="scrollToTop()">
                                        <v-list-item-icon>
                                            <v-icon>mdi-briefcase-outline</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ carrer }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>

                                </v-list-item-group>
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="9">
                        <v-card style="box-shadow: none; border-radius: 0px 0px 0px 0px" class="border"
                            v-if="!isMobile">
                            <v-row>
                                <v-col cols="6">
                                    <div class="p-3 mt-1">{{ resultQueryJobs.length }} việc làm phù hợp</div>
                                </v-col>
                                <v-col cols="6">
                                    <div class="p-3 float-end">
                                        <span v-if="!isMobile">Sắp xếp theo: </span>
                                        <v-btn text depressed>Mặc định <v-icon size="20">mdi-menu-down
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-card style="box-shadow: none; border-radius: 0px 0px 0px 0px" v-if="isMobile">
                            <v-row>
                                <v-col cols="6">
                                    <v-select @click.native="scrollToTop()" @change="changeLinkProvince()"
                                        :color="website.color.tealMain.color" v-model="searchQueryProvince"
                                        class="w-100 border" flat solo hide-details
                                        :prepend-inner-icon="website.banner.iconInputSeach_v2" label="Tỉnh thành"
                                        :items="provinces">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select @click.native="scrollToTop()" :color="website.color.tealMain.color"
                                        class="w-100 border" flat solo hide-details
                                        :prepend-inner-icon="website.banner.iconInputSeach_v2" label="Nghành nghề"
                                        :items="carrers">
                                    </v-select>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-row class="mt-2" v-if="isLoadingJob">
                            <v-col cols="12" v-for="n in 10" :key="n">
                                <v-card class="mx-auto w-100 animation-hover" outlined>
                                    <div class="p-4">
                                        <v-row>
                                            <v-col cols="4" sm="2">
                                                <v-skeleton-loader width="100" height="68" type="image">
                                                </v-skeleton-loader>
                                            </v-col>
                                            <v-col cols="8" sm="8">
                                                <v-skeleton-loader type="list-item-three-line"
                                                    style="margin-top: -20px;">
                                                </v-skeleton-loader>
                                            </v-col>
                                            <v-col cols="12" sm="2">
                                                <v-skeleton-loader type="list-item-two-line" style="margin-top: -20px;">
                                                </v-skeleton-loader>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </v-card>
                            </v-col>
                        </v-row>
                        <v-row class="mt-6" v-if="!isLoadingJob">
                            <v-col cols="12" class="text-center" v-if="resultQueryJobs.length == 0">
                                Hiện tại {{ website.company }} không tìm được vị trí công việc này! Bạn có thể tìm một
                                công việc khác
                            </v-col>
                            <v-col cols="12" v-for="job in resultQueryJobs" :key="job._id">
                                <div class="blog-card" :style="`border: 1px dashed ${website.color.redMain.color};`">
                                    <div class="meta">
                                        <div class="photo" :style="`background-image: url(${job.idCompany.srcLogo})`">
                                        </div>
                                        <ul class="details">
                                            <li><i class="mdi mdi-account-circle">&nbsp;</i>Còn lại: {{
                                                    job.numberOfRecruitments
                                            }} ứng viên</li>
                                            <li class="mt-2"><i class="mdi mdi-calendar-clock">&nbsp;</i>Ngày hết hạn:
                                                {{ formatDate(job.deadline) }}</li>
                                            <li class="mt-2">
                                                <i class="mdi mdi-cog">&nbsp;</i>{{ job.mainJob }}
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="description">
                                        <router-link style="text-decoration: none;"
                                            :to="{ path: `/tim-viec-lam/review-viec-lam/${job.slug}` }"
                                            @click.native="scrollToTop()">
                                            <h1>
                                                {{ job.name }}
                                                <span :style="website.color.tealMain">({{ job.vacancies }})</span>
                                            </h1>
                                        </router-link>
                                        <router-link @click.native="scrollToTop()" style="text-decoration: none;"
                                            :to="{ path: `/cong-ty/review-cong-ty/${job.idCompany.slug}` }">
                                            <div class="mt-2"><i><a>{{ job.idCompany.name }}</a></i></div>
                                        </router-link>
                                        <h2 class="salary" :style="website.color.redMain">
                                            <a @click="linkLogin()" v-if="!user">Đăng nhập để xem lương</a>
                                            <div v-if="user">
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
                                            </div>
                                        </h2>
                                        <p> <i class="mdi mdi-map-marker"></i> {{ job.jobLocation }} ({{
                                                job.workLocation
                                        }})</p>
                                        <v-btn
                                            :to="{ path: '/tim-viec-lam/tat-ca-viec-lam', query: { classify: job.workingForm } }"
                                            class="mt-2" :color="website.color.tealMain.color" dark depressed small>
                                            <span style="color: white">{{ job.workingForm }}</span>
                                        </v-btn>
                                        <p class="float-end">
                                            <v-btn :to="{ path: `/tim-viec-lam/review-viec-lam/${job.slug}` }"
                                                @click.native="scrollToTop()" text>
                                                <v-icon>mdi-arrow-collapse-right</v-icon>&nbsp;Ứng tuyển ngay
                                            </v-btn>
                                        </p>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import Job from '../../apis/job.api';
import Term from '../../apis/term.api';

import Format from '../../modules/Format.module';
export default {
    name: 'Job',
    props: ['website', 'user', 'offset_top'],
    async created() {
        this.isLoadingJob = true;
        this.isLoadingCarrer = true;
        const pathQuery = this.$route.query;
        const jobs = await Job.getJob({ key: 'job', status: 'all' });
        this.jobs = jobs.data;

        const carrers = await Term.getTerm({ key: 'term', type: 1 });
        this.carrers = carrers.data;
        this.isLoadingCarrer = false;

        const provinces = await Term.getTerm({ key: 'term', type: 2 });
        this.provinces = provinces.data;
        this.provinces.unshift('Tất cả tỉnh thành')

        const ranks = await Term.getTerm({ key: 'term', type: 7 });
        this.ranks = ranks.data;

        const exps = await Term.getTerm({ key: 'term', type: 6 });
        this.exps = exps.data;

        const classifies = await Term.getTerm({ key: 'term', type: 3 });
        this.classifies = classifies.data;


        this.searchQueryJobs = pathQuery.search;
        this.searchQueryProvince = pathQuery.province;

        this.isLoadingJob = false;

    },
    computed: {
        resultQueryCarrers() {
            this.offLoadingCarrer();
            if (this.searchQueryCarrers) {
                return this.carrers.filter((item) => {
                    return this.searchQueryCarrers
                        .toLowerCase()
                        .split(" ")
                        .every(
                            (v) =>
                                item.toLowerCase().includes(v)
                        );
                });
            } else {
                return this.carrers;
            }
        },
        resultQueryJobs() {
            this.offLoadingJob();
            const { carrer, search, province, rank, exp, classify } = this.$route.query;
            if (search || carrer || province || rank || exp) {
                const jobs = this.jobs.filter(job => (search ? job.name.toLowerCase().includes(search.toLowerCase()) : job.name.toLowerCase().includes(''))
                    && (carrer ? job.mainJob.toLowerCase() == carrer.toLowerCase() : job.name.toLowerCase().includes(''))
                    && (province && province !== 'Tất cả tỉnh thành' ? job.workLocation.toLowerCase() == province.toLowerCase() : job.name.toLowerCase().includes(''))
                    && (rank ? job.level.toLowerCase() == rank.toLowerCase() : job.name.toLowerCase().includes(''))
                    && (exp ? job.exp.toLowerCase() == exp.toLowerCase() : job.name.toLowerCase().includes(''))
                    && (classify ? job.workingForm.toLowerCase() == classify.toLowerCase() : job.name.toLowerCase().includes('')))
                return [...jobs];

            } else {
                return this.jobs;
            }
        },
    },
    data() {
        return {
            searchQueryCarrers: null,
            searchQueryJobs: null,
            searchQueryProvince: null,
            jobs: [],
            carrers: [],
            provinces: [],
            ranks: [],
            exps: [],
            classifies: [],
            windowSize: {
                x: 0,
                y: 0,
            },
            isMobile: false,
            isMarginTop: false,
            isLoadingJob: false,
            isLoadingCarrer: false,
            route: {
                carrer: this.$route.query.carrer,
                rank: this.$route.query.rank,
                exps: this.$route.query.exp,
                classify: this.$route.query.classify
            }
        }
    },
    mounted() {
        this.onResize()
    },
    methods: {
        linkLogin() {
            window.location.href = '/dang-nhap';
        },
        offLoadingJob() {
            this.isLoadingJob = true;
            setTimeout(() => { this.isLoadingJob = false; }, 1000)
        },
        offLoadingCarrer() {
            this.isLoadingCarrer = true;
            setTimeout(() => { this.isLoadingCarrer = false; }, 1000)
        },
        formatDate(date) {
            return Format.formatDate(date, 'vi');
        },
        changeLink() {
            let that = this;
            that.$router.push({
                name: 'Job',
                query: {
                    search: that.searchQueryJobs,
                    carrer: that.route.carrer,
                    rank: that.route.rank,
                    exp: that.route.exp,
                    classify: that.route.classify,
                    province: that.searchQueryProvince
                }
            })
        },
        changeLinkCarrer(carrer) {
            let that = this;
            that.$router.push({
                name: 'Job',
                query: {
                    search: that.searchQueryJobs,
                    carrer,
                    rank: that.route.rank,
                    classify: that.route.classify,
                    exp: that.route.exp,
                    province: that.searchQueryProvince
                }
            })
        },
        changeLinkRank(rank) {
            let that = this;
            that.$router.push({
                name: 'Job',
                query: {
                    search: that.searchQueryJobs,
                    rank,
                    exp: that.route.exp,
                    classify: that.route.classify,
                    carrer: that.route.carrer,
                    province: that.searchQueryProvince
                }
            })
        },
        changeLinkExp(exp) {
            let that = this;
            that.$router.push({
                name: 'Job',
                query: {
                    search: that.searchQueryJobs,
                    rank: that.route.rank,
                    carrer: that.route.carrer,
                    exp,
                    classify: that.route.classify,
                    province: that.searchQueryProvince
                }
            })
        },
        changeLinkClassify(classify) {
            let that = this;
            that.$router.push({
                name: 'Job',
                query: {
                    search: that.searchQueryJobs,
                    rank: that.route.rank,
                    carrer: that.route.carrer,
                    classify,
                    exp: that.route.exp,
                    province: that.searchQueryProvince
                }
            })
        },
        changeLinkProvince() {
            let that = this;
            that.$router.push({
                name: 'Job',
                query: {
                    search: that.searchQueryJobs,
                    carrer: that.route.carrer,
                    rank: that.route.rank,
                    exp: that.route.exp,
                    classify: that.route.classify,
                    province: that.searchQueryProvince

                }
            })
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        onResize() {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight }
            if (this.windowSize.x < 580) {
                this.isMarginTop = true;
                this.isMobile = true;
            }
            else if (this.windowSize.x < 960) {
                this.isMarginTop = false;
                this.isMobile = true;
            }
            else {
                this.isMarginTop = false;
                this.isMobile = false;
            }
        },
    }
}
</script>

<style scoped>
.container {
    max-width: 1430px;
}

p {
    font-size: 15px;
}

.blog-card {
    display: flex;
    flex-direction: column;
    margin: -1.5rem auto;
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.1;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
}

h1 {
    font-size: 16px !important;
    font-weight: 600 !important;
}

.salary {
    font-size: 14px !important;
    font-weight: bold !important;
}

.blog-card a {
    color: inherit;
}

.blog-card a:hover {
    color: #004D40;
}

.blog-card:hover .photo {
    transform: scale(1.3) rotate(3deg);
}

.blog-card .meta {
    position: relative;
    z-index: 0;
    height: 200px;
}

.blog-card .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: 150px 120px;
    background-position: center;
    transition: transform .2s;
}

.blog-card .details,
.blog-card .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
}

.blog-card .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left .2s;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    width: 100%;
    font-size: .9rem;
}

.blog-card .details a {
    text-decoration: dotted underline;
}

.blog-card .details ul li {
    display: inline-block;
}

.blog-card .details .tags li {
    margin-right: 2px;
}

.blog-card .details .tags li:first-child {
    margin-left: -4px;
}

.blog-card .description {
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;
}

.blog-card .description h1 {
    line-height: 1;
    margin: 0;
    font-size: 1.7rem;
}

.blog-card .description h2 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #a2a2a2;
    margin-top: 5px;
}

.blog-card .description .read-more {
    text-align: right;
}

.blog-card .description .read-more a {
    color: #004D40;
    display: inline-block;
    position: relative;
}

.blog-card .description .read-more a:after {
    content: "\f061";
    font-family: FontAwesome;
    margin-left: -10px;
    opacity: 0;
    vertical-align: middle;
    transition: margin .3s, opacity .3s;
}

.blog-card .description .read-more a:hover:after {
    margin-left: 5px;
    opacity: 1;
}

.blog-card p {
    position: relative;
    margin: 1rem 0 0;
}

.blog-card p:first-of-type {
    margin-top: 1.25rem;
}

.blog-card p:first-of-type:before {
    content: "";
    position: absolute;
    height: 5px;
    background: #004D40;
    width: 35px;
    top: -0.75rem;
    border-radius: 3px;
}

.blog-card:hover .details {
    left: 0%;
}

@media (min-width: 640px) {
    .blog-card {
        flex-direction: row;
        max-width: 100%;
    }

    .blog-card .meta {
        flex-basis: 27%;
        height: auto;
    }

    .blog-card .description {
        flex-basis: 60%;
    }

    .blog-card .description:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
}
</style>