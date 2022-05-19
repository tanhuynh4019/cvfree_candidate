<template>
    <div>
        <div :style="`background: ${website.color.tealMain.color}; height: 180px; width: 100%;`">
            <center>
                <div class="p-4">
                    <router-link :to="{ path: '/' }"><img :src="website.srcLogo" /></router-link>
                    <h4 class="text-white mt-5">Thông báo lỗi 404</h4>
                </div>
            </center>
        </div>
        <v-container style="margin-top: -50px">
            <v-card style="box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;;">
                <div class="p-5">
                    <h2 :style="website.color.redMain.color">404, Đã xảy ra lỗi</h2>
                    <p>Không tìm thấy URL được yêu cầu trên máy chủ này. Đó là tất cả những gì chúng tôi biết.</p>

                    <center>
                        <img width="200"
                            src="https://thanhbinhpc.com/wp-content/uploads/2019/03/sua-loi-404-tren-may-tinh.1PNG.png" />
                    </center>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Error404',
    props: ['website'],
    data() {
        return {
            showPassword: false
        }
    },
    async created() {
        this.$emit('showMenu', false)
    }
}
</script>

<style scoped>
.container {
    max-width: 750px;
}
</style>