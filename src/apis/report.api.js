import axios from 'axios';
const url = process.env.VUE_APP_BACKEND_URL + '/api/report';
export default class Report {
    static async createReport(body, query, params) {
        try {
            const { key, status } = query;
            const { slug } = params;
            const res = await axios.post(`${url}/${slug}`, body, {
                params: {
                    key,
                    status
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