<template>
    <div v-resize="onResize">
        <v-container>
            <div class="text-center" style="margin-top: 30px; margin-bottom: 60px">
                <span>
                    <img alt="Biểu tượng" height="14" style="margin-top: -4px;" :src="website.srcLogoNoText" />
                    <span class="ml-2" style="font-size: 15x;">{{ website.pa.active.titleSub }}</span>
                </span>
                <h2 :style="website.color.tealMain">{{ website.pa.active.titleMain }}</h2>

                <div class="mt-10">
                    <v-row>
                        <v-col cols="6" md="3" :class="`${!isMobile ? 'border-end' : ''} animation-hover`"
                            v-for="(item, i) in website.pa.active.list" :key="i">
                            <v-icon size="50" :color="website.color.redMain.color">{{ item.icon }}</v-icon>
                            <h5 class="mt-3" :style="website.color.tealMain">{{ item.name }}</h5>
                            <div>{{ item.content }}</div>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'PaActive',
    props: ['website'],
    data() {
        return {
            isMobile: true,
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

            if (this.windowSize.x < 960) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
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

.border-end {
    border-right: 1px dashed #B71C1C !important;
}

.animation-hover {
    transition-duration: .3s;
    transition-property: transform;
    transition-timing-function: ease-out;
}

.animation-hover:hover {
    transform: translateY(-5px);
}
</style>