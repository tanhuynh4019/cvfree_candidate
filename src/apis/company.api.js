import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/company';
export default class Company {
    static async findByIdCompany(query, slug) {
        try {
            const { key } = query;
            const res = await axios.get(`${url}/${slug}`, {
                params: {
                    key
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }

    static async getCompany(query) {
        try {
            const { key, status } = query
            const res = await axios.get(`${url}`, {
                params: {
                    status,
                    key
                }
            });
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
}