<template>
    <v-container class="banner-home" v-resize="onResize">
        <v-row :class="!isImageBannerRight ? '' : 'mt-10'" style="margin: -24px 0px;">
            <v-col cols="12" lg="6">
                <div class="mt-10">

                    <h1 :style="isMobile ? 'font-size: 40px' : ''">{{ banner.textMain }} <span
                            :style="website.color.yellowSubColor">{{
                                    banner.textSub
                            }}</span></h1>
                    <!--Tìm kiếm-->
                    <v-card rounded :color="banner.setting.bgCard" class="mb-1 mt-5">
                        <v-form ref="formSearch" v-model="formSearch.valid">
                            <div class="p-4">
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="formSearch.value.key" :rules="formSearch.validate.key" :color="banner.setting.colorMain"
                                            :height="banner.setting.heightInputSearch" clearable flat solo hide-details
                                            :prepend-inner-icon="banner.input.iconSearch"
                                            :label="banner.input.labelSearch">
                                            <template v-slot:append v-if="!isMobile">
                                                <v-fade-transition leave-absolute>
                                                    <v-btn @click="searchJob()" class="w-100" :color="banner.setting.bgBtn" dark height="50"
                                                        depressed>
                                                        {{ banner.button.textBtnSearch }}</v-btn>
                                                </v-fade-transition>
                                            </template>
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-autocomplete v-model="formSearch.value.carrer"
                                            :color="banner.setting.colorMain" class="mt-1" :items="carrers"
                                            :height="banner.setting.heightInputCarrer" flat solo hide-details
                                            :prepend-inner-icon="banner.input.iconCarrer"
                                            :label="banner.input.labelCarrer">
                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-autocomplete v-model="formSearch.value.province"
                                            :color="banner.setting.colorMain" class="mt-1" :items="provinces"
                                            :height="banner.setting.heightInputProvince" flat solo hide-details
                                            :prepend-inner-icon="banner.input.iconProvince"
                                            :label="banner.input.labelProvince">
                                        </v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" v-if="isMobile">
                                        <v-btn class="w-100" :color="banner.setting.bgBtn" dark height="50" depressed>
                                            {{ banner.button.textBtnSearch }}</v-btn>
                                    </v-col>
                                    <v-col cols="12" class="text-white">
                                        Người quản lý &nbsp; &nbsp; Hành chính &nbsp; &nbsp; Android &nbsp; &nbsp; VueJS
                                        &nbsp; &nbsp; Asp.net
                                    </v-col>
                                </v-row>
                            </div>
                        </v-form>
                    </v-card>
                    <!--Thống kê-->
                    <div style="margin-top: 10%" class="p-3">
                        <v-row>
                            <v-col cols="4" class="border-start">
                                <h4>6,789,990</h4>
                                <b>{{ banner.countCandidate }}</b>
                            </v-col>
                            <v-col cols="4" class="border-start">
                                <h4>8,098,234</h4>
                                <b>{{ banner.countEmployer }}</b>
                            </v-col>
                            <v-col cols="4" class="border-start">
                                <h4>3,678,890</h4>
                                <b>{{ banner.countJob }}</b>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <div v-if="!isImageBannerRight" style="height:50px"></div>
                <img v-if="isImageBannerRight" height="700" width="100%" :src="banner.srcImageRight" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TermApi from "../../apis/term.api";
export default {
    name: 'BanerHome',
    props: ['website'],
    data() {
        return {
            isImageBannerRight: true,
            isMobile: false,
            banner: this.website.banner,
            windowSize: {
                x: 0,
                y: 0,
            },
            formSearch: {
                valid: true,
                validate: { },
                value: {
                    key: '',
                    carrer: '',
                    province: ''
                }
            },
            carrers: [],
            provinces: []
        }
    },
    async created() {
        const carrer = await TermApi.getTerm({ key: 'term', type: 1 });
        this.carrers = carrer.data;

        const province = await TermApi.getTerm({ key: 'term', type: 2 });
        this.provinces = province.data;
    },
    mounted() {
        this.onResize();
    },
    methods: {
        searchJob()
        {
            let that = this;
            const valid = that.$refs.formSearch.validate();
            if(valid) {
                that.$router.push(
                    {
                        path: '/tim-viec-lam/tat-ca-viec-lam',
                        query: {
                            search: that.formSearch.value.key,
                            carrer: that.formSearch.value.carrer,
                            province: that.formSearch.value.province
                        }
                    }
                )
            }
        },
        onResize() {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight };

            if (this.windowSize.x < 600) {
                this.isMobile = true;
                this.isImageBannerRight = false;
            }
            else if (this.windowSize.x < 1264) {
                this.isMobile = false;
                this.isImageBannerRight = false;
            } else {
                this.isMobile = false;
                this.isImageBannerRight = true;
            }
        },
    },
}
</script>

<style scoped>
.banner-home {
    color: white;
}

.container {
    max-width: 1550px;
}

p {
    font-size: 20px;
}

h1 {
    font-size: 60px;
}

.border-start {
    border-left: 2px dashed white !important;
}
</style>
