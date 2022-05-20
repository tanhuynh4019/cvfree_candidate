<template>
    <div>
        <v-dialog v-model="dialogCheckEmail" persistent max-width="500">
            <v-card>
                <v-card-title class="text-h5">
                    Xác thực email
                </v-card-title>
                <v-card-text>
                    Chào <b>{{ user.fullName }}</b>, để sử dụng tốt dịch vụ của {{ website.company }} và vấn dề bảo mật
                    -
                    bạn nên xác
                    thực email của mình! <b>Vui lòng bấm nút xác thực ngay</b>
                    <br /><br />
                    <i v-if="isCheckEmail_2 && !isCheckEmail">Bạn đã thực hiện xác thực, nhưng chưa nhập OTP chúng tôi
                        gửi về email. Hãy xác nhận lại bằng thao tác nút bên dưới!</i>
                    <div v-if="isCheckEmail">
                        <v-divider></v-divider>
                        <p>Mã xác nhận đã được gửi đến email <b>{{ user.email }}</b>. Bạn vui lòng kiểm tra tin nhắn và
                            nhập
                            mã
                            vào ô dưới đây.</p>
                        <div>
                            <v-otp-input length="6" dense type="number" v-model="otp"  :color="website.color.tealMain.color" @finish="onFinish"></v-otp-input>
                            <v-overlay absolute :value="isLoadingOTP">
                                <v-progress-circular indeterminate color="primary"></v-progress-circular>
                            </v-overlay>
                        </div>
                        <div>Mã xác nhận sẽ hết hạn sau
                            <span v-if="second > 1">(<b :style="website.color.redMain">{{ second }}s</b>)</span>
                            <span v-if="second < 1"><b :style="website.color.redMain">
                                    <v-btn :loading="isLoadingBtn" text small @click="sendEmailVerificationCode()"
                                        depressed :color="website.color.redMain.color">Gửi lại</v-btn>
                                </b></span>
                        </div>
                    </div>
                    <v-btn @click="sendEmailVerificationCode()" v-if="!isCheckEmail" :loading="isLoadingBtn"
                        :color="website.color.tealMain.color" dark depressed class="w-100 mt-5">
                        {{ isCheckEmail_2 ? 'Gửi lại mã xác thực' : 'Xác thực ngay' }}
                    </v-btn>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :color="website.color.redMain.color" text @click="dialogCheckEmail = false">
                        Không xác thực
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import FormatModule from "../../modules/Format.module";
import Auth from '../../apis/auth.api';
export default {
    name: 'DialogCheckEmail',
    props: ['website', 'user'],
    async created() {
        if (this.user.deadlineOtpEmail) {
            this.isCheckEmail_2 = true;
        }

        const dateNow = Date.now();
        const date = new Date(this.user.deadlineOtpEmail);
        if (date > dateNow) {
            this.second = new Date(date - dateNow).getSeconds();
            this.isCheckEmail = true;
        }
        else {
            this.second = 0;
            this.isCheckEmail = false;
        }
    },
    data() {
        return {
            otp: '',
            isLoadingOTP: false,
            isLoadingBtn: false,
            message: "",
            second: null,
            showSecond: 0,
            dialogCheckEmail: true,
            isCheckEmail: false,
            isCheckEmail_2: false,
        }
    },
    mounted() {
        this.coutDownSecond()
    },
    computed: {

    },
    methods: {
        coutDownSecond() {
            var that = this;
            setInterval(function () {
                if (that.second < 1) {
                    that.second = 0;
                }
                else {
                    that.second = that.second - 1
                }
            }, 1000);

            if (that.second < 1) {
                that.isCheckEmail = false;
            }
        },
        async onFinish() {
            let that = this;
            that.isLoadingOTP = true;
            const formData = new FormData();
            formData.append('otp', that.otp);
            const checkEmailOTP = await Auth.checkEmailOTP(formData, { key: 'auth' })
            if (!checkEmailOTP.error) {
                that.isLoadingOTP = false;
                that.dialogCheckEmail = false;
                that.$emit('showUser', checkEmailOTP.data);
                that.$emit('showSnackbar', { snackbar: true, text: checkEmailOTP.message });
            }
            else {
                that.otp = '';
                that.$emit('showSnackbar', { snackbar: true, text: checkEmailOTP.message });
            }
        },
        formatDate(date) {
            return FormatModule.formatDate(date, 'vi');
        },
        showSecondWhitDateNow(date) {
            const dateNow = Date.now();
            if (date > dateNow) {
                return '0';
            }
            else {
                return 'Còm 60s';
            }
        },
        async sendEmailVerificationCode() {
            let that = this;
            that.isLoadingBtn = true;
            const sendEmailVerificationCode = await Auth.sendEmailVerificationCode({ key: 'auth' });
            if (!sendEmailVerificationCode.error) {
                that.snackbar = true;
                that.text = sendEmailVerificationCode.message;
                that.isCheckEmail = true;
                that.$emit('showSnackbar', { snackbar: true, text: sendEmailVerificationCode.message });

                const dateNow = Date.now();
                const date = new Date(sendEmailVerificationCode.data.deadlineOtpEmail);
                this.second = new Date(date - dateNow).getSeconds();

                this.user = sendEmailVerificationCode.data;
                that.isLoadingBtn = false;
            }
            else {
                that.snackbar = true;
                that.text = sendEmailVerificationCode.message;
                that.$emit('showSnackbar', { snackbar: true, text: sendEmailVerificationCode.message });
            }
        }
    }
}
</script>

<style>
</style>