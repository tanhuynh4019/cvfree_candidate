<template>
    <span>
        <v-menu open-on-hover :close-on-content-click="false" :nudge-width="130" offset-y>
            <template v-slot:activator="{ on, attrs }">

                <v-btn text depressed dark v-bind="attrs" v-on="on">
                    <v-avatar size="32">
                        <img :src="user.avatar" alt="Ảnh cá nhân">
                    </v-avatar>

                    <span class="ml-2">
                        <span :style="`color: ${!color ? 'white' : color}`">{{ user.fullName }}</span>
                        <v-icon size="18" :color="!color ? 'white' : color">mdi-menu-down</v-icon>
                    </span>
                </v-btn>
            </template>

            <v-card>
                <div class="p-4">
                    <v-row>
                        <v-col cols="3">
                            <center>
                                <v-avatar size="32">
                                    <img :src="user.avatar" alt="Ảnh cá nhân">
                                </v-avatar>
                            </center>
                        </v-col>
                        <v-col cols="9">
                            <b>{{ user.fullName }}</b>
                            <div
                                :style="`font-size: 15px !important; color: ${user.isEmail ? website.color.tealMain.color : website.color.redMain.color} !important;'`">
                                {{ user.isEmail ? 'Đã xác thực E-mail' : 'Chưa xác thực E-mail' }}</div>
                        </v-col>
                    </v-row>
                </div>
                <p class="ml-5" style="font-size: 12px">
                    <b>Mã ứng viên:</b> #{{ user._id }}
                </p>
                <v-list nav dense>
                    <v-list-item-group>
                        <v-list-item v-for="menu in menu.candidates" :key="menu.name">
                            <v-list-item-icon>
                                <v-icon v-text="menu.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="menu.name"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item v-for="menu in menu.systems " :key="menu.name">
                            <v-list-item-icon>
                                <v-icon v-text="menu.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="menu.name"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item v-for="menu in menu.securities " :key="menu.name">
                            <v-list-item-icon>
                                <v-icon v-text="menu.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="menu.name"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item :style="website.color.redMain" @click="clickLogOut()">
                            <v-list-item-icon>
                                <v-icon :color="website.color.redMain.color">mdi-logout</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>Đăng xuất</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-menu>
        <v-dialog v-model="dialogLogOut" persistent max-width="290">
            <v-card>
                <v-card-title class="text-h5">
                    Đăng xuất?
                </v-card-title>
                <v-card-text>Bạn có chắc muốn đăng xuất ? Hy vọng sau khi rời đi, trong tương lai bạn sẽ quay lại và sử
                    dụng dịch vụ của {{ website.company }}, thân <b>{{ user.fullName }}</b> 😥😥.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :color="website.color.redMain.color" text @click="dialogLogOut = false">
                        Tôi vẫn muốn ở lại
                    </v-btn>
                    <v-btn :color="website.color.tealMain.color" text @click="logOut()">
                        Rời đi
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar" :timeout="timeout" top>
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Đóng
                </v-btn>
            </template>
        </v-snackbar>
    </span>
</template>

<script>
import Auth from '../../apis/auth.api';
export default {
    name: 'DropdownUser',
    props: ['website', 'user', 'color'],
    data() {
        return {
            snackbar: false,
            text: "",
            timeout: 2000,
            dialogLogOut: false,
            menu: {
                candidates: [
                    {
                        icon: 'mdi-account',
                        name: 'Thông tin ứng viên',
                        link: ''
                    },
                    {
                        icon: 'mdi-progress-upload',
                        name: 'Nâng cấp tài khoản vip',
                        link: ''
                    }
                ],
                securities: [
                    {
                        icon: 'mdi-shield-key',
                        name: 'Đổi mật khẩu',
                        link: ''
                    },
                    {
                        icon: 'mdi-account-cog',
                        name: 'Cài đặt tài khoản',
                        link: ''
                    }
                ],
                systems: [
                    {
                        icon: 'mdi-card-account-details',
                        name: 'Quản lý hồ sơ',
                        link: ''
                    },
                    {
                        icon: 'mdi-file-eye',
                        name: 'Nhà tuyển dụng xem hồ sơ',
                        link: ''
                    },
                    {
                        icon: 'mdi-heart-box',
                        name: 'Việc làm đã lưu',
                        link: ''
                    }
                ]
            }
        }
    },
    methods: {
        clickLogOut() {
            let that = this;
            that.dialogLogOut = true;
        },
        async logOut() {
            let that = this;
            const logOut = await Auth.logOut({ key: 'auth' });
            if (!logOut.error) {
                localStorage.setItem("tkc", logOut.data.token);
                that.snackbar = true;
                that.text = logOut.message;
                window.location.href = '/dang-nhap';
            }
            else {
                that.snackbar = true;
                that.text = logOut.message;
            }
        }
    }
}
</script>

<style>
</style>