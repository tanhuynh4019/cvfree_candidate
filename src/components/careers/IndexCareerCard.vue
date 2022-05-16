<template>
    <div>
        <v-container>
            <div class="text-center" style="margin-top: 30px;">
                <span>
                    <img alt="Biểu tượng" height="14" style="margin-top: -4px;" :src="website.srcLogoNoText" />
                    <span class="ml-2" style="font-size: 15x;">{{ website.carrer.titleSub }}</span>
                </span>
                <h2 :style="website.color.tealMain">{{ website.carrer.titleMain }}</h2>
            </div>
        </v-container>
        <div class="mt-2">
            <div class="p-3">
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="2" v-for="carrer in carrers" class="animation-hover" :key="carrer.name">
                        <v-card color="#FFEBEE" height="100%">
                            <div class="p-2">
                                <center class="mt-5">
                                    <img width="150" height="200"
                                        :src="carrer.srcImage" />
                                </center>
                                <v-sheet rounded :color="website.color.redMain.color"  width="100%"
                                    class="mt-10">
                                    <div class="p-2 text-white">
                                        <v-row>
                                            <v-col cols="10">
                                                <h6>{{carrer.name}}</h6>
                                                <p>{{carrer.content}}</p>
                                            </v-col>
                                            <v-col cols="2">
                                                <v-icon class="float-end text-white">mdi-access-point-check</v-icon>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </v-sheet>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexCareerCard',
    props: ['website'],
    data() {
        return {
            carrers: [
                {
                    srcImage: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/feature1.png',
                    name: 'Kế toán',
                    content: '5 công việc'
                },
                {
                    srcImage: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/feature2.png',
                    name: 'Tiếp thị kỷ thuật số',
                    content: '2 công việc'
                },
                {
                    srcImage: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/feature3.png',
                    name: 'Dịch vụ khách hàng',
                    content: '4 công việc'
                },
                {
                    srcImage: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/feature4.png',
                    name: 'Phát thanh truyển hình',
                    content: '2 công việc'
                },
                {
                    srcImage: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/feature5.png',
                    name: 'Hổ trợ bán hàng',
                    content: '5 công việc'
                },
                {
                    srcImage: 'https://templates.hibootstrap.com/jecto/default/assets/img/home-three/feature6.png',
                    name: 'Giáo viên',
                    content: '5 công việc'
                }
            ]
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 1250px;
}

h2 {
    font-size: 40px;
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