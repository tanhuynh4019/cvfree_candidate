<template>
    <div>
        <div :style="`background: ${website.color.tealMain.color}; height: 130px; width: 100%;`">
            <center>
                <div class="p-4">
                    <img :src="website.srcLogo" />
                </div>
            </center>
        </div>
        <v-container style="margin-top: -50px">
            <v-card style="box-shadow: 0px 0px 0px 0px;">
                <div class="p-5">
                    <v-row>
                        <v-col cols="6">
                            <h3>Chào mừng bạn đến với {{ website.company }}</h3>
                            <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
                            <v-form class="mt-5">
                                <v-text-field placeholder="Nhập email của bạn" outlined dense
                                    :color="website.color.tealMain.color"></v-text-field>
                                <v-text-field outline placeholder="Nhập mật khẩu" outlined dense
                                    :color="website.color.tealMain.color"></v-text-field>
                            </v-form>
                            <v-btn depressed dark class="w-100" :color="website.color.tealMain.color">Đăng nhập</v-btn>
                            <div class="text-center mt-5">hoặc</div>
                            <v-row class="mt-2">
                                <v-col cols="4">
                                    <v-btn depressed class="w-100" dark color="#365899">
                                        <v-icon left>
                                            mdi-facebook
                                        </v-icon>
                                        Facebook
                                    </v-btn>
                                </v-col>
                                <v-col cols="4">
                                    <v-btn depressed class="w-100" dark color="#ea4335">
                                        <v-icon left>
                                            mdi-google
                                        </v-icon>
                                        Google
                                    </v-btn>
                                </v-col>
                                <v-col cols="4">
                                    <v-btn depressed class="w-100" dark color="#056497">
                                        <v-icon left>
                                            mdi-linkedin
                                        </v-icon>
                                        Linkedin
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row class="mt-4">
                                <v-col cols="6">
                                    Bạn chưa có tài khoản? <b :style="website.color.tealMain">Đăng ký!</b>
                                </v-col>
                                <v-col cols="6">
                                    <b class="float-end" :style="website.color.tealMain">Quên mật khẩu?</b>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <vueper-slides bullets-outside :dragging-distance="50" fixed-height="425px">
                                <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"
                                    :title="slide.title" :content="slide.content" :video="slide.video" />
                            </vueper-slides>


                            <div class="float-end">
                                Thỏa thuận sử dụng | Quy định bảo mật
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: 'Login',
    props: ['website'],
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            slides: [
                {
                    title: '',
                    content: '',
                    image: '',
                    video: {
                        webm: `https://rr2---sn-npoeen7k.c.drive.google.com/videoplayback?expire=1652829021&ei=HfODYtmHI7adp84P2pODmAU&ip=8.21.11.48&cp=QVRKVElfWFBQQlhPOkI1Yk9PRW1vbUM5OWFHckFURmRCcDJGNWFWREQwZjdZdEl0X1VvWnczdmU&id=462f46ddc3cf7644&itag=18&source=webdrive&requiressl=yes&ttl=transient&susc=dr&driveid=1dUUCGviMMLNFsW93D7773MpY0Cw8mJ4V&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=65.155&lmt=1652814565763524&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgads_3I_jLdMuahckQou5B2Ao_-JP7wMGeItBmW5ojxcCIAlYERxFNPNc_AP2gnM_eZ3muC0g172durpVJ5od6ciB&cpn=UcxvGb9t5RaguIiF&c=WEB_EMBEDDED_PLAYER&cver=1.20220511.00.00&redirect_counter=1&cm2rm=sn-un5l7s&req_id=d1510cc82f76a3ee&cms_redirect=yes&cmsv=e&mh=St&mm=34&mn=sn-npoeen7k&ms=ltu&mt=1652814522&mv=m&mvi=2&pl=24&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgTjUt6YOFBpsOJp4vH7ek_F7i6Sd8_Q62ZkMK9EyXfv0CIF8AbQjisqyUcH-G18-YV01wBdkgxRXKvssIkIDAHbsx`,
                        mp4: `https://rr2---sn-npoeen7k.c.drive.google.com/videoplayback?expire=1652829021&ei=HfODYtmHI7adp84P2pODmAU&ip=8.21.11.48&cp=QVRKVElfWFBQQlhPOkI1Yk9PRW1vbUM5OWFHckFURmRCcDJGNWFWREQwZjdZdEl0X1VvWnczdmU&id=462f46ddc3cf7644&itag=18&source=webdrive&requiressl=yes&ttl=transient&susc=dr&driveid=1dUUCGviMMLNFsW93D7773MpY0Cw8mJ4V&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=65.155&lmt=1652814565763524&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgads_3I_jLdMuahckQou5B2Ao_-JP7wMGeItBmW5ojxcCIAlYERxFNPNc_AP2gnM_eZ3muC0g172durpVJ5od6ciB&cpn=UcxvGb9t5RaguIiF&c=WEB_EMBEDDED_PLAYER&cver=1.20220511.00.00&redirect_counter=1&cm2rm=sn-un5l7s&req_id=d1510cc82f76a3ee&cms_redirect=yes&cmsv=e&mh=St&mm=34&mn=sn-npoeen7k&ms=ltu&mt=1652814522&mv=m&mvi=2&pl=24&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgTjUt6YOFBpsOJp4vH7ek_F7i6Sd8_Q62ZkMK9EyXfv0CIF8AbQjisqyUcH-G18-YV01wBdkgxRXKvssIkIDAHbsx`,
                        props: { autoplay: true, loop: true, controls: false, muted: true, muted: 0 }
                    }
                }
            ]

        }
    },
    async created() {
        this.$emit('showMenu', false)
    }
}
</script>

<style scoped>
    .container {
        max-width: 1250px;
    }
</style>