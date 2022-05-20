<template>
    <div v-resize="onResize">
        <v-app-bar app color="white" height="50" :style="isMarginTop ? 'margin-top: 121px' : 'margin-top: 70px'"
            v-if="changeScreen">
            <v-tabs :color="website.color.tealMain.color" next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline" show-arrows>
                <v-tab style="font-size: 12px" v-for="menu in menus" :key="menu.name">{{ menu.name }}</v-tab>
            </v-tabs>
        </v-app-bar>
        <v-list dense shaped v-if="!changeScreen">
            <v-list-item-group v-model="menuMyAccount" :color="website.color.tealMain.color">
                <v-list-item v-for="menu in menus" :key="menu.name" :to="menu.link">
                    <v-list-item-icon>
                        <v-icon>{{ menu.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ menu.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
export default {
    name: 'MenuAccount',
    props: ['status', 'website', 'changeScreen', 'windowSize'],
    data() {
        return {
            menuMyAccount: this.checkMenuMyAccount(this.status),
            windowSize: {
                x: 0,
                y: 0,
            },
            isMarginTop: false,
            menus: [
                {
                    link: {
                        path: '/tai-khoan/tai-khoan-cua-toi',
                        query: {
                            status: 'taikhoan'
                        }
                    },
                    name: 'Tài khoản của tôi',
                    icon: 'mdi-account-reactivate'
                },
                {
                    link: '',
                    name: 'Cài đặt nhận email',
                    icon: 'mdi-email-mark-as-unread'
                },
                {
                    link: '',
                    name: 'Lịch sử thanh toán',
                    icon: 'mdi-credit-card-clock'
                },
                {
                    link: '',
                    name: 'Lịch sử hoạt động',
                    icon: 'mdi-history'
                },
                {
                    link: {
                        path: '/tai-khoan/doi-mat-khau',
                        query: {
                            status: 'doi-mat-khau'
                        }
                    },
                    name: 'Đổi mật khẩu',
                    icon: 'mdi-account-key'
                }
            ]
        }
    },
    mounted() {
        this.onResize()
    },
    methods: {
        checkMenuMyAccount(status) {
            switch (status) {
                case 'taikhoan':
                    return 0;
                case 'doi-mat-khau':
                    return 4;
                default:
                    return 0;
            }
        },
        onResize() {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight }
            if (this.windowSize.x < 580) {
                this.isMarginTop = true;
            }
            else {
                this.isMarginTop = false;
            }
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)>.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) .v-slide-group__prev {
    display: none !important;
    visibility: hidden !important;
}
</style>