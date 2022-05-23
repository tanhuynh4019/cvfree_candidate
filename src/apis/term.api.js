import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/term';
export default class Term {

    static async getTerm(query) {
        try {
            const { key, type } = query;
            const res = await axios.get(`${url}`, {
                params: {
                    key,
                    type
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
}