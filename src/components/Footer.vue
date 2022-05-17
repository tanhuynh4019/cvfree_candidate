<template>
    <div>
        <v-footer dark padless>
            <v-card flat tile class="white--text w-100" :color="website.color.tealMain.color">

                <v-card-text class="white--text pt-0">
                    <v-container style="margin-top: 30px">
                        <v-row>
                            <v-col cols="6" md="3">
                                <b class="ml-4" :style="website.color.yellowSubColor">Về {{ website.company }}</b>
                                <v-list nav dense :color="website.color.tealMain.color">
                                    <v-list-item-group>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Giới thiệu</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Góc báo chí</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Tuyển dụng</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Liên hệ</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Hỏi đáp</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Chính sách bảo mật</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Điều khoản dịch vụ</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Quy chế hoạt động</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                                <b class="ml-4" :style="website.color.yellowSubColor">Cộng đồng {{ website.company }}</b>
                                <v-list nav dense :color="website.color.tealMain.color">
                                    <v-list-item-group>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Facebook Fanpage</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Youtube Official Channel</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Linkedin</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Tiktok Official Channel</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>

                            <v-col cols="6" md="3">
                                <b class="ml-4" :style="website.color.yellowSubColor">Đối tác</b>
                                <v-list nav dense :color="website.color.tealMain.color">
                                    <v-list-item-group>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>TestCenter</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>TopHR</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>ViecNgay</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Happy Time</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Gitiho</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Học IELTS Dol.vn</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>JAMJA</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Mogi</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Homedy</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Printgo</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>
                            <v-col cols="6" md="3">
                                <b class="ml-4" :style="website.color.yellowSubColor">Hồ sơ và CV</b>
                                <v-list nav dense :color="website.color.tealMain.color">
                                    <v-list-item-group>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Quản lý CV của bạn</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>TopCV Profile</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Hướng dẫn viết CV</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Review CV</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                                <b class="ml-4" :style="website.color.yellowSubColor">Khám phá</b>
                                <v-list nav dense :color="website.color.tealMain.color">
                                    <v-list-item-group>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Ứng dụng di động TopCV</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Tính lương Gross - Net</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Tính lãi suất kép</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Lập kế hoạch tiết kiệm</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Tính bảo hiểm thất nghiệp</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Tính bảo hiểm xã hội một lần</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Trắc nghiệm MBTI</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Trắc nghiệm MI</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>

                            <v-col cols="6" md="3">
                                <b class="ml-4" :style="website.color.yellowSubColor">Xây dựng sự nghiệp</b>
                                <v-list nav dense :color="website.color.tealMain.color">
                                    <v-list-item-group>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Việc làm tốt nhất</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Việc làm lương cao</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Tuyển dụng</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Việc làm quản lý</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Việc làm từ xa (remote)</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>Việc làm bán thời gian</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                                <b class="ml-4" :style="website.color.yellowSubColor">Phát triển bản thân</b>
                                <v-list nav dense :color="website.color.tealMain.color">
                                    <v-list-item-group>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>TopCV Contest</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>

                        </v-row>
                    </v-container>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="4">
                                <div class="mt-3">
                                    <div>
                                        <b :style="website.color.yellowSubColor">Địa chỉ: </b>
                                        Tòa nhà cao ốc Nam Giao
                                        1, số
                                        261 - 263 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh
                                    </div>
                                    <div>
                                        <b :style="website.color.yellowSubColor">Email: </b> tanhuynh9940@gmail.com
                                    </div>
                                    <div>
                                        <b :style="website.color.yellowSubColor">Số điện thoại: </b> 0924404019
                                    </div>
                                    <div>
                                        <b :style="website.color.yellowSubColor">Hoạt động: </b> 24/7
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="8">
                                <img width="154" height="39" :src="website.srcLogo" />
                                <img width="154" height="60" class="ml-4" src="https://www.topcv.vn/images/bct.jpg" />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: ['website'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.container {
    max-width: 1430px;
}
</style>