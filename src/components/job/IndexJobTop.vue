<template>
    <div v-resize="onResize">
        <v-container>
            <div class="text-center" style="margin-top: 30px" v-if="isLaptop || isIpad">
                <span>
                    <img alt="Biểu tượng" height="14" style="margin-top: -4px;" :src="website.srcLogoNoText" />
                    <span class="ml-2" style="font-size: 15x;">{{ website.job.titleSubGood }}</span>
                </span>
                <h2 :style="website.color.tealMain">{{ website.job.titleMainGood }}</h2>
            </div>

            <div style="margin-top: 5px" v-if="isMobile">
                <v-row>
                    <v-col cols="6">
                        <h5 :style="website.color.tealMain">{{ website.job.titleMainGood }}</h5>
                    </v-col>
                    <v-col cols="6">
                        <div class="float-end">
                            <a :style="website.color.tealMain">Xem tất cả</a>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <div class="mt-5">
                <IndexJobStatusComponent status="the_best" limit="12" :website="website" :user="user" />
                <p class="mt-10 text-center"  v-if="isLaptop">
                    {{ website.job.textAll }} <u :style="website.color.redMain">{{ website.job.linkTextAll }}</u>
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
import IndexJobStatusComponent from "../job/Index/IndexJobStatus.vue";
export default {
    name: 'IndexJobTop',
    props: ['website', 'user'],
    components: {
        IndexJobStatusComponent
    },
    data() {
        return {
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

a{
    text-decoration: none;
}
</style>