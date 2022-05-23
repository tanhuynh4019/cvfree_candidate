<template>
    <span>
        <v-dialog v-model="dialogShareJob" max-width="500px">
            <template v-slot:activator="{ on, attrs }">

                <v-btn v-bind="attrs" v-on="on" text dark><i class="mdi mdi-share-variant-outline"></i>
                    Chia sẻ
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    Chia sẻ qua mạng xã hội
                </v-card-title>
                <v-card-text style="font-size: 15px; font-weight: 400; margin-top: -20px;">
                    <div class="mt-4">Sao chép đường dẫn</div>
                    <v-text-field class="border w-100" disabled clearable small flat solo hide-details
                        :placeholder="link">
                        <template v-slot:append>
                            <v-fade-transition leave-absolute>
                                <v-btn small class="w-100" dark depressed>
                                    Sao chép</v-btn>
                            </v-fade-transition>
                        </template>
                    </v-text-field>
                    <v-row class="mt-2">
                        <v-col cols="12" sm="4">
                            <v-btn :href="`https://www.facebook.com/sharer/sharer.php?u=${link}`" _target="_blank" depressed class="w-100" dark color="#365899">
                                <v-icon left>
                                    mdi-facebook
                                </v-icon>
                                Facebook
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-btn depressed class="w-100" dark color="#ea4335">
                                <v-icon left>
                                    mdi-google
                                </v-icon>
                                Google
                            </v-btn>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-btn depressed class="w-100" dark color="#056497">
                                <v-icon left>
                                    mdi-linkedin
                                </v-icon>
                                Linkedin
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </span>
</template>

<script>
export default {
    name: 'ShareFavoriteJob',
    props: ['website', 'user'],
    async created() {

    },
    data() {
        return {
            dialogShareJob: false,
            link: window.location.href
        }
    },
    methods() {
        shareFacebook()
        {
            window.location.href = '';
        }
    }
}
</script>

<style>
</style>