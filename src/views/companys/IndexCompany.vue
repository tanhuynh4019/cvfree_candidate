<template>
    <div>
        <div class="pa-system" :style="`background-image: url('${website.pa.system.srcBanner}')`">
            <v-container class="text-white pa-system-item">
                <v-row>
                    <v-col cols="12" md="8">
                        <div style="margin: 60px 0px">
                            <h2>Khám phá 100.000+ công ty nổi bật</h2>
                            <p class="mt-2" style="opacity: 0.7;">Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt
                                nhất dành cho bạn</p>

                            <div class="mt-10">
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field :color="website.color.tealMain.color" :height="70" clearable flat
                                            solo hide-details :prepend-inner-icon="'mdi-ev-plug-type1'"
                                            :label="'Tìm kiếm công ty'">
                                            <template v-slot:append>
                                                <v-fade-transition leave-absolute>
                                                    <v-btn @click="searchJob()" class="w-100"
                                                        :color="website.color.tealMain.color" dark height="50"
                                                        depressed>
                                                        Tìm kiếm</v-btn>
                                                </v-fade-transition>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-autocomplete :color="website.color.tealMain.colo" class="mt-1"
                                            :items="carrers" :height="40" flat solo hide-details
                                            :prepend-inner-icon="'mdi-ev-plug-type1'" :label="'Nghành nghề'">
                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-autocomplete :color="website.color.tealMain.colo" class="mt-1"
                                            :items="provinces" :height="40" flat solo hide-details
                                            :prepend-inner-icon="'mdi-ev-plug-type1'" :label="'Tỉnh thành'">
                                        </v-autocomplete>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-container>
            <h4 class="text-center mt-5">DANH SÁCH CÁC CÔNG TY NỔI BẬT</h4>
            <LoadingComponent :website="website" content="Đang tải dữ liệu trang" v-if="isLoadingPage" />
            <v-row class="mt-5" v-if="!isLoadingPage && companies.length != 0">
                <v-col cols="12" md="4" v-for="company in companies" :key="company._id">
                    <v-card @click.native="scrollToTop()" :to="{ path: `/cong-ty/review-cong-ty/${company.slug}` }"
                        :style="`border: 1px dashed ${website.color.redMain.color};`" height="500">
                        <template slot="progress">
                            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                        </template>

                        <v-img height="250" :src="company.srcBanner"></v-img>

                        <v-card width="62" height="62" style="margin-top: -50px; margin-left: 30px;" class="border">
                            <div class="p-1">
                                <v-img :src="company.srcLogo"></v-img>
                            </div>
                        </v-card>

                        <v-card-title>{{ company.name }}</v-card-title>

                        <v-card-text>
                            <div
                                v-html="company.introduct.length < 200 ? company.introduct.length : `${company.introduct.substring(0, 200)}...`">
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import CompanyApi from "../../apis/company.api";

import LoadingComponent from '../../components/loading/Loading.vue';
export default {
    name: 'IndexCompany',
    props: ['website', 'user'],
    async created() {
        const company = await CompanyApi.getCompany({ key: 'company', status: 'top' });
        this.companies = company.data;

        this.isLoadingPage = false;
    },
    components: {
        LoadingComponent
    },
    data() {
        return {
            companies: [],
            isLoadingPage: true,
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    }
}
</script>

<style scoped>
.container {
    max-width: 1250px;
}

.pa-system {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
}

.pa-system:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: .70;
}

.pa-system .pa-system-item {
    position: relative;
}

.v-card {
    box-shadow: none !important;
}
</style>