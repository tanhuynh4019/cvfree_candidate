<template>
    <div class="pa-system" :style="`background-image: url('${website.pa.system.srcBanner}')`">
        <v-container class="text-white pa-system-item">
            <v-row>
                <v-col cols="12" md="8">
                    <div style="margin: 60px 0px">
                        <span>
                            <img alt="Biểu tượng" height="14" style="margin-top: -4px;" :src="website.srcLogoNoText" />
                            <span class="ml-2" style="font-size: 15x;">{{ website.pa.system.titleSub }}</span>
                        </span>
                        <h2>{{ website.pa.system.titleMain }}</h2>
                        <p class="mt-10" style="opacity: 0.7;">{{website.pa.system.desciption}}</p>

                        <div class="mt-5" style="font-size: 20px;">
                            <div v-for="(item, i) in website.pa.system.list" :key="i"><i
                                    :style="[website.color.yellowSubColor]"
                                    class="mdi mdi-arrow-right-bold-hexagon-outline"></i> <span class="ml-5">{{ item
                                    }}</span></div>
                        </div>

                        <div class="mt-10">
                            <v-row>
                                <v-col cols="6" md="4" lg="4">
                                    <v-btn depressed x-large :color="website.color.redMain.color" dark class="w-100">
                                        {{ website.pa.system.textBtn_1 }}</v-btn>
                                </v-col>
                                <v-col cols="6" md="4" lg="4">
                                    <v-btn depressed x-large :color="website.color.redMain.color" dark
                                        class="ml-2 w-100">{{ website.pa.system.textBtn_2 }}</v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'PaSystem',
    props: ['website'],
}
</script>

<style scoped>
.container {
    max-width: 1250px;
}

h2 {
    font-size: 40px;
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
</style>