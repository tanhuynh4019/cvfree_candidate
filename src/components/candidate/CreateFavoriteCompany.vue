<template>
    <span>
        <v-btn @click="createFavoriteCompany()" v-if="!isCheck" :loading="isLoading" depressed
            :color="website.color.tealMain.color" dark>
            <v-icon size="18">mdi-bell-outline</v-icon>
            <span class="mt-1">Theo dõi công ty</span>
        </v-btn>
        <v-btn @click="deleteFavoriteCompany()" v-if="isCheck" :loading="isLoading" depressed
            :color="website.color.tealMain.color" dark>
            <v-icon size="18">mdi-bell</v-icon>
            <span class="mt-1">Đã theo dõi công ty</span>
        </v-btn>
        <v-snackbar v-model="snackbar.snackbar" :timeout="timeout" bottom>
            {{ snackbar.text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar.snackbar = false">
                    Đóng
                </v-btn>
            </template>
        </v-snackbar>
    </span>
</template>

<script>
import FavoriteApi from "../../apis/favorite.api";
export default {
    name: 'CreateFavoriteCompany',
    props: ['website', 'slugCompany'],
    data() {
        return {
            timeout: 3000,
            snackbar: {
                snackbar: false,
                text: '',
            },
            isLoading: false,
            isCheck: false
        }
    },
    async created() {
        const checkFavoriteCompany = await FavoriteApi.existFavoriteCompany({ key: 'favorite' }, { slug: this.slugCompany });
        if (!checkFavoriteCompany.error) {
            this.isCheck = true;
        }
        else {
            this.isCheck = false;
        }
    },
    methods:
    {
        async createFavoriteCompany() {
            let that = this;
            that.isLoading = true;
            const createFavoriteCompany = await FavoriteApi.createFavoriteCompany({ key: 'favorite' }, { slug: this.slugCompany })
            if (createFavoriteCompany === 'Unauthorized') {
                that.snackbar.snackbar = true;
                that.snackbar.text = 'Vui lòng đăng nhập trước khi theo dõi công ty!';
            }
            else {
                if (!createFavoriteCompany.error) {
                    that.snackbar.snackbar = true;
                    that.isCheck = true;
                    that.snackbar.text = createFavoriteCompany.message;
                    that.isLoading = false;
                } else {
                    that.snackbar.snackbar = true;
                    that.snackbar.text = createFavoriteCompany.message;
                    that.isLoading = false;
                }
            }
        },
        async deleteFavoriteCompany() {
            let that = this;
            that.isLoading = true;
            const deleteFavoriteCompany = await FavoriteApi.deleteFavoriteCompany({ key: 'favorite' }, { slug: this.slugCompany })
            if (deleteFavoriteCompany === 'Unauthorized') {
                that.snackbar.snackbar = true;
                that.snackbar.text = 'Vui lòng đăng nhập trước khi hủy việc làm!';
            }
            else {
                if (!deleteFavoriteCompany.error) {
                    that.snackbar.snackbar = true;
                    that.snackbar.text = deleteFavoriteCompany.message;
                    that.isCheck = false;
                    that.isLoading = false;
                } else {
                    that.snackbar.snackbar = true;
                    that.snackbar.text = deleteFavoriteCompany.message;
                    that.isLoading = false;
                }
            }
        }
    }
}
</script>

<style>
</style>