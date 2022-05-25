<template>
    <div>
        <v-card class="border">
            <div class="p-2">
                <v-row>
                    <v-col cols="4">
                        <center>
                            <v-avatar size="50" class="mt-5">
                                <v-img :src="user.avatar"></v-img>
                            </v-avatar>
                        </center>
                    </v-col>
                    <v-col cols="8">
                        <h6>Chào bạn trở lại,</h6>
                        <h6>{{ user.fullName }}</h6>
                        <v-chip label small
                            :color="user.isEmail ? website.color.tealMain.color : website.color.redMain.color" dark>
                            {{ user.isEmail ? 'Tài khoản đã xác thực' : 'Tài khoản chưa xác thực' }}</v-chip>
                    </v-col>
                    <v-col cols="12">
                        <div class="p-2">
                            <v-row>
                                <v-col cols="6" md="12">
                                    <v-switch v-model="user.isSeachJob" :color="website.color.tealMain.color"
                                        label="Trang thái tìm việc"></v-switch>
                                    <p>
                                        Bật tính năng này, bạn sẽ nhận được nhiều công việc tốt nhất và phù hợp của
                                        {{ website.company }}!
                                    </p>
                                </v-col>

                                <v-col cols="6" md="12">

                                    <v-switch v-model="user.isContactEmployer" :color="website.color.tealMain.color"
                                        label="Trang thái tìm việc"></v-switch>
                                    <p>
                                        Bật tính năng này, nhà tuyển dụng có thể xem được thông tin từ CV và trang cá
                                        nhân
                                        của
                                        bạn!
                                    </p>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: ['website', 'user']
}
</script>

<style scoped>
.v-card {
    box-shadow: none !important;
}

.v-input__slot {
    font-weight: bold !important;
    font-size: 50px !important;
}

.v-input--selection-controls .v-input__slot>.v-label,
.v-input--selection-controls .v-radio>.v-label {
    font-size: 20px !important;
}
</style>