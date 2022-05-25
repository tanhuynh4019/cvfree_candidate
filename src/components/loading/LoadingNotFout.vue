<template>
    <v-sheet :color="website.color.tealMain.color" dark>
        <div class="p-3">
            <div>
                Vui lòng <a :style="website.color.yellowSubColor" @click="linkLogin()">đăng nhập</a> để vào tính năng này
            </div>
        </div>
    </v-sheet>
</template>

<script>
export default {
    name: 'LoadingNotFout',
    props: ['website'],
    methods: {
        linkLogin(){
            window.location.href = '/dang-nhap'
        }
    }
}
</script>

<style>
</style>