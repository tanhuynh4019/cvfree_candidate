import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/auth';
export default class Auth {

    static async signUp(body, query) {
        try {
            const { key } = query;
            const res = await axios.post(`${url}/sign-up`, body, {
                params: {
                    key
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async changePassword(body, query) {
        try {
            const { key } = query;
            const res = await axios.patch(`${url}/change-password`, body, {
                params: {
                    key
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('tkc')}`
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async secret(query) {
        try {
            const { key } = query;
            const res = await axios.get(`${url}/secret`, {
                params: {
                    key
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('tkc')}`
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async checkEmailOTP(body, query) {
        try {
            const { key } = query;
            const res = await axios.patch(`${url}/check-email-otp`, body, {
                params: {
                    key
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('tkc')}`
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async logOut(query) {
        try {
            const { key } = query;
            const res = await axios.get(`${url}/log-out`, {
                params: {
                    key
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('tkc')}`
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async login(body, query) {
        try {
            const { key } = query
            const res = await axios.post(`${url}/login`, body, {
                params: {
                    key
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async sendEmailVerificationCode(query) {
        try {
            const { key } = query
            const res = await axios.patch(`${url}/send-email-verification-code`, null, {
                params: {
                    key
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('tkc')}`
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
}