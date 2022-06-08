<template>
    <div v-resize="onResize">
        <v-container v-if="!isMobile">
            <div style="padding: 10px 0px">
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h4>Tìm kiếm thông tin công ty để {{ website.company }} kết nối bạn với những <b
                                :style="website.color.redMain">cơ hội việc làm</b> phù hợp nhất</h4>
                    </v-col>
                </v-row>
            </div>
        </v-container>

        <v-card color="#f0f0f0">
            <v-container>
                <v-row>
                    <v-col cols="12" v-if="isIpad">
                        <v-card>
                            <div class="p-3">
                                <h6>Nhà tuyển dụng hàng đầu</h6>
                                <IndexCompanyComponent :offset_top="offset_top" class="mt-5" :website="website" status="top"
                                    shape="just-pictures" cols="2" limit="12" />
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="9" v-if="isIpad || isLaptop">
                        <v-card>
                            <div class="p-3">
                                <IndexCompanyComponent :offset_top="offset_top" status="all" :website="website" shape="all" :cols="12" />
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="9" v-if="isMobile">
                        <v-card>
                            <div class="p-3">
                                <IndexCompanyComponent :offset_top="offset_top" status="all" :website="website" shape="mobile" :cols="12" />
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="3" v-if="isLaptop">
                        <v-card>
                            <div class="p-3">
                                <h6>Nhà tuyển dụng hàng đầu</h6>
                                <IndexCompanyComponent :offset_top="offset_top" class="mt-5" :website="website" status="top"
                                    shape="just-pictures" cols="6" />
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import IndexCompanyComponent from "../../components/company/IndexCompany.vue";
export default {
    name: 'SearchCompany',
    props: ['website', 'offset_top'],
    components: {
        IndexCompanyComponent
    },
    data() {
        return {
            windowSize: {
                x: 0,
                y: 0,
            },
            isMobile: false,
            isLaptop: false,
            isIpad: false,
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
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 1250px;
}
</style>