<template>
    <div>
        <v-container>
            <div id="profile-upper">
                <div id="profile-banner-image">
                    <img :src="company.srcBanner" alt="Banner image">
                </div>
                <div id="profile-d">
                    <div id="profile-pic">
                        <img :src="company.srcLogo">
                    </div>
                    <div class="tb" id="m-btns">
                        <div class="td">
                            <CreateFavoriteCompanyComponent :website="website" :slug-company="$route.params.slug"/>
                        </div>
                        <div class="td">
                            <v-btn depressed :color="website.color.tealMain.color" dark>Review</v-btn>
                        </div>
                    </div>
                </div>
                <div id="black-grd"></div>
            </div>
            <v-row class="mt-10">
                <v-col cols="12">
                    <v-card class="border">
                        <div class="p-4 text-center">
                            <h3>{{ company.name }}</h3>
                            <b v-if="company.website">Website: <a target="_blank" :href="company.website">{{ company.website }}</a></b>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" class="mt-5">
                    <v-card class="border">
                        <div class="p-4">
                            <v-row class="text-center">
                                <v-col cols="12" md="4">
                                    <v-avatar size="70" :color="website.color.tealMain.color">
                                        <v-icon dark> mdi-calendar-month </v-icon>
                                    </v-avatar>
                                    <h5 class="mt-2">
                                        {{
                                                !company.foundedYear
                                                    ? "Chưa cập nhật"
                                                    : company.foundedYear
                                        }}
                                    </h5>
                                    <p style="font-size: 15px">Năm thành lập công ty</p>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-avatar size="70" :color="website.color.tealMain.color">
                                        <v-icon dark> mdi-account-arrow-right </v-icon>
                                    </v-avatar>
                                    <h5 class="mt-2">
                                        {{
                                                !company.averageAge ? "Chưa cập nhật" : company.averageAge
                                        }}
                                    </h5>
                                    <p style="font-size: 15px">Tuổi trung bình</p>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-avatar size="70" :color="website.color.tealMain.color">
                                        <v-icon dark> mdi-account-group-outline </v-icon>
                                    </v-avatar>
                                    <h5 class="mt-2">
                                        {{
                                                company.companySizeStart ? company.companySizeStart : 0
                                        }}
                                        -
                                        {{ company.companySizeEnd ? company.companySizeEnd : 0 }}+
                                    </h5>
                                    <p style="font-size: 15px">Quy mô nhân viên</p>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" md="8">
                    <v-card class="border">
                        <div class="p-4">
                            <h6>Giới thiệu công ty</h6>
                            <p v-html="!company.introduct ? 'Chưa có giới thiệu công ty' : company.introduct"></p>
                        </div>
                    </v-card>

                    <v-card class="border mt-5">
                        <div class="p-4">
                            <h6>Tuyển dụng</h6>
                            <JobComponent :website="website" />
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="border">
                        <div class="p-4">
                            <h6>Địa chỉ</h6>
                            <div>
                                <v-icon>mdi-map-marker</v-icon> {{ company.address }}
                            </div>
                            <div class="mt-5" v-if="company.srcMap">
                                <i>Bản đồ trụ sở chính :</i>
                                <iframe :src="company.srcMap" width="100%" height="300" style="border:0;"
                                    allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </v-card>

                    <v-card class="border mt-5">
                        <div class="p-4">
                            <h6>Chia sẻ công ty tới bạn bè</h6>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import JobComponent from "../../components/job/Job.vue";
import CreateFavoriteCompanyComponent from "../../components/candidate/CreateFavoriteCompany.vue";

import Company from '../../apis/company.api';
export default {
    name: 'ReviewCompany',
    data() {
        return {
            company: {}
        }
    },
    props: ['website', 'user'],
    components: {
        JobComponent,
        CreateFavoriteCompanyComponent
    },
    async created() {
        const company = await Company.findByIdCompany({ key: 'company' }, this.$route.params.slug);
        this.company = company.data;
    }
}
</script>

<style scoped>
.container {
    max-width: 1250px;
}

.v-card {
    box-shadow: none !important;
}

.tb {
    display: table;
    width: 100%;
}

.tr {
    display: table-row;
}

.td {
    display: table-cell;
    vertical-align: middle;
}

a {
    text-decoration: none;
}

/* Profile image header */
#profile-upper {
    position: relative;
}

#profile-d {
    position: absolute;
    left: 59px;
    bottom: 0px;
    right: 0px;
    height: 180px;
    z-index: 2;
}

#profile-banner-image {
    height: 200%;
    overflow: hidden;
    z-index: 1;
}

#profile-banner-image img {
    width: 100%;
    margin-top: -15%;
}

#profile-pic {
    width: 180px;
    height: 180px;
    border-radius: 3px;
    margin-top: 28px;
    overflow: hidden;
    box-shadow: 0 0 0 5px #fff;
}

#profile-pic img {
    width: 100%;
    height: 100%;
    background-color: white;
}

#u-name {
    position: absolute;
    top: 120px;
    left: 208px;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
}

#m-btns {
    position: absolute;
    right: 56px;
    bottom: 20px;
    width: 211px;
}

#m-btns .td {
    padding: 0 8px;
}

.m-btn {
    cursor: pointer;
    color: #0e0e0e;
    font-size: 14px;
    white-space: pre;
    padding: 5px 8px 6px 8px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
}

.m-btn i {
    font-size: 16px;
    margin-right: 1px;
    vertical-align: middle;
}

.m-btn span {
    position: relative;
    top: 1px;
}

#edit-profile {
    position: absolute;
    right: 20px;
    bottom: 21px;
    line-height: 1;
    cursor: pointer;
}

#edit-profile i {
    display: block;
    color: rgba(255, 255, 255, 0.7);
}

#black-grd {
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
    height: 300px;
    background: linear-gradient(rgba(0, 0, 0, 0) 71%, rgba(0, 0, 0, 0.53));
    z-index: 1;
}
</style>