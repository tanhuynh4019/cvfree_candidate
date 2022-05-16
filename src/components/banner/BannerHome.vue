<template>
    <v-container class="banner-home" v-resize="onResize">
        <v-row :class="!isImageBannerRight ? '' : 'mt-10'" style="margin: -24px 0px;">
            <v-col cols="12" lg="6">
                <div class="mt-10">
                    <h1 :style="isMobile ? 'font-size: 40px' : ''">{{ website.banner.textMain }} <span
                            :style="website.color.yellowSubColor">{{
                                    website.banner.textSub
                            }}</span></h1>
                    <!--Tìm kiếm-->
                    <v-card rounded color="white" class="mb-1 mt-5">
                        <v-row no-gutters>
                            <v-col cols="12" sm="3">
                                <v-text-field clearable flat solo hide-details
                                    :prepend-inner-icon="website.banner.iconInputSeach_v1"
                                    label="Tên công việc, vị trí ứng tuyển mong muốn"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-select class="ml-1" flat solo hide-details
                                    :prepend-inner-icon="website.banner.iconInputSeach_v2" label="Ngành nghề">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-select class="ml-1" flat solo hide-details
                                    :prepend-inner-icon="website.banner.iconInputSeach_v3" label="Địa điểm">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <center class="p-1">
                                    <v-btn class="ml-1" :color="website.color.tealMain.color" dark height="40"
                                        depressed>
                                        {{ website.banner.textBtnSeach }}</v-btn>
                                </center>
                            </v-col>
                        </v-row>
                    </v-card>
                    <div class="mt-5">Từ khóa xu hướng: <span :style="website.color.yellowSubColor">Người quản lý, Hành
                            chính, Android, VueJS, Asp.net</span> </div>
                    <!--Thống kê-->
                    <div style="margin-top: 10%">
                        <v-row>
                            <v-col cols="4" class="border-start">
                                <h4>6,789,990</h4>
                                <b>{{ website.banner.textSub_v1 }}</b>
                            </v-col>
                            <v-col cols="4" class="border-start">
                                <h4>8,098,234</h4>
                                <b>{{ website.banner.textSub_v2 }}</b>
                            </v-col>
                            <v-col cols="4" class="border-start">
                                <h4>3,678,890</h4>
                                <b>{{ website.banner.textSub_v3 }}</b>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <div v-if="!isImageBannerRight" style="height:50px"></div>
                <img v-if="isImageBannerRight" height="700" width="100%" :src="website.banner.srcImageRight" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BanerHome',
    props: ['website'],
    data() {
        return {
            isImageBannerRight: true,
            isMobile: false,
            windowSize: {
                x: 0,
                y: 0,
            },
        }
    },
    mounted() {
        this.onResize();
    },
    methods: {
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
