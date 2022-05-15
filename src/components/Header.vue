<template>
    <div class="header" v-resize="onResize">
        <v-app-bar app color="#004D40" height="70" style="box-shadow: 0px 0px 0px 0px;">
            <v-spacer>
                <v-container>
                    <v-row>
                        <v-col cols="3">
                            <img :src="website.srcLogo" />
                        </v-col>
                        <v-col cols="9">
                            <Menu v-if="isMenu" />
                        </v-col>
                    </v-row>
                </v-container>
            </v-spacer>

            <v-responsive max-width="400">
                <div>
                    <v-btn v-if="!isMobile" text dark>
                        <v-icon>mdi-login</v-icon>Đăng nhập / Đăng ký
                    </v-btn>
                    <v-btn v-if="!isMobile" class="ml-1" color="#B2DFDB">Tìm ứng viên</v-btn>
                    <v-app-bar-nav-icon :class="isMobile ? 'float-end' : ''" color="white" v-if="!isMenu"
                        @click="drawer = !drawer"></v-app-bar-nav-icon>
                </div>
            </v-responsive>
        </v-app-bar>

        <v-app-bar app color="white" height="70" style="margin-top: 70px" v-if="isMobile">
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
                <div>
                    <v-btn text>
                        <v-icon>mdi-login</v-icon>Đăng nhập / Đăng ký
                    </v-btn>
                    <v-btn class="ml-1" color="#B2DFDB">Tìm ứng viên</v-btn>
                </div>
            </v-responsive>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" fixed temporary>
            <!--  -->
        </v-navigation-drawer>
    </div>
</template>

<script>
import Menu from "../components/menu/Menu.vue";
export default {
    name: "Header",
    components: {
        Menu,
    },
    props: ['website'],
    data: () => ({
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

<style>
</style>