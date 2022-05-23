<template>
    <div class="header" v-resize="onResize">
        <v-app-bar app color="#004D40" height="70"
            :class="offset_top > 10 ? 'box-shadow-beautiful' : 'box-shadow-beautiful-none'">
            <v-spacer>
                <v-container>
                    <v-row>
                        <v-col cols="3">
                            <router-link :to="{ path: '/' }">
                                <img :src="website.srcLogo" />
                            </router-link>
                        </v-col>
                        <v-col cols="9">
                            <Menu v-if="isMenu" :offset_top="offset_top" status="row" />
                        </v-col>
                    </v-row>
                </v-container>
            </v-spacer>

            <v-responsive max-width="400">
                <div>
                    <div v-if="!user">
                        <v-btn @click="linkLogin()" v-if="!isMobile" text dark
                            :color="offset_top > 750 ? website.color.yellowSubColor.color : ''">
                            <v-icon>mdi-login</v-icon>Đăng nhập / Đăng ký
                        </v-btn>
                        <v-btn v-if="!isMobile" class="ml-1" color="#B2DFDB">Tìm ứng viên</v-btn>
                    </div>

                    <v-app-bar-nav-icon :class="isMobile ? 'float-end' : ''" color="white" v-if="isMobile"
                        @click="drawer = !drawer"></v-app-bar-nav-icon>
                </div>
                <div v-if="user && !isMobile" class="float-end">

                    <v-btn icon dark>
                        <v-badge overlap :color="website.color.redMain.color" content="1">
                            <v-icon>mdi-facebook-messenger</v-icon>
                        </v-badge>
                    </v-btn>

                    <v-btn icon dark>
                        <v-badge overlap :color="website.color.redMain.color" content="1">
                            <v-icon>mdi-bell-outline</v-icon>
                        </v-badge>
                    </v-btn>

                    <span class="ml-1 text-white">
                        <DropdownUser :user="user" :website="website" />
                    </span>

                    

                    <v-app-bar-nav-icon :class="isMobile ? 'float-end' : ''" color="white" v-if="!isMenu"
                        @click="drawer = !drawer"></v-app-bar-nav-icon>
                </div>
            </v-responsive>
        </v-app-bar>

        <v-app-bar app color="white" height="50" style="margin-top: 70px" v-if="isMobile">
            <v-spacer>
                <v-container>
                    <v-row>
                        <v-col cols="3"> </v-col>
                        <v-col cols="9">
                            <Menu v-if="isMenu" />
                        </v-col>
                    </v-row>
                </v-container>
            </v-spacer>

            <v-responsive max-width="400">
                <div v-if="!user">
                    <v-btn :to="{ name: 'Login' }" text small>
                        <v-icon size="18">mdi-login</v-icon>Đăng nhập / Đăng ký
                    </v-btn>
                    <v-btn class="ml-1" small color="#B2DFDB">Tìm ứng viên</v-btn>
                </div>
                <div v-if="user">
                    <v-btn icon dark :color="website.color.tealMain.color">
                        <v-badge overlap :color="website.color.redMain.color" content="1">
                            <v-icon>mdi-facebook-messenger</v-icon>
                        </v-badge>
                    </v-btn>

                    <v-btn icon dark :color="website.color.tealMain.color">
                        <v-badge overlap :color="website.color.redMain.color" content="1">
                            <v-icon>mdi-bell-outline</v-icon>
                        </v-badge>
                    </v-btn>

                    <span class="ml-1" :style="website.color.tealMain">
                        <DropdownUser :user="user" :color="website.color.tealMain.color" :website="website" />
                    </span>
                </div>
            </v-responsive>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" fixed temporary>
            <Menu :offset_top="offset_top" status="column" />
        </v-navigation-drawer>
    </div>
</template>

<script>
import Menu from "../components/menu/Menu.vue";
import DropdownUser from '../components/candidate/DropdownUser.vue';
export default {
    name: "Header",
    components: {
        Menu,
        DropdownUser
    },
    props: ['website', 'offset_top', 'showMenu', 'user'],
    data: () => ({
        snackbar: '',
        isMenu: true,
        isMobile: false,
        drawer: null,
        windowSize: {
            x: 0,
            y: 0,
        },
    }),
    mounted() {
        this.onResize();
    },
    methods: {
        linkLogin() {
            window.location.href = '/dang-nhap';
        },
        onResize() {
            this.windowSize = { x: window.innerWidth, y: window.innerHeight };

            if (this.windowSize.x < 600) {
                this.isMenu = false;
                this.isMobile = true;
            } else if (this.windowSize.x < 1420) {
                this.isMenu = false;
                this.isMobile = false;
            } else {
                this.isMenu = true;
                this.isMobile = false;
            }

        },
    },
};
</script>

<style scoped>
.box-shadow-beautiful {
    box-shadow: 0px 0px 20px 0px #6363636b !important
}

.box-shadow-beautiful-none {
    box-shadow: none !important;
}
</style>